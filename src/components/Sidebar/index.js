import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import Settings from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logout from "@mui/icons-material/Logout";
import { BsFillPersonFill } from "react-icons/bs";

const Sidebar = () => {
  const [isActiveTab, setIsActiveTab] = useState(null);
  const [isToggle, setIsToggle] = useState(false);
  function isActive(index) {
    if (isActiveTab === index) {
      setIsToggle(!isToggle);
    } else {
      setIsActiveTab(index);
      setIsToggle(true);
    }
  }

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to={"/"}>
              <Button
                className={`w-100 ${isActiveTab === 0 ? "active" : ""}`}
                onClick={() => isActive(0)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className={`w-100 ${
                isActiveTab === 1 && isToggle === true ? "active" : ""
              }`}
              onClick={() => isActive(1)}
            >
              <span className="icon p">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                isActiveTab === 1 && isToggle === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={"/products"}>Product list</Link>
                </li>
                <li>
                  <Link to={"/product/details"}>Product View</Link>
                </li>
                <li>
                  <Link to={"/"}>Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to={"/"}>
              <Button
                className={`w-100 ${
                  isActiveTab === 2 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isActive(2)}
              >
                <span className="icon">
                  <FaCartArrowDown />
                </span>
                Orders
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button
                className={`w-100 ${
                  isActiveTab === 3 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isActive(3)}
              >
                <span className="icon">
                  <MdMessage />
                </span>
                Messages
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button
                className={`w-100 ${
                  isActiveTab === 4 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isActive(4)}
              >
                <span className="icon">
                  <FaBell />
                </span>
                Notifications
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button
                className={`w-100 ${
                  isActiveTab === 5 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isActive(5)}
              >
                <span className="icon">
                  <Settings />
                </span>
                Settings
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/login"}>
              <Button
                className={`w-100 ${
                  isActiveTab === 6 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isActive(6)}
              >
                <span className="icon">
                  <BsFillPersonFill />
                </span>
                Login
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/signUp"}>
              <Button
                className={`w-100 ${
                  isActiveTab === 7 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isActive(7)}
              >
                <span className="icon p">
                  <BsFillPersonFill />
                </span>
                Sign Up
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button
                className={`w-100 ${
                  isActiveTab === 8 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isActive(8)}
              >
                <span className="icon">
                  <FaCartArrowDown />
                </span>
                Orders
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button
                className={`w-100 ${
                  isActiveTab === 9 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isActive(9)}
              >
                <span className="icon">
                  <MdMessage />
                </span>
                Messages
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button
                className={`w-100 ${
                  isActiveTab === 10 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isActive(10)}
              >
                <span className="icon">
                  <FaBell />
                </span>
                Notifications
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button
                className={`w-100 ${
                  isActiveTab === 11 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isActive(11)}
              >
                <span className="icon">
                  <Settings />
                </span>
                Settings
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
        </ul>
        <br />
        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant="contained">
              <Logout />
              logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
