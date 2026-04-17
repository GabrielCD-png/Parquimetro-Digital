class Parquimetro {
    // Método para calcular o tempo e o troco baseado no valor
    calcularTicket(valor) {
        if (valor < 1.00) {
            return { erro: "Valor insuficiente. Mínimo: R$ 1,00" };
        }

        // Verifica de cima para baixo qual a maior tarifa que o valor cobre
        if (valor >= 3.00) {
            return { tempo: 120, troco: valor - 3.00 };
        } 
        else if (valor >= 1.75) {
            return { tempo: 60, troco: valor - 1.75 };
        } 
        else {
            return { tempo: 30, troco: valor - 1.00 };
        }
    }

    // Método responsável por interagir com o HTML (DOM)
    processarPagamento() {
        const inputValor = document.getElementById("valorPago");
        const valorDigitado = parseFloat(inputValor.value);
        
        const divResultado = document.getElementById("resultado");
        const msgTempo = document.getElementById("msgTempo");
        const msgTroco = document.getElementById("msgTroco");
        const msgErro = document.getElementById("msgErro");

        // Limpa mensagens anteriores
        msgErro.textContent = "";
        divResultado.classList.add("oculta");

        // Validação de entrada vazia
        if (isNaN(valorDigitado)) {
            msgErro.textContent = "Por favor, digite um valor válido.";
            return;
        }

        // Chama a lógica de cálculo
        const resultado = this.calcularTicket(valorDigitado);

        // Exibe o resultado ou o erro
        if (resultado.erro) {
            msgErro.textContent = resultado.erro;
        } else {
            msgTempo.innerHTML = `Tempo liberado: <strong>${resultado.tempo} minutos</strong>`;
            msgTroco.textContent = resultado.troco > 0 ? `Troco: R$ ${resultado.troco.toFixed(2)}` : "Sem troco.";
            divResultado.classList.remove("oculta");
        }

        inputValor.value = "";
        inputValor.focus();
    }
}

// Instancia o objeto para ser usado no HTML
const appParquimetro = new Parquimetro();