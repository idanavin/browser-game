window.onload = function () {
    setDisplay(document.getElementById('registration'), 'none');
    var logo = document.getElementById('logo');
    logo.src = '../assets/not-gay-logo.jpg';
    var bodyFrontPage = document.getElementById('main-text');
    bodyFrontPage.innerHTML = "Best coffe mugs in the world. plus elad isnt gay";
    bodyFrontPage.style.fontSize = '32px';
    var coffeeMugImg = document.createElement('img');
    coffeeMugImg.src = '../assets/mug.jpg';
    coffeeMugImg.setAttribute('class', 'coffee-img');
    bodyFrontPage.appendChild(coffeeMugImg);
    var registerButton = document.getElementById('register');
    registerButton.addEventListener('click', activateRegister);
}

function setDisplay(elem, state) {  
    elem.style.display = state;
}

function activateRegister() {  
    setDisplay(document.getElementById('main-text'), 'none');
    setDisplay(document.getElementById('registration'), 'inline-grid');
}