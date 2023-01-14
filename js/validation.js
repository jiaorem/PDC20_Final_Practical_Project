function validate(){
    if(document.registerForm.firstname.value==""){
        document.getElementById("fnameErr").innerHTML="Please enter your first name";
        return false;
    }

    if(document.registerForm.lastname.value==""){
        document.getElementById("lnameErr").innerHTML="Please enter your last name";
        return false;
    }

    if(document.registerForm.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;   
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.registerForm.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }

    if(document.registerForm.username.value==""){
        document.getElementById("userErr").innerHTML="Please enter your username";
        return false;
    }

    if(document.registerForm.password.value==""){
        document.getElementById("userErr").innerHTML="Please enter your password";
        return false;
    }
}

function validateAccount(){
    if(document.loginForm.username.value==""){
        document.getElementById("userErr").innerHTML="Please enter your username";
        return false;
    }

    if(document.loginForm.password.value==""){
        document.getElementById("userErr").innerHTML="Please enter your password";
        return false;
    }

    let logusername = document.loginForm.username.value;
    let logpassword = document.loginForm.password.value;

    if(logusername!="" && logpassword!=""){
    document.getElementById("login").disabled = false;
    }else{
    document.getElementById("login").disabled = true;
    }
}

function validateRegister(){
    let firstname = document.registerForm.firstname.value;
    let lastname = document.registerForm.lastname.value;
    let email = document.registerForm.email.value;
    let username = document.registerForm.username.value;
    let password = document.registerForm.password.value;
    if(firstname!="" && lastname!="" && email!="" && username!="" && password!=""){
        document.getElementById("register").disabled = false;
    }
    else{
        document.getElementById("register").disabled = true;
    }
}

function validateLogin(){
    let username = document.registerForm.username.value;
    let password = document.registerForm.password.value;
    let logusername = document.loginForm.username.value;
    let logpassword = document.loginForm.password.value;
    let fullname = document.registerForm.firstname.value + " " + document.registerForm.lastname.value;
    if(username==logusername && password==logpassword){
        localStorage.setItem("fullname",fullname);
        window.location.href = "index.html";
    }
    else{
        alert("Invalid username or password!");
    }
}

function validateUsername(){
    if(document.registerForm.username.value==""){
        document.getElementById("usernameError").innerHTML = "Please enter a username";
    }

    if(document.registerForm.username.value!=""){
        document.getElementById("usernameError").innerHTML = "";
        if(document.registerForm.username.value.length < 8){
            document.getElementById("usernameError").innerHTML = "Please use atleast 8 characters";
        }
        else{
            document.getElementById("usernameError").innerHTML = "";
        }
    }
}

function validateFirstname(){
    if(document.registerForm.firstname.value==""){
        document.getElementById("fnameErr").innerHTML = "Please enter your first name";
    }

    if(document.registerForm.firstname.value!=""){
        document.getElementById("fnameErr").innerHTML = "";
    }
}

function validateLastname(){
    if(document.registerForm.lastname.value==""){
        document.getElementById("lnameErr").innerHTML = "Please enter your first name";
    }

    if(document.registerForm.lastname.value!=""){
        document.getElementById("lnameErr").innerHTML = "";
    }
}

function validateEmail(){
    if(document.registerForm.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please enter an email address";
    }

    if(document.registerForm.email.value!=""){
        document.getElementById("emailErr").innerHTML = "";
    }
}

function validateUsername(){
    if(document.registerForm.username.value==""){
        document.getElementById("userErr").innerHTML = "Please enter an username";
    }

    if(document.registerForm.username.value!=""){
        document.getElementById("userErr").innerHTML = "";
    }
}

function validatePassword(){
    if(document.registerForm.password.value==""){
        document.getElementById("passErr").innerHTML = "Please enter a password";
    }

    if(document.registerForm.password.value!=""){
        document.getElementById("passErr").innerHTML = "";
            if(document.registerForm.password.value.length < 8){
                document.getElementById("passErr").innerHTML = "Please use atleast 8 characters";
            }
            else{
                document.getElementById("passErr").innerHTML = "";
            }
        }
    
}

function logout(){
    localStorage.removeItem("fullname");
}


