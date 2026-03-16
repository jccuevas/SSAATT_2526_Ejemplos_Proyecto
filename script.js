

function showError(event, error){
    let div = document.getElementById("errorBanner");
    if(div!=null){
        div.classList.remove("oculto");
        div.classList.add("visible");
    }

}

function showSection(sectionId){

    console.log("Mostrar sección "+sectionId);
    //let sections = document.querySelectorAll("[id|=sec-]");
    let sections = document.getElementsByTagName("section");
    if(sections!=null){
        for(let s of sections){
            s.classList.add("oculta");
        }

        let section = document.getElementById("sec-"+sectionId);
        section.classList.remove("oculta");

        let links = document.querySelectorAll("[id|=nav]");
        console.dir(links);
        if(links!=null){
            for(let link of links){
                link.classList.remove("active");
            }

            let link = document.getElementById("nav-"+sectionId);
            link.classList.add("active");
        }
    }
}