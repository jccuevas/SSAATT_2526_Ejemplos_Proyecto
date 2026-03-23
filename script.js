function showError(event, error) {
  let div = document.getElementById("errorBanner");
  if (div != null) {
    div.classList.remove("oculto");
    div.classList.add("visible");
  }
}
//Global var for section control
var activeSection = "1";
// grupo C - sesión 2
function showSection(event, sectionId) {
  let activeSectionElement = document.getElementById("sec-" + activeSection);
  if (activeSection != sectionId) {
    let section = document.getElementById("sec-" + sectionId);
    let oldNav = document.getElementById("nav-" + activeSection);
    let newNav = document.getElementById("nav-" + sectionId);
    if (
      activeSectionElement != null &&
      section != null &&
      oldNav != null &&
      newNav != null
    ) {
      //Change current active section
      activeSectionElement.classList.add("oculta");
      section.classList.remove("oculta");
      //change active menu item
      oldNav.classList.remove("active");
      newNav.classList.add("active");
      //Update active section tracking
      activeSection = sectionId;
    }
  }
}

//Grupo A - Sesión 2
function showSectionA(sectionId) {
  console.log("Mostrar sección " + sectionId);
  //let sections = document.querySelectorAll("[id|=sec]");
  let sections = document.getElementsByTagName("section");
  if (sections != null) {
    for (let s of sections) {
      s.classList.add("oculta");
    }

    let section = document.getElementById("sec-" + sectionId);
    section.classList.remove("oculta");

    let links = document.querySelectorAll("[id|=nav]");
    console.dir(links);
    if (links != null) {
      for (let link of links) {
        link.classList.remove("active");
      }

      let link = document.getElementById("nav-" + sectionId);
      link.classList.add("active");
    }
  }
}

function doLogin(event) {
  event.preventDefault();
  console.log("Enviando formulario....");
  let user = document.forms.login.user.value;
  let password = document.forms.login.password.value;

  //JSON para enviar al API REST del servidor
  //Los nombres de las propiedades son arbitrarios, pero deben ser diseñados
  //para cada servicio por el equipo
  let auth = {
    "user": user,
    "password": password,
    "timestamp": Date.now()
  };

  if (
    user == "user" &&
    password == "1234" /* Esto se hará en el back-end en las siguientes fases */ 
  ) {
    //Login existoso
    alert("Login correcto");
    //Ocultar las opciones de menú de inicio y registro
    //Mostrar las otras opciones del servicio
    //Dejar el Acerca de
  } else {
    //error
    alert("Login incorrecto");
  }
}

function doRegister(event) {
  event.preventDefault();
/**
 * let o = { a:2,b:3}
 * let c = o['a'] + o.b;
 */
  let formData = new FormData(document.forms.register);
  formData.append("timestamp", Date.now());

  //Lectura de los campos del formulario a in JSON
  let jsonObject = {};
  //JSON desde FormData
  for (let key of formData.keys()) {
    //console.log(key + " " + formData.get(key));
    jsonObject[key] = formData.get(key);
  }

  console.dir(jsonObject);

  /* VALIDACIÓN PROPIA DEL SERVICIO */
  // comprobar que las claves son iguales

  //Si son iguales envío de la petición al servidor
}
