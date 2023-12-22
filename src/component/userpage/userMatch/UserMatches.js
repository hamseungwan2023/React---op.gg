import { useState } from "react";
import "./userMatches.css";
import { useParams } from "react-router-dom";
import UserMatchData from "./UserMatchData";

const UserMatches = ({ data, userId, userPuuId, queue }) => {
  const [loading, setLoading] = useState(false);
  const { userName } = useParams();
  // console.log(data);

  const groupedData = [];
  const chunkSize = 10;
  const userData = [];

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    groupedData.push(chunk);
  }
  const no = groupedData.map((game) => {
    game.map((e) => {
      if (e[0] === userName) {
        userData.push(e);
      }
    });
  });

  const isBlueTeam = userData[2];
  //   //   console.log(userMatch);
  //   //   riotIdGameName
  // console.log(data);
  // console.log(userData);
  // console.log(groupedData);

  return (
    <div>
      <div className="matchLine"></div>
      <div className="list">
        <h4>종합</h4>
        <h4>챔피언</h4>
        <h4>인게임 정보</h4>
        <h4>
          <img
            src="https://s-lol-web.op.gg/images/icon/icon-tft.svg?image=q_auto,f_webp,w_32,h_32&amp;v=1700641403304"
            width="16"
            height="16"
            alt="전략적 팀 전투"
          />
          전략적 팀 전투
        </h4>
        <div>
          <div className="opScore">
            OP스코어로 더 정확한 내 실력을 확인해 보세요
            <button>
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-arrow-down.svg?v=1700641403304"
                alt="toggle"
              />
            </button>
          </div>
        </div>
      </div>

      <UserMatchData
        groupedData={groupedData}
        userId={userId}
        userPuuId={userPuuId}
        queue={queue}
      />
    </div>
  );
};

export default UserMatches;
