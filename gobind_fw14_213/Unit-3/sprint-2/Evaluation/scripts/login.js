var userArr = JSON.parse(localStorage.getItem("userDB"))||[];
     function checkUser(event){
        event.preventDefault();
        
           var mail= document.getElementById("mail").value;
          var password= document.getElementById("password").value;
        
        for(var i =0;i<userArr.length;i++){
            var regEmail = userArr[i].email;
            var rePass = userArr[i][password];
            if (mail==regEmail && password==rePass){
                window.location.href = "index.html"
            }
        }
        return alert("Invalid credentials");
    }