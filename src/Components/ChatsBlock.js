import React from "react";
import Chats from "./Chats"
import FriendItem from "./FriendItem";
import { getAllUsersBySearchString } from "../Api/User/User-api"
import { sleep } from "../Helpers/Sleep"

function ChatsBlock() {
  const [friendsSearchString, setFriendsSearchString] = React.useState("")
  const [friendsItemsShow, setFriendsItemsShow] = React.useState(false)
  const [friends, setFriends] = React.useState([])
  const [chats, setChats] = React.useState([])
  const inputRef = React.useRef()

  const onChangeFindFriends = async (e) => {
    await sleep(1000)
    setFriendsSearchString(e.target.value)
    const userId = localStorage.getItem("userId")
    const authToken = localStorage.getItem("authToken")
    if (userId && authToken) {
      const friendsResult = await getAllUsersBySearchString(userId, friendsSearchString, authToken)
      setFriends(friendsResult)
    }
  }

  const onClickFindFriends = (e) => {
    setFriendsItemsShow(true)
  }

  const onBlurFindFriends = (e) => {
    setFriendsItemsShow(false)
  }

  return (
    <div className="chats-block">
      <div className="friends-block" style={{ position: "relative" }}>
        <input ref={inputRef} onBlur={onBlurFindFriends} onClick={onClickFindFriends} onChange={onChangeFindFriends} placeholder={"Поиск друзей"} />
        <div className="friends-items">
          {/* {
            friends.length !== 0 && friends.map(friend => <FriendItem src={friend.src} name={friend.name} />)
          } */}
          <FriendItem friendId={"guid"} src="./archakov.png" name="archakov" />
          <FriendItem friendId={"guid"} src="./archakov.png" name="archakov" />
          <FriendItem friendId={"guid"} src="./archakov.png" name="archakov" />
        </div>
      </div>
      <Chats />
    </div>
  )
}
export default ChatsBlock;