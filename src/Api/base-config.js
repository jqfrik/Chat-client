export const BASE_URL = "http://localhost:5000/api"

export async function fetchWrapper(
    url,
    method,
    payload,
    contentType = "application/json",
    authToken = ""
  ) {
    let bodyWrapper = {
      method: method,
      headers: {
        "Content-Type": contentType,
        Authorization: "Bearer " + authToken,
      },
    };
    debugger
    if (payload && method?.toLowerCase() != "get") {
      bodyWrapper.body = JSON.stringify(payload);
    }
  
    let response = await fetch(BASE_URL + url, bodyWrapper);
    let json = await response.json();
    return json;
  }