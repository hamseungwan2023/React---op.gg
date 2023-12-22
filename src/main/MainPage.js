import Header from "./Header";
import SubHeader from "./SubHeader";
import Body from "./Body";
import Info from "./Info";
import "./main.css";

const MainPage = () => {
  return (
    <div className="main">
      <div className="main-content">
        <Header />
        <SubHeader />
        <Body />
        <Info />
      </div>
    </div>
  );
};

export default MainPage;
