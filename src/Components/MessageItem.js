import React from "react";

function MesssageItem({textMessage,ourMessage}) {
  return (
    <div className="message-item" style={{"message-item-reverse":ourMessage ? true : false}}>
      <img src="./archakov.png" />
      <p>{textMessage}</p>
    </div>
  );
}

export default MesssageItem;
