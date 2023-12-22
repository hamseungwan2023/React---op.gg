import "./subHeader.css";

const SubHeader = () => {
  return (
    <div>
      <div className="subHeader">
        <span className="home">홈</span>
        <span>챔피언 분석</span>
        <span className="gameMode">게임 모드</span>
        <span>통계</span>
        <span>랭킹</span>
        <span>프로관전</span>
        <span>멀티서치</span>
        <span>커뮤니티</span>
        <span>강의</span>
      </div>
      <button className="subHeaderBtn">
        <span className="btn">13.24</span> 패치노트 보기
      </button>
    </div>
  );
};

export default SubHeader;
