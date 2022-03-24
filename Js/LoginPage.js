//Validation
// function CheckPW(){
//     var lowerCaseLetters = /[a-z]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var numbers = /[0-9]/g;
//     var myInput = document.getElementById("Password");
//     if(myInput.value.match(lowerCaseLetters) && myInput.value.match(upperCaseLetters) && myInput.value.match(numbers) && myInput.value.length >= 8)
//     {
//         //const errorElement = document.getElementById("errorPw");
//        // errorElement.style.visibility = "hidden";
//       // errorElement.textContent="";
//         //const btn =document.getElementById("SubmitBtn");
//         //btn.disabled = false;
//         myInput.style.border = "none";
//     }
//     else{
//         //const errorElement = document.getElementById("errorPw");
//         //errorElement.style.visibility = "visible";
//         //errorElement.textContent = "Enter a strong Password";
//         //const btn =document.getElementById("SubmitBtn");
//         //btn.disabled = true;
//         myInput.style.border = "3px solid red";
//     }
// }
//Login Functionality
function Logins()
{
    location.replace("Home.html");
}
function Login(){
    var UserName = document.getElementById("UserName").value;
    var Password = document.getElementById("Password").value;
    var myInput = document.getElementById("Password");
    if(UserName == "" || Password == "")
    {
        // if(UserName == ""){
        //     //document.getElementById("UserName").style.border = "3px solid red";
        //     myInput.style.border = "3px solid red";
        // }
        // else{
        //    // document.getElementById("UserName").style.border = "none";
        //    myInput.style.border = "3px solid red";
        // }
        // if(Password == "")
        // {
        //     //document.getElementById("errorPw").textContent = "Please fill out this field";
        //     //document.getElementById("Password").style.border = "3px solid red";
        //     myInput.style.border = "3px solid red";
        // }
        // else{
        //    // document.getElementById("Password").style.border = "none";
        //    myInput.style.border = "3px solid red";
        // }
    }
    else
    {
        if(localStorage.getItem(UserName) != null)
        {
            var Users =JSON.parse(localStorage.getItem(UserName)) 
            if(UserName == Users.UserName && Password == Users.Password)
            {
                 
                //alert("success");
                location.replace("Home.html");
            }
            else
            {
                alert("Login Failed");
            }
        }
        else
        {
            alert("User not found");
        }
    }   
}

// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

//when user clicks on Password field,show msg box
// myInput.onfocus = function(){
//     document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//     document.getElementById("message").style.display = "none";
//   }

//   myInput.onkeyup = function() {
//     // Validate lowercase letters
//     var lowerCaseLetters = /[a-z]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var numbers = /[0-9]/g;
//     if(myInput.value.match(lowerCaseLetters) && myInput.value.match(upperCaseLetters) && myInput.value.match(numbers) && myInput.value.length >= 8)
//     {
//         document.getElementById("message").style.display = "none";
//     }
//     else{
//         document.getElementById("message").style.display = "block";
//     }
// //     if(myInput.value.match(lowerCaseLetters)) {  
// //     //   letter.classList.remove("invalid");
// //     //   letter.classList.add("valid");
// //     } else {
// //     //   letter.classList.remove("valid");
// //     //   letter.classList.add("invalid");
// //     }

// //     // Validate capital letters
// //   var upperCaseLetters = /[A-Z]/g;
// //   if(myInput.value.match(upperCaseLetters)) {  
// //     // capital.classList.remove("invalid");
// //     // capital.classList.add("valid");
// //   } else {
// //     // capital.classList.remove("valid");
// //     // capital.classList.add("invalid");
// //   }

// //   // Validate numbers
// //   var numbers = /[0-9]/g;
// //   if(myInput.value.match(numbers)) {  
// //     // number.classList.remove("invalid");
// //     // number.classList.add("valid");
// //   } else {
// //     // number.classList.remove("valid");
// //     // number.classList.add("invalid");
// //   }
  
// //   // Validate length
// //   if(myInput.value.length >= 8) {
// //     // length.classList.remove("invalid");
// //     // length.classList.add("valid");
// //   } else {
// //     // length.classList.remove("valid");
// //     // length.classList.add("invalid");
// //   }
//   }
//Login Function
