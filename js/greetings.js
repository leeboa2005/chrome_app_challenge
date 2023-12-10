const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "username_key";

function paintGreetings(user) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `HELLO ${user}👋`;

}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        paintGreetings(username);
    })
} else {
    paintGreetings(saveUsername);
}
