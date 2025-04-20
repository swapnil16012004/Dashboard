import React, { useContext, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { IoShieldHalfSharp } from "react-icons/io5";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { MyContext } from "../../../App";
import { Link } from "react-router-dom";
import UserAvatarImgComponent from "../../UserAvatarImgComponent";

const AccMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const context = useContext(MyContext);

  return (
    <>
      {context.islogin !== true ? (
        <Link to={"/login"}>
          <Button className="btn-blue btn-lg btn-round">Sign In</Button>
        </Link>
      ) : (
        <div className="myAccWrapper">
          <Button
            className="myAcc d-flex align-items-center"
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <UserAvatarImgComponent
              img={
                "https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
              }
            />
            <div className="userInfo">
              <h4>Swapnil Pawar</h4>
              <p className="mb-0">@Swapnil16</p>
            </div>
          </Button>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              My account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IoShieldHalfSharp />
              </ListItemIcon>
              Reset Password
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      )}
    </>
  );
};

export default AccMenu;
