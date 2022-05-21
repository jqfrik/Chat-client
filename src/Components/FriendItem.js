import React from "react"

function FriendItem(props) {
    return (
        <div className="friend-item">
            <img src={props.src} />
            <p>{props.name}</p>
        </div>
    )
}

export default FriendItem