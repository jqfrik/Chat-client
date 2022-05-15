import React from "react";
import MesssageItem from "./MessageItem";

function Messages() {
  return (
    <div className="messages">
      <MesssageItem textMessage={"Text message"} ourMessage={false}/>
      <MesssageItem textMessage={"Text message1"} ourMessage={true}/>
      <MesssageItem textMessage={"Text message2"} ourMessage={true}/>
    </div>
  );
}

export default Messages;