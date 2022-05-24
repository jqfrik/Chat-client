import React from "react";
import Chats from "./Chats"
import FriendItem from "./FriendItem";
import { getAllUsersBySearchString } from "../Api/User/User-api"
import { createChat } from "../Api/Chat/Chat-api"

function ChatsBlock() {
  const [friendsSearchString, setFriendsSearchString] = React.useState('')
  const [friendsItemsShow, setFriendsItemsShow] = React.useState(false)
  const [friends, setFriends] = React.useState([])
  const [chats, setChats] = React.useState([])
  const friendsLimit = 10
  let typingMessage = false

  const onChangeFindFriends = async (e) => {
    if(typingMessage){
      return
    }
    typingMessage = true
    setFriendsSearchString(e.target.value)
    const userId = localStorage.getItem("userId")
    const authToken = localStorage.getItem("authToken")
    if (userId && authToken) {
      const friendsResult = await getAllUsersBySearchString(userId, friendsSearchString, authToken)
      setFriends(friendsResult)
    }
    typingMessage = false
  }

  const onClickFindFriends = (e) => {
    setFriendsItemsShow(true)
  }

  const onBlurFindFriends = (e) => {
    setFriendsItemsShow(false)
  }

  const onCreateChat = async (friendUserId) => {
    
    return await createChat(localStorage.getItem("userId"),friendUserId,localStorage.getItem("authToken"))
  }

  return (
    <div className="chats-block">
      <div className="friends-block" style={{ position: "relative" }}>
        <input className="searchString" value={friendsSearchString} onBlur={onBlurFindFriends} onClick={onClickFindFriends} onChange={onChangeFindFriends} placeholder={"Поиск друзей"} />
        <div className="friends-items" style={{display: friendsItemsShow ? "block" : "none",position:"absolute"}}>
          {
            friends.length !== 0 && friends.filter((val, idx)=> idx < friendsLimit).map(friend => <FriendItem createChat={() => onCreateChat(friend.id)} name={friend.name} />)
          }
        </div>
      </div>
      <Chats />
    </div>
  )
}
export default ChatsBlock;