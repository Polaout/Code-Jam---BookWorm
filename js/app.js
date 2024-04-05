var page = "Home";

function appRefresh() {

    switch(page) {

    case "Home": {

        alert("Home");
        checkLogin();
        break;

    }

    case "Login": {

        const loginPage = document.getElementById("login");

        loginPage.style.display = "block";
        break;

    }
}

}

appRefresh();