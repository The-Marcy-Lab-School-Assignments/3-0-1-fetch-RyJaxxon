import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';
const userURL = `https://jsonplaceholder.typicode.com/users`

export default function app(appDiv) {
  const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } = setupPageBasics(appDiv);
  checkResponseStatus().then((statusInfoObj) => renderStatus(statusDiv, statusInfoObj));
  getUsers().then((users) => renderUsers(usersUl, users))
  usersUl.addEventListener("click", (e) => {
    e.preventDefault();
    const button = e.target
    console.log(button.dataset.userId)
    getUserPosts(button.dataset.userId).then((res) => {
      // console.log(res);
      renderPosts(postsUl, res);
      });
  });
  newUserForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formObject = Object.fromEntries(formData);
    renderNewUser(newUserDiv,formObject)
  })
}