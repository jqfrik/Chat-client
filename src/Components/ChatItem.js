import React from "react";


function ChatItem({photoUrl, name, statusActive, lastMessage}) {
  return (
    <div className="chat-item">
      <div className="top-block">
        <img src="./archakov.png" alt="photo" />
        <p className="name">{name}</p>
        <p>{statusActive ? "active":"notActive"}</p>
      </div>
      <p>{lastMessage}</p>
    </div>
  );
}

export default ChatItem;
