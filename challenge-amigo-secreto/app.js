//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (amigo) {
    amigos.push(amigo);
    document.getElementById("amigo").value = "";

    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos;
  } else {
    alert("Por favor, insira um nome válido.");
  }

  console.log(amigo, amigos);
}

// const incluirLista = {
//   document.getElementById('listaAmigos')
// };
