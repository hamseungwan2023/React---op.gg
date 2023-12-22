import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./body.css";

export const api = "RGAPI-665895e1-626f-4434-aa07-00634f4b230f";
export let dataList = {};
const Body = () => {
  const [input, setInput] = useState("");
  // const [dataList, setDataList] = useState({});
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const navigate = useNavigate();

  const onSubmitHandler = async () => {
    try {
      const response = await axios.get(
        `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${input}?api_key=${api}
        `
      );

      dataList = response.data;
      navigate(`/${dataList.name}`);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="body">
      <img
        src="https://meta-static.op.gg/logo/image/3e4822d54ae8100dced135597718821c.png?image=q_auto,f_webp,w_auto,h_448&amp;v=1700641403304"
        height="224"
        alt="OP.GG logo (2023 월드챔피언십 우승 티원)"
        title="2023 월드챔피언십 우승 티원"
      />

      <div className="searchBar">
        <label>
          <span className="SBspan">지역</span>

          <span className="SBspan1">검색</span>
          <select id="kr">
            <option value="na">NA</option>
            <option value="euw">EUW</option>
            <option value="eune">EUNE</option>
            <option value="oce">OCE</option>
            <option value="kr" selected="kr">
              KR
            </option>
            <option value="jp">JP</option>
            <option value="br">BR</option>
            <option value="las">LAS</option>
            <option value="lan">LAN</option>
            <option value="ru">RU</option>
            <option value="tr">TR</option>
            <option value="sg">SG</option>
            <option value="ph">PH</option>
            <option value="tw">TW</option>
            <option value="vn">VN</option>
            <option value="th">TH</option>
          </select>
        </label>
        <label>
          <input placeholder="플레이어 검색" onChange={onChangeHandler}></input>
          <button onClick={onSubmitHandler}>.GG</button>
        </label>
      </div>
      <div className="bottomBtn">
        <button>
          <img
            src="https://s-lol-web.op.gg/static/images/icon/logo/icon-window-white.svg?v=1700641403304"
            width="24"
            height="24"
            alt="window"
          />
          데스크탑 무료 다운로드
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g id="icon_riot" fill="currentColor">
              <path
                id="Combined Shape"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 8.21102L12.6596 3.74023L20.2193 5.62338V15.5404L17.0898 15.9197L15.8434 8.83422L15.2472 9.10518L15.8569 16.0688L12.6867 16.4617L11.5487 9.98579L10.9526 10.2567L11.508 16.6107L8.37849 16.99L7.33531 11.1103L6.7392 11.3812L7.24047 17.139L5.41152 17.3694L3 8.21102ZM13.0525 18.548L12.8899 17.6403L20.2329 16.7326V19.7402L13.0525 18.548Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          라이엇 ID검색 변경 안내
        </button>
      </div>

      <div className="ad">광고</div>
      <div className="popular">인기글</div>
    </div>
  );
};

export default Body;
