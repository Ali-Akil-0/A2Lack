import React from "react";
import "./SidebarOption.css";
import { useNavigate } from "react-router-dom";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const navigate = useNavigate();
  const selectChannel = () => {
    if (id) {
      // navigate  =  reload to this page
      // doesnt care for local host you idiot
      navigate(`/room/${id}`);
    } else {
      navigate(title);
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please Enter Channel Name : ");
    if (channelName) {
      // db.collection("rooms").add({
      //   name:channelName
      // });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/* rendering icon impported in another componnet */}
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
