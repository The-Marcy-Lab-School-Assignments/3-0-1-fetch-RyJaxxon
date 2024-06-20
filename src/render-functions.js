export const setupPageBasics = (parentEl) => {
    parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button id='submit'>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

    const statusDiv = parentEl.querySelector('#status');
    const usersUl = parentEl.querySelector('#users-list');
    const postsUl = parentEl.querySelector('#posts-list');
    const newUserForm = parentEl.querySelector('#new-user-form');
    const newUserDiv = parentEl.querySelector('#new-user');

    return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

export const renderStatus = (statusDiv, statusInfoObj) => {
  const htmlContent = `
  <h2 id='status-heading'>Info on - ${statusInfoObj.url}</h2>
  <p id='status-code'>Status code: ${statusInfoObj.status}, ${statusInfoObj.ok ? 'OK!' : 'FAIL!'}</p>
  `;
  statusDiv.innerHTML = htmlContent
};

export const renderUsers = (usersUl, users) => {
  let htmlContent = ''
  users.forEach((user) => {
    htmlContent += `
    <li class ="user-card">
      <button data-user-id=${user.id}>Load ${user.username}'s posts</button>
    </li>
    `;
  })
  usersUl.innerHTML = htmlContent;
}

export const renderPosts = (postsUl,posts) => {
  let htmlContent = ''
  posts.forEach((post) => {
    htmlContent += `
    <li>
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </li>
    `;
  })
  postsUl.innerHTML = htmlContent;
};

export const renderNewUser = (newUserDiv,newUserInfo) => {
  newUserDiv.innerHTML = ``;
  newUserDiv.innerHTML = `
  <h2>${newUserInfo.username}</h2>
  <p>${newUserInfo.email}</p>
  `;
};