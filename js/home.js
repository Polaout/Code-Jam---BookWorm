const codeLogin = localStorage.getItem("loginCode");

if (!codeLogin) {

    window.location.replace("./login");
    alert("teste")

}