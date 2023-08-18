const openClose = document.getElementById("h-open-close")
let aside = document.getElementById("aside")

openClose.addEventListener("click", ()=>{
    aside.classList.toggle("desplegar")
})