import "./info.css";

const Info = () => {
  const no = (
    <img
      src="https://s-lol-web.op.gg/images/icon/icon-game-white.svg?v=1700641403304"
      width="16"
      height="16"
      alt="game"
      className="discord"
    ></img>
  );
  return (
    <div>
      <div className="officeInfo">
        <img
          src="https://s-lol-web.op.gg/images/icon/icon-opgglogo-white.svg?v=1700641403304"
          width="99"
          height="24"
          alt="OP.GG"
          loading="lazy"
        ></img>
        <div className="mainPreview">
          <div className="topPreview">
            <h5>OP.GG</h5>
            <div className="preview">
              <span>About OP.GG</span>
              <span>Company</span>
              <span>Blog</span>
              <span>로고 히스토리</span>
            </div>
          </div>
          <div className="topPreview">
            <h5>Products</h5>
            <div className="preview">
              <span>리그오브레전드{no}</span>
              <span>Gigs{no}</span>
              <span>데스크톱{no}</span>
              <span>전략 적 팀 전투{no}</span>
              <span>발로란트{no}</span>
              <span>배틀그라운드{no}</span>
              <span>오버워치2{no}</span>
              <span>이스포츠{no}</span>
              <span>독피지지{no}</span>
              <span>DUO{no}</span>
            </div>
          </div>
          <div className="topPreview">
            <h5>Apps</h5>
            <div className="preview">
              <span>OP.GG ANdroid App{no}</span>
              <span>OP.GG iOS App{no}</span>
              <span>TFT Android App{no}</span>
              <span>TFT iOS App{no}</span>
            </div>
          </div>
          <div className="topPreview">
            <h5>Resources</h5>
            <div className="preview">
              <span>개인정보처리방침</span>
              <span>이용약관</span>
              <span>도움말</span>
              <span>이메일 문의하기</span>
              <span>고객센터 문의</span>
            </div>
          </div>
          <div className="topPreview">
            <h5>More</h5>
            <div className="preview">
              <span>제휴</span>
              <span>광고</span>
              <span>채용</span>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="office">
        <p>
          주식회사 오피지지 (OP.GG) 통신판매업신고 : 제2019-서울강남-01973호
          사업자등록번호 : 295-88-00023 대표자 : 최상락
        </p>
        <p>
          서울특별시 강남구 테헤란로 507, 1층, 2층(삼성동, WeWork빌딩) 전화 :
          02-455-9903 (평일 09:00 ~ 18:00) 이메일 : service@op.gg
        </p>
        <p>
          © 2012-2023 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t
          reflect the views or opinions of Riot Games or anyone officially
          involved in producing or managing League
        </p>
        <p>
          of Legends. League of Legends and Riot Games are trademarks or
          registered trademarks of Riot Games, Inc. League of Legends © Riot
          Games, Inc.
        </p>
      </div>
      <div className="sns">
        <a
          target="_blank"
          href="https://www.instagram.com/opgg_official"
          rel="noreferrer"
        >
          <img
            src="https://s-lol-web.op.gg/images/icon/icon-logo-instagram.svg?v=1700641403304"
            width="24"
            height="24"
            alt="instagram account"
            loading="lazy"
          />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@opgg_official"
          rel="noreferrer"
        >
          <img
            src="https://s-lol-web.op.gg/images/icon/icon-logo-youtube.svg?v=1700641403304"
            width="24"
            height="24"
            alt="twitter account"
            loading="lazy"
          />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/opgg_official"
          rel="noreferrer"
        >
          <img
            src="https://s-lol-web.op.gg/images/icon/icon-logo-x.svg?v=1700641403304"
            width="24"
            height="24"
            alt="twitter account"
            loading="lazy"
          />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/opgg.official/"
          rel="noreferrer"
        >
          <img
            src="https://s-lol-web.op.gg/images/icon/icon-logo-facebook.svg?v=1700641403304"
            width="24"
            height="24"
            alt="facebook account"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default Info;
