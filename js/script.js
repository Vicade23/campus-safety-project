const getData = JSON.parse(localStorage.getItem('yData'));
// export {const getD = JSON.parse(localStorage.getItem('yData'))};
console.log(getData);
document.getElementById('form1').addEventListener('submit', (eventValue) => {
    // eventValue.preventDefault();


const text = document.getElementById('text').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const utext = document.getElementById('utext');
const uemail = document.getElementById('uemail');
const upassword = document.getElementById('upassword');


const yData = [
    text,
    email,
    password
]
for (i = 0; i < 3; i++) {
    const yourData = yData[i];
    console.log(yourData);
}
const ytext = yData[0];
const yemail = yData[1];
const ypassword = yData[2];
localStorage.setItem('yData', JSON.stringify(yData));


if (text === "") {
    utext.innerHTML = 'Input your name';
}
else {
    utext.innerHTML = '';
}

if (email === "") {
    uemail.innerHTML = 'Input your email';
}
else {
    uemail.innerHTML = '';
}

if (password === "") {
    upassword.innerHTML = 'Input your password';
}
else {
    upassword.innerHTML = '';
}
})
