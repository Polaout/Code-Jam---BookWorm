function checkLogin() {
        
    const codeLogin = localStorage.getItem("loginCode");

    if (!codeLogin) {
        
        page = "Login - Initial";
        appRefresh("Login");
    
    }else {

    }
}

function homeRefresh() {

    switch(page) {

        case "Home": {
            
            checkLogin();
            break;

        }

    }

}