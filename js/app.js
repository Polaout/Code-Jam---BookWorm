var page = "Home";
let option = "Inscreva-se";

async function loadHtml(html, elementID) {

  const response = await fetch(html)
  const text = await response.text()
  document.getElementById(elementID).innerHTML = text;

}

async function appRefresh(typePage) {

  switch(typePage) {

    case "Home": {

      homeRefresh();
      break;

    }

    case "Login": {
      
      await loadHtml("/html/login.html", "app");
      loginRefresh();
      break;

    }

  }

}



appRefresh("Home");