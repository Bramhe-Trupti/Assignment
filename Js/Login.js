//validate UserName
function UsernameValidate(){
    var UserName = document.querySelector("#UserName");
    if(UserName.value == ""){
        document.getElementById("errorUserName").innerHTML = "Please Fill the Field";
        UserName.style.border = "3px solid red";
        return false;
    }
    else if(!isNaN(UserName.value)){
        document.getElementById("errorUserName").innerHTML = "Enter character only";
        UserName.style.border = "3px solid red";
        return false;
    }
    else{
        document.getElementById("errorUserName").innerHTML = "";
        UserName.style.border = "none";
        return true;
    }
}

//Validate Password
function PasswordValidate(){
    var Password = document.querySelector("#Password");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if(Password.value == ""){
        document.getElementById("errorPw").innerHTML = "Please Fill the Field";
        Password.style.border = "3px solid red";
        return false;
    }
    else if(Password.value.match(lowerCaseLetters) && Password.value.match(upperCaseLetters) && Password.value.match(numbers) && Password.value.length >= 8)
    {   
        document.getElementById("errorPw").innerHTML = "";
        Password.style.border = "none";
        return true;    
    }
    else{
        document.getElementById("errorPw").innerHTML = "Create strong Password";
        Password.style.border = "3px solid red";
        return false;
        
    }   
}

//Cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' +expires+';'+ 'path=/';
}

//Login Functionality
function Login(){
    var UserName = document.getElementById("UserName").value;
    var Password = document.getElementById("Password").value;
    if(UserName == ""){
        document.getElementById("errorUserName").innerHTML = "Please Fill the Field";
        return false;
    }
    else if(Password == ""){
        document.getElementById("errorPw").innerHTML = "Please Fill the Field";
        return false;
    }
    else
    {
        var validateUserNameObj = UsernameValidate();
        var validatePWObj = PasswordValidate();
        if(validateUserNameObj ==true && validatePWObj == true)
        {
            if(localStorage.getItem(UserName) != null)
            {
                var Users =JSON.parse(localStorage.getItem(UserName)) 
                if(UserName == Users.Name && Password == Users.Password)
                {
                    setCookie("Name",UserName,2);
                    window.location = "Home.html";
                    return true;
                }
                else
                {
                    alert("Login Failed");
                    return false;
                }
            }
                else
            {
                alert("User not found");
                return true;
            }
        }
        
    }
}

