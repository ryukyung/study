const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username";
// const loginButton = document.querySelector("#login-form button");
// function onLoginBtnClick() {
//   const username = loginInput.value;
//   console.log(username);
//     if (username === "") { // <input required>
//       alert("Please write your name");
//     } else if (username.length > 15) { //<input maxlength="15">
//       alert("Your name is too long.");
//     }
// }
// loginButton.addEventListener("click", onLoginBtnClick);

function onLoginSubmit(event) {
  //event를 쓰는게 관행이다?
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}
function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  //   alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);
/* 
localStorage.setItem(USERNAME_KEY, "gaori");
localStorage.getItem(USERNAME_KEY);
localStorage.removeItem(USERNAME_KEY);
 */

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreeting(savedUsername);
}
