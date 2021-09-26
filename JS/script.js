const btnTexto = document.querySelector("#btn-texto");
const titulo = document.querySelector("#titulo2");

btnTexto.addEventListener("click", function () { 
 
    if (titulo.innerText === "Feliz") {
        titulo.innerText = "Desconfiada";
        imagem1.src = './Media/imagem/desconfiada.jpg';
    }else if (titulo.innerText === "Desconfiada"){
        titulo.innerText = "Irritada";
        imagem1.src = './Media/imagem/irritada.jpg';
    }else {
        titulo.innerText = "Feliz";
        imagem1.src = './Media/imagem/feliz.jpg';    
    }

});
