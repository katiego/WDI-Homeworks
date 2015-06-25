var userLogin = {
    userName: "Katie",
    userPassword: "cool"
}

if ((userLogin.userName) && (!userLogin.userPassword)) {
    console.log("Enter password for user " + [userLogin.userName])
}

var userPasswordINPUT = prompt('what is your password?');
if (userLogin.userPassword === userPasswordINPUT) {
    console.log("Great!")
}
else {
    console.log("alert")
    alert("You entered the wrong password");
}
