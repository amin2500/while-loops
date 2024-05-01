let loggedin = false;
let username;
let password;

while (!loggedin) {
    username = window.prompt(`enter your username`)
    password = window.prompt(`enter your password`)

    if (username === "Amin"  && password === "Amin123") {
        loggedin = true
        console.log("you are logged in")
    }

    else{
        console.log("your are not logged in")
    }
}


