var page = "Home";
let option = "Inscreva-se";

async function loadHtml(html, elementID) {

  const response = await fetch(html)
  const text = await response.text()
  document.getElementById(elementID).innerHTML = text;

}

alert("tafunfando?")

async function appRefresh(typePage) {

  alert("appRefresh");
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