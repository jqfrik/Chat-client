import React from "react";
import ChatItem from "./ChatItem";

function Chats() {
  return (
    <div className="chats">
      <ChatItem photoUrl={"photoUrl"} name={"Арчаков Дэннис"} statusActive={true} lastMessage={"Какого быть разработчиком высокого уровня"}/>
      <ChatItem photoUrl={"photoUrl"} name={"Арчаков Дэннис"} statusActive={true} lastMessage={"Какого быть разработчиком высокого уровня"}/>
      <ChatItem photoUrl={"photoUrl"} name={"Арчаков Дэннис"} statusActive={true} lastMessage={"Какого быть разработчиком высокого уровня"}/>
      <ChatItem photoUrl={"photoUrl"} name={"Арчаков Дэннис"} statusActive={true} lastMessage={"Какого быть разработчиком высокого уровня"}/>
      <ChatItem photoUrl={"photoUrl"} name={"Арчаков Дэннис"} statusActive={true} lastMessage={"Какого быть разработчиком высокого уровня"}/>
    </div>
  );
}
export default Chats;