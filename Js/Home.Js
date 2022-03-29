//delete cookie
function deleteCookie() {
    const expires = 'expires=' + "Thu, 01-Jan-70 00:00:01 GMT";
    document.cookie = "Name ="+";"+expires+";"+"path=/";
  }

//Logout functionality
function Logout(){
    deleteCookie();
    console.log("Cookie"+document.cookie);
    window.location = "Login.html"
}

function getCookie(cname) {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return '';
}

//Onload event
function CheckCookie(){
    var result=getCookie("Name");
    if(result == "")
    {
        window.location = "Login.html";
    }
}