// Name and Password from the register-form
var name = document.getElementById('username');
var pw = document.getElementById('password');

// storing input from register-form
function register() {
    localStorage.setItem('name', username.value);
    localStorage.setItem('pw', password.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function login() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('username');
    var userPw = document.getElementById('password');

    // check if stored data from register-form is equal to data from login form
    if(username.value == storedName || password.value == storedPw) {
        alert('Logged in successfully');
        location.href = 'main.html';
    }else {
        alert('Error');
    }
}