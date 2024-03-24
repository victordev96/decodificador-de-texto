const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar (){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    mostrarBotaoCopiar();
    ocultarImagem();
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replace(new RegExp(matrizCodigo[i][0], 'g'), matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = descriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    mostrarBotaoCopiar();
    ocultarImagem();
}

function descriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    console.log("Texto desencriptado recebido:", stringDesencriptada);

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            console.log("Encontrada correspondência:", matrizCodigo[i][1], "->", matrizCodigo[i][0]);
            stringDesencriptada = stringDesencriptada.replace(new RegExp(matrizCodigo[i][1], 'g'), matrizCodigo[i][0]);
        }
    }

    console.log("Texto desencriptado final:", stringDesencriptada);
    return stringDesencriptada;
}

function toggleCopiar(visible) {
    const btnCopiar = document.getElementById("btn-copiar");
    btnCopiar.style.display = visible ? "block" : "none";
}

function mostrarBotaoCopiar() {
    const btnCopiar = document.getElementById("btn-copiar");
    btnCopiar.style.display = "block";
}

function copiarTexto() {
    const texto = mensagem.value;
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Texto copiado com sucesso!");
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}

textArea.addEventListener("input", function() {
    const mensagem = this.value.trim(); 
    const mensagemTextArea = document.querySelector(".mensagem");
    if (mensagem.length > 0) {
        mensagemTextArea.classList.add("com-texto");
    } else {
        mensagemTextArea.classList.remove("com-texto");
    }
});