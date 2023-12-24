const contactDiv = document.getElementById('contact-sec');
const registerDiv = document.getElementById('register-sec');
const loginDiv = document.getElementById('login-sec');
const container = document.getElementById('container')
contactDiv.style.display = "none"
loginDiv.style.display = "none"

function goToRegister() {
    registerDiv.style.display = "block"
    loginDiv.style.display = "none"
    contactDiv.style.display = "none"
}

function goToLogin() {
    loginDiv.style.display = "block"
    registerDiv.style.display = "none"
    contactDiv.style.display = "none"
}

function goToContact() {
    loginDiv.style.display = "none"
    registerDiv.style.display = "none"
    contactDiv.style.display = "block"
}

function goToDisplay() {
    alert("Your Contact added Successfully.")
}
