var page = "Home";
let option = "Inscreva-se";

async function loadHtml(html, elementID) {

  const response = await fetch(html)
  const text = await response.text()
  document.getElementById(elementID).innerHTML = text;

}

function appRefresh(page) {

  switch(page) {

    case "Home": {

      homeRefresh();
      break;

    }

    case "Login": {

      loadHtml("/html/login.html", "app");
      alert("teste");
      loginRefresh();
      break;

    }

  }

}



appRefresh("Home");