import SubHeader from "./SubHeader";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <img
              src="https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1700641403304"
              width="65"
              height="16"
              alt="OP.GG"
            ></img>
          </li>
          <li className="lol">
            <img
              src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48,h_48&amp;v=1700641403304"
              width="24"
              height="24"
              alt="리그오브레전드"
            ></img>
            <span>리그오브레전드</span>
          </li>
          <div className="otherColor">
            <li>
              <a href="https://gigs.op.gg" target="_blank" rel="noreferrer">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/gigs.svg?image=q_auto,f_webp,w_48,h_48&amp;v=1700641403304"
                  width="24"
                  height="24"
                  alt="Gigs"
                />
                <span className="n">N</span>
                <span>Gigs</span>
              </a>
            </li>
            <li>
              <a href="https://op.gg/desktop/" target="_blank" rel="noreferrer">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/01-icon-00-logo-icon-opggsquare.svg?image=q_auto,f_webp,w_48,h_48&amp;v=1700641403304"
                  width="24"
                  height="24"
                  alt="데스크톱"
                />
                <span>데스크톱</span>
              </a>
            </li>
            <li>
              <a href="https://tft.op.gg" target="_blank" rel="noreferrer">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img_navi_tft-whte.svg?image=q_auto,f_webp,w_48,h_48&amp;v=1700641403304"
                  width="24"
                  height="24"
                  alt="전략적 팀 전투"
                />
                <span>전략적 팀 전투</span>
              </a>
            </li>
            <li>
              <a href="https://valorant.op.gg" target="_blank" rel="noreferrer">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-valorant-white.svg?image=q_auto,f_webp,w_48,h_48&amp;v=1700641403304"
                  width="24"
                  height="24"
                  alt="발로란트"
                />
                <span>발로란트</span>
              </a>
            </li>
            <li>
              <a href="https://pubg.op.gg" target="_blank" rel="noreferrer">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-pubg-gray.svg?image=q_auto,f_webp,w_48,h_48&amp;v=1700641403304"
                  width="24"
                  height="24"
                  alt="배틀그라운드"
                />
                <span>배틀그라운드</span>
              </a>
            </li>
            <li>
              <a
                href="https://overwatch.op.gg"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-overwatch-gray.svg?image=q_auto,f_webp,w_48,h_48&amp;v=1700641403304"
                  width="24"
                  height="24"
                  alt="오버워치2"
                />
                <span className="n">N</span>
                <span>오버워치2</span>
              </a>
            </li>
            <li>
              <a href="https://esports.op.gg" target="_blank" rel="noreferrer">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img_navi_esports.svg?image=q_auto,f_webp,w_48,h_48&amp;v=1700641403304"
                  width="24"
                  height="24"
                  alt="이스포츠"
                />
                <span>이스포츠</span>
              </a>
            </li>
            <li>
              <a href="https://talk.op.gg" target="_blank" rel="noreferrer">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-white.svg?image=q_auto,f_webp,w_48,h_48&amp;v=1700641403304"
                  width="24"
                  height="24"
                  alt="톡피지지"
                />
                <span>톡피지지</span>
              </a>
            </li>
            <li>
              <a href="https://duo.op.gg" target="_blank" rel="noreferrer">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-duo-gray.svg?image=q_auto,f_webp,w_48,h_48&amp;v=1700641403304"
                  width="24"
                  height="24"
                  alt="Duo"
                />
                <span>Duo</span>
              </a>
            </li>
            <div className="rightSide">
              <button type="button" className="qna"></button>
              <div>
                <button className="theme"></button>
                <img
                  src="https://s-lol-web.op.gg/images/icon/icon-world-light-blue.svg?v=1700641403304"
                  width="24"
                  height="24"
                  alt=""
                ></img>
              </div>
              <div>
                <select className="dropdown">
                  <option value="en_US">English</option>
                  <option value="ko_KR">한국어</option>
                  <option value="ja_JP">日本語</option>
                  <option value="pl_PL">język polski</option>
                  <option value="fr_FR">français</option>
                  <option value="de_DE">Deutsch</option>
                  <option value="es_ES">español</option>
                  <option value="nl_NL">Nederlands</option>
                  <option value="da_DK">dansk</option>
                  <option value="sv_SE">Svenska</option>
                  <option value="no_NO">Norsk</option>
                  <option value="ru_RU">русский язык</option>
                  <option value="hu_HU">magyar</option>
                  <option value="fi_FI">suomi</option>
                  <option value="tr_TR">Türkçe</option>
                  <option value="ro_RO">limba română</option>
                  <option value="pt_BR">português</option>
                  <option value="zh_CN">简体中文</option>
                  <option value="zh_TW">繁體中文</option>
                  <option value="ar_SA">العربية</option>
                  <option value="sr_CS">српски језик</option>
                  <option value="it_IT">italiano</option>
                  <option value="th_TH">ไทย</option>
                  <option value="vi_VN">Tiếng Việt</option>
                </select>
              </div>
              <div>
                <a
                  href="https://member.op.gg/accounts/login?redirect_url=https://www.op.gg/"
                  className="login"
                >
                  로그인
                </a>
              </div>
            </div>
          </div>
        </ul>
      </nav>
      <SubHeader />
    </div>
  );
};

export default Header;
