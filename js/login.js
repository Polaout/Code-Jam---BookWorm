function checkLogin() {
    
    const codeLogin = localStorage.getItem("loginCode");

    alert("Function")

    if (!codeLogin) {
    
        page = "Login"
        alert("Change Page")
        appRefresh();
    }else {

        

    }
}