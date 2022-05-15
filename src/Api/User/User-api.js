const resp = await fetch("../../../appsettings.json")
const jsonConfig = resp.json();
const baseUrl = jsonConfig.baseUrl;

async function fetchWrapper(url, method, payload, contentType = "application/json", authToken = ""){
    let bodyWrapper = {
        method:method,
        headers:{
            contentType:contentType,
            authorization:authToken
        },
    };
    if(payload && method?.toLowerCase() != "get"){
        bodyWrapper.body = payload;
    }

    let response = await fetch(baseUrl + url,bodyWrapper);
    let json = await response.json();
    return json;
}


async function resetPassword(name, login, password, authToken){

}

async function authentication(login, password ,authToken){
    let payload = {
        login,
        password
    };
    return await fetchWrapper("/Users/Authentication", "POST", payload, authToken)
}

async function getUserById(userId ,authToken){
    let payload = {
        userId
    };
    return await fetchWrapper("/Users/GetUserById", "POST", payload, authToken = authToken)
}

async function getFriendsByUserId(userId, authToken){
    let payload = {
        Id: userId  
    };
    return await fetchWrapper("/Users/GetFriendsById", "POST", payload, authToken = authToken);
}
async function register(name, login, password, authToken){
    let payload = {
        name,
        login,
        password
    };
    return await fetchWrapper("/Users/Register", "POST", payload, authToken = authToken)
}

async function addFriend(currentUserId, friendId, authToken){
    let payload = {
        currentUserId,
        friendId
    };
    return await fetchWrapper("/Users/AddFriend", "POST", payload, authToken = authToken)
}

async function removeFriend(currentUserId, friendId, authToken){
    let payload = {
        currentUserId,
        friendId
    };
    return await fetchWrapper("/Users/RemoveFriend", "POST", payload, authToken = authToken)
}

async function getAllUsers(){
    
}