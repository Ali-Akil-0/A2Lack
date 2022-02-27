import React from "react";
import "./Sidebar.css";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import SidebarOption from "./SidebarOption";
import FileCopySharpIcon from "@mui/icons-material/FileCopySharp";
import DraftsSharpIcon from "@mui/icons-material/DraftsSharp";
import BookmarkBorderSharpIcon from "@mui/icons-material/BookmarkBorderSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import axios from "../axios";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import InsertCommentSharpIcon from "@mui/icons-material/InsertCommentSharp";
import { useState } from "react";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
const Sidebar = () => {
  const [{ user }] = useStateValue();

  const [channels, setChannels] = useState([]);
  // function to get info woth axios
  const getChannelList = () => {
    axios.get("/get/channelList").then((res) => {
      setChannels(res.data);
    });
  };
  useEffect(() => {
    getChannelList();
  }, []);
  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar__header">
        <div className="sidebar__headerInfo">
          <h2>A2Dev</h2>
          <h3>
            <FiberManualRecordSharpIcon />
            {user?.displayName}
          </h3>
        </div>
        <BorderColorSharpIcon />
      </div>
      <div className="sidebar__option">
        {/* Choices */}
        <SidebarOption Icon={InsertCommentSharpIcon} title="something" />
        <SidebarOption Icon={FileCopySharpIcon} title="FileCopySharp" />
        <SidebarOption Icon={DraftsSharpIcon} title="DraftsSharp" />
        <SidebarOption Icon={AppsSharpIcon} title="AppsSharp" />
        <SidebarOption Icon={InsertCommentSharpIcon} title="something" />
        <SidebarOption Icon="" title="something" />
        <SidebarOption Icon={ExpandLessSharpIcon} title="Expand less" />
        <hr />
        <SidebarOption Icon={ExpandMoreSharpIcon} title="Expand More" />
        <hr />
        <SidebarOption Icon={AddSharpIcon} title="Add Channel" />

        {channels.map((channel) => (
          <SidebarOption Icon={channel.id} title={channel.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
