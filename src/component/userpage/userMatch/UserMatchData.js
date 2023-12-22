import "./userMatchData.css";
import { useParams } from "react-router-dom";
import UserTier from "./UserTier";
// import { ko } from "../UserPage";
const QUEUETYPE = {
  400: "일반게임", //Normal Draft Pick
  420: "솔로랭크",
  430: "norm",
  440: "자유랭크",
  450: "무작위 총력전",
  700: "clash",
  800: "ai", // Deprecated
  810: "ai", // Deprecated
  820: "ai", // Deprecated
  830: "ai",
  840: "ai",
  850: "ai",
  900: "urf",
  920: "poro",
  1020: "ofa",
  1300: "nbg",
  1400: "usb", // Ultimate Spellbook
  2000: "tut",
  2010: "tut",
  2020: "tut",
};

const UserMatchData = ({ groupedData, userId, userPuuId, queue }) => {
  const { userName } = useParams();
  let userData = [];

  groupedData.map((e) => {
    e.map((e, i) => {
      if (e[0] === userName) {
        userData.push(e);
      }
    });
  });
  queue.map((e, i) => {
    userData[i].push(e);
  });
  return (
    <div className="userMatchData">
      <div className="matchAd"></div>
      <div className="qwer">
        <UserTier
          userId={userId}
          userPuuId={userPuuId}
          groupedData={groupedData}
        />
        <div className="asdf">
          {userData.map((e, i) => {
            return (
              <div className={`player-card ${e[2] ? "blue" : "red"}`}>
                {QUEUETYPE[e[6]]}
                <img
                  src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${e[1]}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1700641403304
`}
                ></img>
                <h2>{e[3]}/</h2> <h2 className="death">{e[4]}</h2>
                <h2>/{e[5]}</h2>
                <div className="left-column">
                  {groupedData[i].slice(0, 5).map((e, i) => (
                    <div key={i}>
                      <img
                        src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${e[1]}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1700641403304
  `}
                      ></img>
                      {e[0]}
                    </div>
                  ))}
                </div>
                <div className="right-column">
                  {groupedData[i].slice(5, 10).map((e, i) => (
                    <div key={i}>
                      {" "}
                      <img
                        src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${e[1]}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1700641403304
  `}
                      ></img>
                      {e[0]}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserMatchData;
