
export const checkResponseStatus = () => {
    fetch(userUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
};

export const getUsers = () => {
};

export const getUserPosts = () => {
};

export const createNewUser = () => {
}
