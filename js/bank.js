document.getElementById('submit-login').addEventListener('click', function(){
    //user email
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    //user password
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if(email == 'sontan@baap.com' && password == 'secret'){
       window.location.href = 'banking.html';
    }
});