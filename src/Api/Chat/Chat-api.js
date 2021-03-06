import { fetchWrapper } from "../base-config";

export async function checkChatWithCurrentFriend(
  currentUserId,
  friendUserId,
  authToken
) {
  let payload = {
    currentUserId,
    friendUserId,
  };
  return await fetchWrapper(
    "/Users/CheckChatWithFriend",
    "POST",
    payload,
    "application/json",
    authToken
  );
}

export async function createChat(currentUserId, friendUserId, authToken) {
  let payload = {
    currentUserId,
    friendUserId,
  };
  return await fetchWrapper(
    "/Chat/Create",
    "POST",
    payload,
    "application/json",
    authToken
  );
}

export async function getChatById(chatId,authToken){
  return await fetchWrapper(`/Chat/GetChatById/${chatId}`,"GET",null,"application/json", authToken)
}

export async function archiveChat(chatId,authToken){
  let payload = {
    chatId
  };
  return await fetchWrapper("/Chat/ArchiveChat", "POST", payload, "application/json", authToken)
}