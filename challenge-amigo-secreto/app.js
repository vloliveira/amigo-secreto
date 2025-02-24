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
    alert("Por favor, insira um nome válido.");
  }

  console.log(amigo, amigos);
}

function sortearAmigo() {
  let numSorteado = parseInt(Math.random() * amigos.length);
  let amigoSorteado = amigos[numSorteado];
  console.log(amigoSorteado);
}
