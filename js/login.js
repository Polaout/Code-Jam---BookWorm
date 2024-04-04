// Get login in localStorage to acess account
const codeLogin = localStorage.getItem("loginCode");

//Get element of login button
const buttonLogin = document.getElementById("buttonLogin");

//Checking if exist a code in localStorage
if (codeLogin) {

    //Redirect to home page
    window.location.replace("./home.html");

}

//Click event in buttonLogin element
buttonLogin.addEventListener("click", (event) => {

    //Initial inputs variables
    var usernameInput = document.getElementById("loginUsername");
    var passwordInput = document.getElementById("loginPassword");

    //Checking if exits any value in inputs
    if (usernameInput.value && passwordInput.value) {

        alert(usernameInput.value);
        alert(passwordInput.value);

    }else {

        alert("Nothing!");

    }

})

