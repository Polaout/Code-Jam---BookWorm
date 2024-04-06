var page = "Home";
let option = "Inscreva-se";

async function loadHtml(html, elementID) {

  const response = await fetch(html)
  const text = await response.text()
  document.getElementById(elementID).innerHTML = text;

}

alert("tafunfando?")

function appRefresh(typePage) {

  alert("appRefresh");
  switch(typePage) {

    case "Home": {

      alert("homeApp")
      homeRefresh();
      break;

    }

    case "Login": {

      alert("loginApp");
      loadHtml("/html/login.html", "app");
      alert("HTMLEOU")
      loginRefresh();
      alert("REFRESHOU")
      break;

    }

  }

}



appRefresh("Home");