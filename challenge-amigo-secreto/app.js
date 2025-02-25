//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo) {
    amigos.push(amigo);
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    //Aqui tem um laço for...of para criar uma <li> com cada nome
    for (const nomes of amigos) {
      const item = document.createElement("li");
      item.textContent = nomes;
      lista.appendChild(item);
    }

    document.getElementById("amigo").value = "";
  } else {
    alert("Por favor, insira um nome.");
  }

  console.log(amigo, amigos);
}

function sortearAmigo() {
  if (amigos) {
    let numSorteado = parseInt(Math.random() * amigos.length);
    let amigoSorteado = amigos[numSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;

    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";

    console.log(amigoSorteado);
  } else {
    console.log("Não tem amigos para sortear");
  }
}
