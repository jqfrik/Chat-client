import React from "react"

function FriendItem(props) {
    const onClickUser = async (e) => {
        let createChatResult = await props.createChat()
        debugger
        let res = 0
    }
    return (
        <div className="friend-item" onMouseDown={onClickUser}>
            <p>{props.name}</p>
            <div className="photo" style={{fontSize:"20px"}}>{props.name[0]}</div>
        </div>
    )
}

export default FriendItem