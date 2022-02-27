import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect } from "react";
import { useState } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";
const Chat = () => {
  // getting the parameters from the link
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      //code
    }
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {/* Message */}
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            time={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <div className="chat__input">
        <ChatInput channelName={roomDetails?.name} channelId={roomId} />
      </div>
    </div>
  );
};

export default Chat;
