import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import AccMenu from "./AccMenu";
//import { MdDarkMode } from "react-icons/md";
// import { MdOutlineMenu } from "react-icons/md";
import React, { useContext, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { MyContext } from "../../App";
const Header = () => {
  const context = useContext(MyContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changetheme = () => {
    if (context.themeMode === "light") {
      context.setThemeMode("dark");
    } else {
      context.setThemeMode("light");
    }
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt="logo" />
                <span className="ml-2">HOTASH</span>
              </Link>
            </div>
            <div className="col-sm-3 d-flex align-items-center part2">
              <Button
                className="rounded-circle mr-3"
                onClick={() =>
                  context.setIsToggleSidebar(!context.isToggleSidebar)
                }
              >
                {context.isToggleSidebar === false ? (
                  <MdOutlineMenuOpen />
                ) : (
                  <MdOutlineMenu />
                )}
              </Button>
              <SearchBox />
            </div>
            <div className="col-sm-7 d-flex align-items-center justify-content-end part3 ">
              <Button
                className="rounded-circle mr-3"
                onClick={() => changetheme()}
              >
                <MdOutlineLightMode />
              </Button>
              <Button className="rounded-circle mr-3">
                <IoCartOutline />
              </Button>
              <Button className="rounded-circle mr-3">
                <MdOutlineMailOutline />
              </Button>
              <Button
                className="rounded-circle mr-3"
                onClick={handleClick}
                aria-controls={open ? "notifications" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <FaRegBell />
              </Button>
              <Menu
                anchorEl={anchorEl}
                className="dropdown_list"
                id="notifications"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    sx: {
                      mt: 1.9,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div className="head pl-3">
                  <h4>Orders (12)</h4>
                </div>
                <Divider className="mb-1" />
                <div className="scroll">
                  <MenuItem onClick={handleClose}>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Swapnil</b>
                            added to his favourite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few seconds ago !</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Swapnil</b>
                            added to his favourite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few seconds ago !</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Swapnil</b>
                            added to his favourite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few seconds ago !</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Swapnil</b>
                            added to his favourite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few seconds ago !</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Swapnil</b>
                            added to his favourite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few seconds ago !</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Swapnil</b>
                            added to his favourite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">few seconds ago !</p>
                      </div>
                    </div>
                  </MenuItem>
                </div>
                <div className="pl-3 pr-3 pt-2 pb-1 w-100">
                  <Button className="btn-blue w-100">
                    View all notifications
                  </Button>
                </div>
              </Menu>
              <AccMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
