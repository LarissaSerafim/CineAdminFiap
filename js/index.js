const botoes = document.querySelectorAll('.botao');


const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

  
    desselecionarBotao();   


      botao.classList.add("selecionado");



    desselecionarPersonagem();


personagens[indice].classList.add("selecionado");

  });
});

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

const avaliacaoFilme = (valor) =>{
  
   const avaliacao = valor.innerText
  if(avaliacao == 1){
    document.querySelector("#submit").innerHTML = "Ruim"
  
  }
  else if(avaliacao == 2){
    document.querySelector("#submit").innerHTML = "Regular"
  
  }
  else if(avaliacao == 3){
    document.querySelector("#submit").innerHTML = "Bom"
  
  }
  else if(avaliacao == 4){
    document.querySelector("#submit").innerHTML = "Gostei"
  
  }
  else if(avaliacao == 5){
    document.querySelector("#submit").innerHTML = "Amei"
  
  }
}
const adicionarFilme = () =>{
    var titulo = document.querySelector("#titulo_filme");
    var sinopse = document.querySelector("#sinopse_filme");
    var ano = document.querySelector("#ano_filme");
    var autor = document.querySelector("#autor_filme")
    var titulo_filme = titulo.value
    var sinopse_filme = sinopse.value
    var ano_filme = ano.value
    var autor_vilme = autor.value

}