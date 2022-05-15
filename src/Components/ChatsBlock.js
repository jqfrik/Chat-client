import React from "react";
import Chats from "./Chats"

function ChatsBlock(){
    return (
        <div className="chats-block">
          <button>Поиск друзей</button>
          <Chats />
        </div>
    )
}
export default ChatsBlock;