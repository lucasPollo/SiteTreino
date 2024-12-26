function mostrarUltimoDado() {
    var input = document.getElementById("meuInput").value;  // Pega o valor do input
    var ultimoDado = input;        // Pega o último caractere

    // Exibe o último dado no parágrafo com id "resultado"
    document.getElementById("resultado").innerText = "Último dado: " + ultimoDado;
}
