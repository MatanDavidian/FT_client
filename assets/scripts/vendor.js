const usernameInput = document.getElementById('username_input');
const passwordInput = document.getElementById('password_input');

const loginBtn = document.getElementById('btn-login');
const singupBtn = document.getElementById('btn-singup');
const forgetBtn = document.getElementById('btn-forget');



function login() {
  alert('Login:'+ '\n' + usernameInput.value + '\n' + passwordInput.value);
}
loginBtn.addEventListener('click', login);

function singup() {
  alert('singup:'+ '\n' + usernameInput.value + '\n' + passwordInput.value);
}
singupBtn.addEventListener('click', singup);

function forget() {
  alert('forget:'+ '\n' + usernameInput.value + '\n' + passwordInput.value);
}
forgetBtn.addEventListener('click', forget);