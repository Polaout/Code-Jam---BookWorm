function checkLogin() {
    
    const codeLogin = localStorage.getItem("loginCode");

    if (!codeLogin) {
    
        page = "Login - Initial"
        appRefresh();
    }else {

        

    }
}