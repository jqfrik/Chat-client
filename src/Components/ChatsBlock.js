import React from "react";
import Chats from "./Chats"
import FriendItem from "./FriendItem";
import { getAllUsersBySearchString } from "../Api/User/User-api"
import { createChat, getChatById } from "../Api/Chat/Chat-api"

function ChatsBlock() {
  const [friendsSearchString, setFriendsSearchString] = React.useState('')
  const [friendsItemsShow, setFriendsItemsShow] = React.useState(false)
  const [friends, setFriends] = React.useState([])
  const [chats, setChats] = React.useState([])
  const friendsLimit = 10
  let typingMessage = false

  window.chats = chats
  window.friends = friends

  const onChangeFindFriends = async (e) => {
    if(typingMessage){
      return
    }
    typingMessage = true
    setFriendsSearchString(e.target.value)
    const userId = localStorage.getItem("userId")
    const authToken = localStorage.getItem("authToken")
    if (userId && authToken) {
      const friendsResultResponse = await getAllUsersBySearchString(userId, friendsSearchString, authToken)
      let friendsResult = await friendsResultResponse.json()
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
    const authToken = localStorage.getItem("authToken")
    let createChatResponse = await createChat(localStorage.getItem("userId"), friendUserId, authToken)
    let createChatResult =  await createChatResponse.json()
    if(createChatResult.data){
      let chatId = createChatResult.data
      const currentChatResponse = await getChatById(chatId,authToken)
      let currentChatResult = await currentChatResponse.json()
      if(currentChatResult.data){
        setChats(chats => [...chats, currentChatResponse.data])
      }
      console.log("Не смог получить информацию по чату")
    }else{
        //Не смог создать чат
    }
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
      <Chats chats={chats}/>
    </div>
  )
}
export default ChatsBlock;