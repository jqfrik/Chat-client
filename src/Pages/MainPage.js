import React from "react";
import Messages from "../Components/Messages";
import ChatsBlock from "../Components/ChatsBlock";

function MainPage() {
    return (
        <div className="main-content">
            <ChatsBlock />
            <Messages />
        </div>
    );
}
export default MainPage;