const button = document.querySelector("#adicionar-aluno");
button.addEventListener("click", function(event) {
    event.preventDefault();
    let form = document.querySelector("#form-adiciona")
    let tabela = document.querySelector("#tabela-alunos");
    let alunoTr = document.createElement("tr");
    let nomeTd = document.createElement("td");
    let notaumTd = document.createElement("td");
    let notadoisTd = document.createElement("td");
    let mediaTd = document.createElement("td");
    let nomeValue = form.nome.value;
    let notaumValue = form.notaum.value;
    let notadoisValue = form.notadois.value;
    let media = calculaMedia(notaumValue, notadoisValue);
    nomeTd.textContent = nomeValue;
    notaumTd.textContent = notaumValue;
    notadoisTd.textContent = notadoisValue;
    mediaTd.textContent = media;
    if (notaumValue > 10 || notadoisValue > 10) {
        alert ("Nota inválida. Insira uma nota menor que 10");
    } else {
        alunoTr.appendChild(nomeTd);
        alunoTr.appendChild(notaumTd);
        alunoTr.appendChild(notadoisTd);
        alunoTr.appendChild(mediaTd);
        tabela.appendChild(alunoTr);
        result(media,mediaTd);
    };
});





















