import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./main/MainPage";
import UserPage from "./component/userpage/UserPage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={MainPage}></Route>
          <Route path="/:userName" Component={UserPage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
