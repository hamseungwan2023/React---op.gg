import "./userInfo.css";

const UserInfo = ({ userImg, userName, userLv }) => {
  return (
    <div className="info">
      <div>
        <img
          src={`https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon${userImg}.jpg?image=q_auto,f_webp,w_auto&v=1700641403304`}
        ></img>
        <h5>{userLv}</h5>
      </div>
      <h2>{userName}</h2>
      <h6>Prev.{userName}</h6>
      <a
        href="https://member.op.gg/personal-info?open=rsoAttach&amp;redirect_url=https%3A%2F%2Fwww.op.gg%2Fsummoners%2Fkr%2F%25ED%2595%25A8%25EC%2583%2588%25EB%25A1%259C%25EC%259D%25B4-1234"
        className="toRiot"
      >
        <img
          src="https://s-lol-web.op.gg/assets/images/icons/riot-logomark-circle-offwhite@2x.png?image=q_auto,f_webp,w_32,h_32&amp;v=1700641403304"
          alt=""
        />
        <span>라이엇 계정 연동하고 나만의 프로필을 설정해보세요.</span>
        <img
          src="https://s-lol-web.op.gg/images/icon/icon-arrow-right.svg?v=1700641403304"
          width="20"
          height="20"
          alt=">"
        />
      </a>
      <div className="userHistory">
        <button className="historyBtn">전적 갱신</button>
        <button className="tearBtn">티어 그래프</button>
      </div>
      <div className="infoAd">광고</div>
    </div>
  );
};

export default UserInfo;
