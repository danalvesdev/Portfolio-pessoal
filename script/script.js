let projetoCard = document.getElementById("projeto-conteiner")
function mostrarProjeto(){
    for(let i of projetos){
        projetoCard.innerHTML += `<div class="projeto-card">
            <a href="${i.link}" target="_blank"><img src="${i.foto}" alt="Projeto05" class="foto"></a>
            <div class="titulo"> <h3>${i.Titulo}</h3></div>
            <div class="info">${i.descricao}</div>
            <div class="ano">${i.Data}</div>
        </div>`
    }
}
mostrarProjeto()