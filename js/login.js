if (document.getElementById("login") === null) return;

function inputCheck(target) {

    const signupError = document.getElementById("signupError");
    const signupUsernameBorder = document.getElementById("signupUsernameBorder");


    switch(target) {

        case "Signup": {

            var signupUsernameInput = document.getElementById("signupUsernameInput");

            if (signupUsernameInput.value) {


            }else {

                signupError.style.top = "54%";
                signupError.innerHTML = "Insira um nome de usuário";
                signupError.style.display = "block";

                signupUsernameBorder.style.borderColor = "red";

            }
            break;

        }

    }

}

function loginRefresh() {

    alert("refresh");
    switch(page) {

        case "Login - Initial": {

            alert("initial"); 
            const loginPage = document.getElementById("login");

            let touchstartX = 0;
            let touchendX = 0;

            const signinButton = document.getElementById("signinButton");
            const signupButton = document.getElementById("signupButton");
            const signinButtonTitle = document.getElementById("signinButtonTitle");
            const signupButtonTitle = document.getElementById("signupButtonTitle");

            const initial = document.getElementById("initial");
            const loginIllustrate = document.getElementById("loginIllustrate");
            const loginModal = document.getElementById("loginModal");

            function optionRefresh() {
            
            switch(option) {

                case "Inscreva-se": {

                signupButton.style.backgroundColor = "#222831"
                signupButtonTitle.style.color = "#EEEEEE";
                signinButtonTitle.style.color = "#222831";
                signinButton.style.backgroundColor = "";
                break;

                }

                case "Entrar": {

                signinButton.style.backgroundColor = "#222831"
                signupButtonTitle.style.color = "#222831";
                signinButtonTitle.style.color = "#EEEEEE";
                signupButton.style.backgroundColor = "";
                break;

                }

            }
            
            }

            document.addEventListener('touchstart', e => {
            touchstartY = e.changedTouches[0].screenX
            })
            
            document.addEventListener('touchend', e => {
            touchendY = e.changedTouches[0].screenX
            checkDirection()
            }, false)

            alert("teste");
            loginPage.style.display = "block";
            
            signinButton.addEventListener("click", (event) => {

            option = "Entrar";
            optionRefresh();

            }, false)

            signupButton.addEventListener("click", (event) => {

            option = "Inscreva-se"
            optionRefresh();

            });

            function checkDirection() {

            if (touchstartY < touchendY) {

                initial.style.display = "none";
                loginIllustrate.style.display = "none";

                loginModal.style.top = "0%";
                loginModal.style.height = "100%";
                loginModal.style.width = "100%";
                loginModal.style.animation = "up-bottom 0.4s"

                loginModal.style.borderRadius = "0px";

                if (option === "Inscreva-se") {

                page = "Login - Signup";
                appRefresh();

                }else if (option === "Entrar") {

                page = "Login - Signin";
                appRefresh();
                
                }

            }else if (touchendY < touchstartY) return;
            
            }

            optionRefresh();
            break;

        }

        case "Login - Signup": {

            const signup = document.getElementById("signup");

            const signupButton = document.getElementById("signupButtonInput");
            const signupUsernameInput = document.getElementById("signupUsernameInput");

            signup.style.display = "block";

            signupButton.addEventListener("click", (event) => {

            inputCheck("Signup");

            });

            signupUsernameInput.addEventListener("click", (event) => {

            var border = document.getElementById("signup")

            });
            break;

        }

        case "Login - Signin": {

        const signin = document.getElementById("signin");

        signin.style.display = "block";
        break;
        
    }
    }

}