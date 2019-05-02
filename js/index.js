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

let country = document.querySelector('select');
country.addEventListener('change', prefix);

let zipCode = document.getElementById('zipcode');
zipCode.textContent= "";

function prefix() {
    zipCode.textContent = getTeleCode(country.value);
}

let phone = document.getElementById('phone');
phone.addEventListener('keyup', addHyphen);
phone.addEventListener('keydown', function(event) {
    if (phone.value.length > 4) {
        if (event.code !== 'Backspace') {
            event.preventDefault()
        }
    }
});

let plainInput = '';

function addHyphen(event) {
    if (phone.value.length > 4) {
        return 
    }
    //destructing 
    // const eng = countriesCode.eng;
    // const gha = countriesCode.gha;

    // const elms = [0.8, 78, 'Hello'];

    // const { eng, gha } = countriesCode;
    // const [ab, ef, goat] = elems
    // readonly
    let { value } = phone;
    plainInput = value.split('-').join('');
    if (plainInput.length >= 11) {
        console.log('am enough')
    }

    // debugger
    if (value.length > 1 && event.code !== 'Backspace') {
        if (plainInput.length % 4 == 0) {
            phone.value += "-";
        }

        console.log(value, plainInput, value.length);
    }
}


let countriesCode = {
    nig: '+234',
    eng: '+44',
    gha: '+233',
    ame: '+1',
}

function getTeleCode(country) {
    if (!country || typeof country !== 'string') {
        throw Error('getTeleCode requires at least one argument. Where argument is the country code name')
    }
    return countriesCode[country]
}


// function getTeleCode(country) {
    
//     let code =  countriesCode[country]
//     if (code) {
//         return code
//     } else {
//         return ''
//     }
// }