var page = "Home";

function appRefresh() {

    switch(page) {

    case "Home": {

        alert("Home");
        checkLogin();
        break;

    }

    case "Login - Initial": {

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

        var option = "Inscreva-se"

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
        })

        loginPage.style.display = "block";
        
        signinButton.addEventListener("click", (event) => {

          option = "Entrar";
          optionRefresh();

        })

        signupButton.addEventListener("click", (event) => {

          option = "Inscreva-se"
          optionRefresh();

        });

        function checkDirection() {

          if (touchendY > touchstartY) {

            initial.style.display = "none";
            loginIllustrate.style.display = "none";

            loginModal.style.top = "0%";
            loginModal.style.height = "100%";
            loginModal.style.animation = "up-bottom 0.5s"

            loginModal.style.borderRadius = "0px";
            page = "Login - Signup";
            appRefresh();

          }
        
        }

        optionRefresh();
        break;

    }

    case "Login - Signup": {

        const signup = document.getElementById("signup");

        signup.style.display = "block";

    }
}

}



appRefresh();