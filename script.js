
let section = document.getElementById("acercade");
section.style.display="none";


function showError(event, error){
    let div = document.getElementById("errorBanner");
    if(div!=null){
        div.classList.remove("oculto");
        div.classList.add("visible");
    }

}