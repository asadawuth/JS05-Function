function login(username,password) {
    if (username === "admin" && password === "password") {
        alert("login")
    } else {
        alert("No login")
    }
}
login("admin","password")