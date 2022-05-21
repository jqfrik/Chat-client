import React from "react";
import Chats from "./Chats"
import FriendItem from "./FriendItem";
import { getAllUsersBySearchString } from "../Api/User/User-api"
import { sleep } from "../Helpers/Sleep"

function ChatsBlock() {
  const [friendsSearchString, setFriendsSearchString] = React.useState("")
  const [friendsItemsShow, setFriendsItemsShow] = React.useState(false)
  const [friends, setFriends] = React.useState([])
  const [typedText,setTypedText] = React.useState(false)

  const onChangeFindFriends = async (e) => {
    if(typedText){
      return;
    }
    setTypedText(true)
    await sleep(1000)
    setFriendsItemsShow(x => !x)
    setFriendsSearchString(e.target.value)
    const userId = localStorage.getItem("userId")
    const authToken = localStorage.getItem("authToken")
    if (userId && authToken) {
      const friendsResult = await getAllUsersBySearchString(userId, friendsSearchString, authToken)
      setFriends(friendsResult)
    }
    setTypedText(false)
  }

  return (
    <div className="chats-block">
      <div className="friends-block">
        <input onChange={onChangeFindFriends} placeholder={"Поиск друзей"} />
        <div className="friends-items" style={{ display: friendsItemsShow ? "block" : "none" }}>
          {
            friends.length !== 0 && friends.map(friend => <FriendItem src={friend.src} name={friend.name} />)
          }
        </div>
      </div>
      <Chats />
    </div>
  )
}
export default ChatsBlock;