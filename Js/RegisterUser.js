//validate UserName
function validateUserName(){
    var UserName = document.querySelector("#UserName");
    if(UserName.value == ""){
        document.getElementById("errorName").innerHTML = "Please Fill the Field";
        UserName.style.border = "3px solid red";
        return false;
    }
    else if(!isNaN(UserName.value))
    {
        document.getElementById("errorName").innerHTML = "Allow Character Only";
        UserName.style.border = "3px solid red";
        return false;
    }
    else{
        document.getElementById("errorName").innerHTML = "";
        UserName.style.border = "none";
        return true;
    }
}
//Validate Email
function validateEmali(){
    var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var Email = document.querySelector("#Email");
    if(Email.value.match(emailPattern))
    {
        document.getElementById("errorEmail").innerHTML = "";
        Email.style.border = "none";
        return true;
    }
    else
    {
        document.getElementById("errorEmail").innerHTML = "Email Id is not valid";
        Email.style.border = "3px solid red";
        return false;
    }
}

//Validate Password
function ValidatePW(){
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
//verify Confirm password
function VerifyPw(){
    var Password = document.querySelector("#Password");
    var ConPW = document.querySelector("#ConPW");
    if(ConPW.value ==""){
        document.getElementById("errorPw").innerHTML = "Please Fill the Field";
        ConPW.style.border = "3px solid red";
        return false;
    }
    else if(Password.value != ConPW.value)
    {
        document.getElementById("errorConPw").innerHTML = "Password does not match";
        ConPW.style.border = "3px solid red";
        return false;   
    }
    else{
        document.getElementById("errorConPw").innerHTML = "";
        ConPW.style.border = "none";
        return true;
    }
}
//Check all validations
 function allFunChecks(){
    var ValidatUserNameobj =validateUserName();
    var ValidateEmailObj = validateEmali();
    var ValidatePwObj =ValidatePW();
    var VerifyPwObj =VerifyPw();

    if(ValidatUserNameobj == true && ValidateEmailObj == true && ValidatePwObj == true && VerifyPwObj == true){
        return true;
    }
    else{
        return false;
    }
}
//Store data
function Save(){
    var UserName = document.querySelector("#UserName");
    var Email = document.querySelector("#Email");
    var Password = document.querySelector("#Password");
    var ConPW = document.querySelector("#ConPW");
    if(UserName.value == "")
    {
        document.getElementById("errorName").innerHTML = "Please Fill the Field";
        return false;
    }
    else if(Email.value == "")
    {
        document.getElementById("errorEmail").innerHTML = "Please Fill the Field";
        return false;
    }
    else if(Password.value == "")
    {
        document.getElementById("errorPw").innerHTML = "Please Fill the Field";
        return false;
    }
    else if(ConPW.value == "")
    {
        document.getElementById("errorConPw").innerHTML = "Please Fill the Field";
        return false;
    }
    else
    {
        var allFunChecksobj = allFunChecks();
        if(allFunChecksobj == true)
        {
             let User = {
                Name : UserName.value,
                Email : Email.value,
                Password : Password.value,
                ConPw : ConPW.value,
            };
            //localStorage.clear();
            UserRecord = JSON.stringify(User);
            window.localStorage.setItem(UserName.value,UserRecord);

            window.location ="Login.html";
        }
      
    }

}

