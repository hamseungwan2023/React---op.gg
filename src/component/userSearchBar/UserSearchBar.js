import { useState } from "react";
import axios from "axios";
import { api } from "../../main/Body";
import { useNavigate } from "react-router-dom";
import "./userSearchBar.css";

const UserSearchBar = () => {
  const [input, setInput] = useState("");
  const [dataList, setDataList] = useState({});
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
    <div className="userSearch">
      <img
        src="https://meta-static.op.gg/logo/image/3e4822d54ae8100dced135597718821c.png?image=q_auto,f_webp,w_auto,h_448&amp;v=1700641403304"
        height="224"
        alt="OP.GG logo (2023 월드챔피언십 우승 티원)"
        title="2023 월드챔피언십 우승 티원"
      />

      <div className="userSearchBar">
        <label>
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
          <input
            placeholder="플레이어 검색"
            onChange={onChangeHandler}
            value={input}
          ></input>
          <button onClick={onSubmitHandler}>.GG</button>
        </label>
      </div>
    </div>
  );
};

export default UserSearchBar;
