import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./ChatInput.css";
import { useStateValue } from "./StateProvider";
const ChatInput = ({ channelName, channelId }) => {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const sendMessgae = (e) => {
    e.preventDefault();
    if (channelId) {
      //code
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message ${channelName}`}
          value={input}
          onChane={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={sendMessgae}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
