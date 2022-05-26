import React from "react"

function FriendItem(props) {
    const onClickUser = async (e) => {
        await props.createChat()
    }
    return (
        <div className="friend-item" onMouseDown={onClickUser}>
            <p>{props.name}</p>
            <div className="photo" style={{fontSize:"20px"}}>{props.name[0]}</div>
        </div>
    )
}

export default FriendItem