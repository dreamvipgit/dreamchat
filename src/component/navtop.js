import { FaUserCircle } from "react-icons/fa";
import { RiRefreshLine, RiMessage2Fill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./vip.css";
export default function Navtop() {
  return (
    <div className="navtop">
      <div className="navtopcontent">
        <div className="navtopprofile">
          <FaUserCircle />
        </div>
        <div className="navtopright">
          <div className="navtoprefresh">
            <RiRefreshLine />
          </div>
          <div className="navtopmessage">
            <RiMessage2Fill />
          </div>
          <div className="navtopmore">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
