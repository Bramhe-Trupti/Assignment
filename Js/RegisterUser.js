//Validation Function
function validateEmali(){
    var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var Email = document.getElementById("Email").value;
    if(Email.match(emailPattern))
    {
        const errorElement = document.getElementById("errorEmail");
        errorElement.textContent = "";
        const btn =document.getElementById("SubmitBtn");
        btn.disabled = false;
        document.getElementById("Email").style.border = "none";
        return true;
    }
    else
    {
        const errorElement = document.getElementById("errorEmail");
        errorElement.textContent = "Email Id is not valid";
       // const btn =document.getElementById("SubmitBtn");
       // btn.disabled = true;
        document.getElementById("Email").style.border = "3px solid red";
        return false;
    }
}
function CheckPW(){
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var myInput = document.getElementById("Password");
    if(myInput.value.match(lowerCaseLetters) && myInput.value.match(upperCaseLetters) && myInput.value.match(numbers) && myInput.value.length >= 8)
    {
        const errorElement = document.getElementById("errorPw");
       // errorElement.style.visibility = "hidden";
        errorElement.textContent = "";
        const btn =document.getElementById("SubmitBtn");
        btn.disabled = false;
        myInput.style.border = "none";
        return true;
    }
    else{
        const errorElement = document.getElementById("errorPw");
        errorElement.style.visibility = "visible";
        errorElement.textContent = "Create strong Password";
        //const btn =document.getElementById("SubmitBtn");
       // btn.disabled = true;
        myInput.style.border = "3px solid red";
        return false;
    }
}     

function VerifyPw(){
    var Password = document.getElementById("Password").value;
    var ConPW = document.getElementById("ConPW").value;
    //console.log(Password +" == " +ConPW);
    if(Password != ConPW)
    {
        document.getElementById("ConPW").style.border = "3px solid red";
        const errorElement = document.getElementById("errorConPw");
        errorElement.textContent = "Password does not match";
        //const btn =document.getElementById("SubmitBtn");
        //btn.disabled = true;
       return false;   
    }
    else{
        document.getElementById("ConPW").style.border = "none" ;
        const errorElement = document.getElementById("errorConPw");
        //errorElement.style.visibility = "hidden";
        errorElement.textContent = "";
        const btn =document.getElementById("SubmitBtn");
        btn.disabled = false;
       return true;
    }
}
//Save User Data in local storage
function Save(){
    var UserNamee = document.getElementById("Name").value;
    var Email =  document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;
    var ConPw = document.getElementById("ConPW").value;
    if(UserNamee != "" && Email != "" && Password != "" && ConPw != "")
    {
        var ValidatEmailobj =validateEmali();
        var CheckPWobj = CheckPW();
        var VerifyPwobj =VerifyPw();
        if(ValidatEmailobj && CheckPWobj  && VerifyPwobj)
        {
            //console.log("True");
            let User = {
                UserName : UserNamee,
                Email : Email,
                Password : Password,
                ConPw : ConPw,
            };
            //localStorage.clear();
            UserRecord = JSON.stringify(User);
            window.localStorage.setItem(UserNamee,UserRecord);
            window.location.replace("index.html");
        
        }
        else{
            const btn =document.getElementById("SubmitBtn");
            btn.disabled = true;
        }


        /*if(UserNamee == "")
        {
            const errorElement = document.getElementById("errorName");
            errorElement.style.visibility = "visible";
            errorElement.textContent = "UserName is Required"; 
            document.getElementById("Name").style.border = "3px solid red";
        } 
        if(Email == "")
        {
            const errorElement = document.getElementById("errorEmail");
            errorElement.style.visibility = "visible";
            errorElement.textContent = "Email Id is Required";
            document.getElementById("Email").style.border = "3px solid red";
        }
        else{
            validateEmali();
        }
        if(Password == "")
        {
            const errorElement = document.getElementById("errorPw");
            errorElement.style.visibility = "visible";
            errorElement.textContent = "Password is Required";
            document.getElementById("Password").style.border = "3px solid red";
        }
        else
        {
            CheckPW();
        }
        if(ConPw == "")
        {
            const errorElement = document.getElementById("errorConPw");
            errorElement.style.visibility = "visible";
            errorElement.textContent = "Confirm Password id Required";
            document.getElementById("ConPw").style.border = "3px solid red";
        }
        else{
            VerifyPw();
        }*/
    }
    else
    {
        //document.getElementById("Name").style.border = UserNamee == ""? "3px solid red" : "none";
        document.getElementById("Email").style.border = Email == ""? "3px solid red" : "none";
        document.getElementById("Password").style.border = Password == ""? "3px solid red" : "none";
        document.getElementById("ConPW").style.border = ConPw == ""? "3px solid red" : "none";
    }
}


//Validate Form
/*function validateForm(){
    var UserNamee = document.getElementById("Name").value;
    var Email =  document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;
    var ConPw = document.getElementById("ConPW").value;
    if(UserNamee == "" || Email == "" || Password == "" || ConPw == "")
    {
        if(UserNamee == "")
        {
            // const errorElement = document.getElementById("errorName");
            // errorElement.style.visibility = "visible";
            // errorElement.textContent = "UserName is Required"; 
             document.getElementById("Name").style.border = "3px solid red";
        } 
        if(Email == "")
        {
            // const errorElement = document.getElementById("errorEmail");
            // errorElement.style.visibility = "visible";
            // errorElement.textContent = "Email Id is Required";
            document.getElementById("Email").style.border = "3px solid red";
        }
        else{
            validateEmali();
        }
        if(Password == "")
        {
            // const errorElement = document.getElementById("errorPw");
            // errorElement.style.visibility = "visible";
            // errorElement.textContent = "Password is Required";
            document.getElementById("Password").style.border = "3px solid red";
        }
        else
        {
            CheckPW();
        }
        if(ConPw == "")
        {
            // const errorElement = document.getElementById("errorConPw");
            // errorElement.style.visibility = "visible";
            // errorElement.textContent = "Confirm Password id Required";
            document.getElementById("ConPw").style.border = "3px solid red";
        }
        else{
            VerifyPw();
        }
    }
    else{
        console.log("Working good");
    }
        
}
*/