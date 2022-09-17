import Navtop from "./component/navtop";
import Searchbar from "./component/searchbar";
import UserChat from "./component/userchat";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navtop />
      <Searchbar />
      <UserChat />
    </div>
  );
}
