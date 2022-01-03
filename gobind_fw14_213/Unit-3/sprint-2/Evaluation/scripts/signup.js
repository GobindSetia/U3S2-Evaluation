var userArr = JSON.parse(localStorage.getItem("userDB")) ||[];
    function saveUser(event){
        event.preventDefault();
        var user = {
            name: document.getElementById("name").value,
            email: document.getElementById("mail").value,
            password: document.getElementById("password").value,
        }
        userArr.push(user);
        localStorage.setItem("userDB",JSON.stringify(userArr));
    }