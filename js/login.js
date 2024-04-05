function checkLogin() {
    
    const codeLogin = localStorage.getItem("loginCode");

    alert("Function")

    if (!codeLogin) {
    
        page = "Login - Initial"
        alert("Change Page")
        appRefresh();
    }else {

        

    }
}