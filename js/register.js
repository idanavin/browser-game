function registerPage() {
    var bodyFrontPage = document.getElementById('main-text');
    bodyFrontPage.innerHTML = '';
    var user = document.createElement('div');
    user.innerHTML = 'Username:';
    bodyFrontPage.appendChild(user);
    var userField = document.createElement('input');
    userField.setAttribute('id', 'username');
    userField.setAttribute('type', 'text');
    bodyFrontPage.appendChild(userField);

}