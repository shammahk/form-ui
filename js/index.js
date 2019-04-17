// jquery process

let tab = $('nav>li');
tab.click(changeTab);


// vanilla js process

let signUp = document.getElementById('signup');
signUp.addEventListener('click', changeTab);
let signForm = document.getElementById('signupForm');

let login = document.getElementById('login');
login.addEventListener('click', logInTab);
let loginForm = document.getElementById('loginForm');

function changeTab() {
    if (signUp.className != 'selected') {
        signUp.className = 'selected';
        signForm.style.display = 'flex';
        login.className = '';
        loginForm.style.display = 'none';
    }
}

function logInTab() {
    if (login.className != 'selected') {
        login.className = 'selected';
        loginForm.style.display='flex';
        signUp.className = '';
        signForm.style.display = 'none';
    }
}

console.log(signUp.className);