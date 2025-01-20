/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
Aquí deberás desarrollar la lógica para resolver el problema. */

let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo');
    if (amigo.value == '') {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(amigo.value);
        amigo.value = '';
        actualizarListaAmigos();
    }
}
function actualizarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((amg)=>{
        listaAmigos.innerHTML += `<li>${amg}</li>`;
    })
}
function sortearAmigo(){
    if (amigos.length === 0) {
        alert('No tiene amigos para sortear');
    } else {
        let rnd = Math.floor(Math.random()*amigos.length);
        let nombreSorteado = amigos[rnd];
        document.getElementById('resultado').innerHTML = nombreSorteado;
    }
}

