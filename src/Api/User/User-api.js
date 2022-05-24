import { fetchWrapper } from "../base-config";

export async function resetPassword(name, login, password, authToken) {}

export async function authentication(login, password) {
  let payload = {
    login,
    password,
  };
  return await fetchWrapper("/Users/Authentication", "POST", payload);
}

export async function getUserById(userId, authToken) {
  let payload = {
    userId,
  };
  return await fetchWrapper(
    "/Users/GetUserById",
    "POST",
    payload,
    "application/json",
    authToken
  );
}

export async function getFriendsByUserId(userId, authToken) {
  let payload = {
    Id: userId,
  };
  return await fetchWrapper(
    "/Users/GetFriendsById",
    "POST",
    payload,
    "application/json",
    authToken
  );
}

export async function getAllUsersBySearchString(
  userId,
  searchString,
  authToken
) {
  let payload = {
    currentUserId: userId,
    searchString: searchString,
  };
  return await fetchWrapper(
    "/Users/GetAllUsersBySearchString",
    "POST",
    payload,
    "application/json",
    authToken
  );
}
export async function register(name, login, password, authToken) {
  let payload = {
    name,
    login,
    password,
  };
  return await fetchWrapper(
    "/Users/Register",
    "POST",
    payload,
    "application/json",
    authToken
  );
}

export async function addFriend(currentUserId, friendId, authToken) {
  let payload = {
    currentUserId,
    friendId,
  };
  return await fetchWrapper(
    "/Users/AddFriend",
    "POST",
    payload,
    "application/json",
    authToken
  );
}

export async function removeFriend(currentUserId, friendId, authToken) {
  let payload = {
    currentUserId,
    friendId,
  };
  return await fetchWrapper(
    "/Users/RemoveFriend",
    "POST",
    payload,
    "application/json",
    authToken
  );
}

export async function getAllUsers() {}