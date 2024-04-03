const codeLogin = localStorage.getItem("loginCode");

if (!codeLogin) {

    window.location.replace("./login.html");
    alert("teste")

}