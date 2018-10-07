const alunos = document.querySelectorAll(".aluno");
for(let i=0; i < alunos.length; i++) {
    let aluno = alunos[i];
    const notaUm = aluno.querySelector(".info-notaum").textContent;
    const notaDois = aluno.querySelector(".info-notadois").textContent;
    let calculaMedia = (parseFloat(notaUm) + parseFloat(notaDois))/2;
    media = aluno.querySelector(".info-media");
    media.innerHTML = calculaMedia.toFixed(1);
    if(media.innerHTML < 5) {
        aluno.style.backgroundColor = "pink";
    } else {
        aluno.style.backgroundColor = "lightgreen";
    }
}

