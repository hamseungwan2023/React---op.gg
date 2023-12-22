import axios from "axios";
import { api } from "../../../main/Body";
import { useState, useEffect } from "react";
import "./userTier.css";

const UserTier = ({ userId, userPuuId, groupedData }) => {
  const [champion, setChampion] = useState([]);
  const [userChamp, setUserChamp] = useState([]);
  const [solo, setSolo] = useState([]);
  const [free, setFree] = useState([]);

  useEffect(() => {
    getTier();
    // getChampionJson();
    // getUserChamp();
  }, []);

  const getTier = async () => {
    try {
      const response = await axios.get(`
        https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userId}?api_key=${api}
        `);
      response.data.map((e) => {
        if (e.queueType === "RANKED_SOLO_5x5") {
          setSolo(e);
        } else {
          setFree(e);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  //   const getChampionJson = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json"
  //       );
  //       setChampion(response.data.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   const getUserChamp = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${userPuuId}?api_key=${api}`
  //       );
  //       setUserChamp(response);
  //       console.log(userChamp);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  const no = Object.keys(champion).map((matchKey) => {
    const match = champion[matchKey];
  });

  const getAvg = (win, lose) => {
    const sum = win + lose;
    const avg = (win / sum) * 100;
    return Math.floor(avg);
  };

  return (
    <div className="rankData">
      <div className="soloRank">
        <p>솔로랭크</p>
        <div className="rankLine"></div>
        <img
          src={`https://opgg-static.akamaized.net/images/medals_new/${solo.tier}.png?image=q_auto,f_webp,w_144&amp;v=1700641403304`}
          width="72"
          className="rankIcon"
        />
        <div className="textBox">
          <div className="centerData">
            <h2>{`${solo.tier} ${solo.rank}`}</h2>
            <span>{solo.leaguePoints}LP</span>
          </div>
          <div className="rightData">
            <span>
              {solo.wins}승 {solo.losses}패
            </span>
            <p>{getAvg(solo.wins, solo.losses)}%</p>
          </div>
        </div>
      </div>
      <div className="freeRank">
        <p>자유랭크</p>
        <div className="rankLine"></div>
        <img
          src={`https://opgg-static.akamaized.net/images/medals_new/${free.tier}.png?image=q_auto,f_webp,w_144&amp;v=1700641403304`}
          width="40"
          className="rankIcon"
        ></img>
        <div className="textBox">
          <div className="centerData">
            <h2>{`${free.tier} ${free.rank}`}</h2>
            <span>{free.leaguePoints}LP</span>
          </div>
          <div className="rightData">
            <span>
              {free.wins}승 {free.losses}패
            </span>
            <p>{getAvg(free.wins, free.losses)}%</p>
          </div>
        </div>
      </div>
      <div className="findDuo">
        <div className="duo">
          <img
            src="https://s-lol-web.op.gg/static/images/icon/logo/logo-duo-light.svg?v=1700641403304"
            width="24"
            height="24"
            alt="duo.op.gg"
          />
        </div>

        <span> DUO 팀원 찾기</span>
        <span className="arrow"></span>
      </div>

      <div className="mostChamp">
        <div className="season">
          <button>S2023 S2</button>
          <button>솔로랭크</button>
          <button>자유랭크</button>
        </div>
        <div className="champList"></div>
        <div className="moreView"></div>
      </div>
    </div>
  );
};

export default UserTier;
