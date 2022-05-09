//comentário em js
function ex1() {
    //criando uma mensagem de aviso com alert
    alert("ola pessoal");
    //pegar o valor do form
    var v0 = document.getElementById('v0').value;
    const g = 10; //aceleração é 10m/s^2
    tSubida = v0/g;
    //devolver valor pro input
    document.getElementById('vem').innerHTML="Tempo de subida = " + tSubida;
    console.log("Tempo de subida = " + tSubida);
}