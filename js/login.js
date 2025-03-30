// import {getD}from './script';
// console.log(getD);


document.getElementById("form2").addEventListener("submit", (eventValue) => {
    eventValue.preventDefault();
})
////////////// lets assume that [
const texts = 'Emmanuel Victor';
const emails = 'emavec2002@gmail.com';
const passwords = '12345';
const getData = [
texts,
emails,
passwords
]
/////////////////// ]



// input varRep
const email2 = document.getElementById('email2');
const password2 = document.getElementById('password2');

let email2Error = document.getElementById('email2Error').innerHTML;
let password2Error = document.getElementById('password2Error').innerHTML;

function errors() {
if (email2.value === '') {
    document.getElementById('email2Error').innerHTML = 'Input your email';
}
else {
    document.getElementById('email2Error').innerHTML = '';
}

if (password2.value === '') {
    document.getElementById('password2Error').innerHTML = 'Input your passcode';
}
else {
    document.getElementById('password2Error').innerHTML = '';
}



if (getData[1] === email2.value) {
    document.getElementById('emaiError').innerHTML = 'Valid';
}
if (getData[2] === password2.value) {
    document.getElementById('passworError').innerHTML = 'Valid';
}
else {
    document.getElementById('password2Error').innerHTML = 'Incorrect password';
}

const passworError = document.getElementById('password2Error');
const emaiError = document.getElementById('passworError');

if (emaiError.innerHTML === 'Valid' && passworError.innerHTML === 'Valid') {
    
document.getElementById("form2").addEventListener("submit", (eventValue) => {
    eventValue.defaultPrevented();
})

}
}