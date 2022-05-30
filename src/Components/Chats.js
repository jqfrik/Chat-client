import React from "react";
import ChatItem from "./ChatItem";

function Chats(props) {
  return (
    <div className="chats">
      {
        props.chats.map(chat => <ChatItem photoUrl={chat.photoUrl} name={chat.title} statusActive={true} lastMessage={chat.messages[0] || "Нет сообщений"}/>)
      }
      
    </div>
  );
}
export default Chats;