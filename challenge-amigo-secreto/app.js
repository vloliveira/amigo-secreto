//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;
  amigos.push(amigo);
  console.log(amigo, amigos);
}
