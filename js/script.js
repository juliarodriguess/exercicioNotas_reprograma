window.addEventListener("load", function(){
    loadTabel();
})
function loadTabel () {
    const alunos = document.querySelectorAll(".aluno");
    for(aluno of alunos) {
        const notaUm = aluno.querySelector(".info-notaum").textContent;
        const notaDois = aluno.querySelector(".info-notadois").textContent;
        media = aluno.querySelector(".info-media");
        media.innerHTML = calculaMedia(notaUm, notaDois);
        let mediaFinal = media.innerHTML
        result(mediaFinal,media);
    };
};

function calculaMedia(notaum, notadois) {
    return ((parseFloat(notaum)+parseFloat(notadois))/2).toFixed(1);
};

function result (value, cellTable) {
    if(value < 5) {
        cellTable.style.backgroundColor = "pink";
    } else {
        cellTable.style.backgroundColor = "lightgreen";
    }
};

