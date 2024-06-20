const userURL = `https://jsonplaceholder.typicode.com/users`

export const checkResponseStatus = () => {
    return fetch(userURL)
        .then((response) => {
            console.log({ok : response.ok , status: response.status, url : response.url })
            return {ok : response.ok , status: response.status, url : response.url };
        })
};


export const getUsers = () => {
    return fetch(userURL)
        .then((response)=> response.json())
        .then((responseData) => responseData)
};



export const getUserPosts = (userID, maxNumPosts = 3) => {
    return fetch (`${userURL}/${userID}/posts`)
        .then((response) => response.json())
        .then((posts) => console.log(posts.slice(0,maxNumPosts)))
};


export const createNewUser = (newUserData) => {
    return fetch(userURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then((data) => {
        return data;
    })
}
createNewUser();
