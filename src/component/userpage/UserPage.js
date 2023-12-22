import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../main/Body";
import axios from "axios";
import UserInfo from "./UserInfo";
import UserMatches from "./userMatch/UserMatches";
import Header from "../../main/Header";
import SubHeader from "../../main/SubHeader";
import "./userPage.css";
import UserSearchBar from "../userSearchBar/UserSearchBar";

export const ko = {
  solo: "솔랭",
  norm: "일반",
  aram: "칼바람",
  flex: "자랭",
  nbg: "돌넥",
  usb: "궁주문서",
  urf: "URF",
  ofa: "단일",
  ai: "AI대전",
  poro: "포로왕",
  tut: "튜토리얼",
  etc: "기타",
  clash: "격전",
};

const UserPage = () => {
  const [user, setUser] = useState({});
  const [matches, setMatches] = useState({});
  const [userMatch, setUserMatch] = useState({});
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [userPuuId, setUserPuuId] = useState("");
  const { userName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Get user
        const userResponse = await axios.get(
          `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${api}`
        );
        setUser(userResponse.data);
        setUserId(userResponse.data.id);
        setUserPuuId(userResponse.data.puuid);
        // Get match IDs
        const matchIdResponse = await axios.get(
          `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${userResponse.data.puuid}/ids?start=0&count=5&api_key=${api}`
        );
        setMatches(matchIdResponse.data);

        // Get match details
        const matchDetails = await Promise.all(
          matchIdResponse.data.map(async (id) => {
            try {
              const response = await axios.get(
                `https://asia.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${api}`
              );
              return response.data;
            } catch (err) {
              console.error(err);
              return null;
            }
          })
        );
        setUserMatch(matchDetails);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userName]);
  let wa = [];
  const queue = [];

  const no = Object.keys(userMatch).map((matchKey) => {
    const match = userMatch[matchKey];
    queue.push(match.info.queueId);
    wa.push(match.info.participants);
  });
  // console.log(queue);
  const lastData = [];
  for (let i = 0; i < wa.length; i++) {
    for (let j = 0; j < wa[i].length; j++) {
      lastData.push([
        wa[i][j].riotIdGameName,
        wa[i][j].championName,
        wa[i][j].win,
        wa[i][j].kills,
        wa[i][j].deaths,
        wa[i][j].assists,
      ]);
    }
  }

  // console.log("wa", wa);
  // console.log(userMatch);

  return (
    <div className="pageMain">
      {loading === true ? <div className="loading">로딩중입니다...</div> : null}
      {loading === false ? (
        <div>
          <Header />
          <UserSearchBar />
          <SubHeader />
          <UserInfo
            userImg={user.profileIconId}
            userName={user.name}
            userLv={user.summonerLevel}
          />
          <UserMatches
            data={lastData}
            userId={userId}
            userPuuId={userPuuId}
            queue={queue}
          />
        </div>
      ) : null}
    </div>
  );
};

export default UserPage;
