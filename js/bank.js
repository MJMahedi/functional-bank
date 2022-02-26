document.getElementById('login-submit').addEventListener('click', function () {
    // get email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get password 
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    // console.log(userPass);

    // check user & password
    if (userEmail == 'admin' && userPass == 'admin') {
        window.location.href = 'banking.html';
        console.log('login successful');
    }
    else {
        console.log('wrong usear or email');
    }
})


