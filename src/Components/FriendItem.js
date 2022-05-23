import React from "react"

function FriendItem(props) {
    const onClickFriendItem = (e) => {
                
    }
    return (
        <div className="friend-item" onClick={onClickFriendItem}>
            <img src={props.src} />
            <p>{props.name}</p>
        </div>
    )
}

export default FriendItem