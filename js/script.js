const alunos = document.querySelectorAll(".aluno");
for(let i=0; i < alunos.length; i++) {
    let aluno = alunos[i];
    const notaUm = aluno.querySelector(".info-notaum").textContent;
    const notaDois = aluno.querySelector(".info-notadois").textContent;
    media = aluno.querySelector(".info-media");
    media.innerHTML = calculaMedia(notaUm, notaDois);
    let mediaFinal = media.innerHTML
    approved(mediaFinal,media);
};

function calculaMedia(notaum, notadois) {
    return ((parseFloat(notaum)+parseFloat(notadois))/2).toFixed(1);
};

function approved (valor1, valor2) {
    if(valor1 < 5) {
        valor2.style.backgroundColor = "pink";
    } else {
        valor2.style.backgroundColor = "lightgreen";
    }
};

