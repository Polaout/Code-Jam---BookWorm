function inputCheck(target) {

    const signupError = document.getElementById("signupError");
    const signupUsernameBorder = document.getElementById("signupUsernameBorder");
    const signupPasswordBorder = document.getElementById("signupPasswordBorder");


    const signinError = document.getElementById("signinError");
    const signinUsernameBorder = document.getElementById("signinUsernameBorder");
    const signinPasswordBorder = document.getElementById("signinPasswordBorder");

    switch(target) {

        case "Signup": {

            var signupUsernameInput = document.getElementById("signupUsernameInput");
            var signupPasswordInput = document.getElementById("signupPasswordInput");

            if (signupUsernameInput.value) {

                if (signupPasswordInput.value) {



                }else {
    
                    signupError.style.top = "67%";
                    signupError.innerHTML = "Insira uma senha";
                    signupError.style.display = "block";

                    signupPasswordBorder.style.borderColor = "red";
                    break;

                }

            }else {

                signupError.style.top = "54%";
                signupError.innerHTML = "Insira um nome de usuário";
                signupError.style.display = "block";

                signupUsernameBorder.style.borderColor = "red";
                break;

            }
            break;

        }

        case "Signin": {

            var signinUsernameInput = document.getElementById("signinUsernameInput");
            var signinPasswordInput = document.getElementById("signinPasswordInput");

            if (signinUsernameInput.value) {

                if (signinPasswordInput.value) {



                }else {
    
                    signinError.style.top = "67%";
                    signinError.innerHTML = "Insira uma senha";
                    signinError.style.display = "block";

                    signinPasswordBorder.style.borderColor = "red";
                    break;

                }

            }else {

                signinError.style.top = "54%";
                signinError.innerHTML = "Insira um nome de usuário";
                signinError.style.display = "block";

                signinUsernameBorder.style.borderColor = "red";
                break;

            }
            break;

        }


    }

}

async function loginRefresh() {

    switch(page) {

        case "Login - Initial": {
 
            var loginPage = await document.getElementById("login");
    
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
                loginRefresh();

                }else if (option === "Entrar") {

                page = "Login - Signin";
                loginRefresh();
                
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

                var border = document.getElementById("signupUsernameBorder");
                var signupError = document.getElementById("signupError");

                border.style.borderColor = "#222831";
                signupError.style.display = "none";

            });

            signupPasswordInput.addEventListener("click", (event) => {

                var border = document.getElementById("signupPasswordBorder");
                var signupError = document.getElementById("signupError");

                border.style.borderColor = "#222831";
                signupError.style.display = "none";

            });
            break;

        }

        case "Login - Signin": {

        const signin = document.getElementById("signin");

        const signinButton = document.getElementById("signinButtonInput");
        const signinUsernameInput = document.getElementById("signinUsernameInput");

        signin.style.display = "block";

        signinButton.addEventListener("click", (event) => {

            inputCheck("Signin");

        });

        signinUsernameInput.addEventListener("click", (event) => {

            var border = document.getElementById("signinUsernameBorder");
            var signinError = document.getElementById("signinError");

            border.style.borderColor = "#222831";
            signinError.style.display = "none";

        });

        signinPasswordInput.addEventListener("click", (event) => {

            var border = document.getElementById("signinPasswordBorder");
            var signinError = document.getElementById("signinError");

            border.style.borderColor = "#222831";
            signinError.style.display = "none";

        });
        break;
        
    }
    }

}