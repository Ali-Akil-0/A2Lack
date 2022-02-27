import React from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";
import { useStateValue } from "./StateProvider";
const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar */}
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        {/* Time */}
        <AccessTimeSharpIcon />
      </div>

      <div className="header__search">
        {/* SearchIcon */}
        <SearchSharpIcon />
        {/* Input */}
        <input placeholder="Search here" />
      </div>
      <div className="header__right">
        {/* HelopIcon */}
        <HelpOutlineSharpIcon />
      </div>
    </div>
  );
};

export default Header;
