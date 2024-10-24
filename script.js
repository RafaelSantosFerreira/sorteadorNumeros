document.addEventListener("DOMContentLoaded", () => {
    const sorteioBtn = document.getElementById("sorteioBtn");
    const resultado = document.getElementById("dados");
    const numVezes = document.getElementById("numero-inicial");
    const inicial = document.getElementById("de");
    const final = document.getElementById("ate");
    const repNum = document.getElementById("repetir-numero");

    sorteioBtn.addEventListener("click", () => {
        // Convertendo os valores dos inputs para números
        const min = parseInt(inicial.value);
        const max = parseInt(final.value);
        const quantidade = parseInt(numVezes.value);
        const permitirRepeticao = repNum.checked;

        // Verifica se os valores fornecidos são válidos
        if (!valoresValidos(min, max, quantidade)) {
            resultado.textContent = "Por favor, insira valores válidos.";
            return;
        }

        // Sorteia os números e exibe o resultado
        const numerosSorteados = sortearNumeros(min, max, quantidade, permitirRepeticao);
        resultado.textContent = numerosSorteados.join(", ");
    });

    function valoresValidos(min, max, quantidade) {
        return !(isNaN(min) || isNaN(max) || isNaN(quantidade) || min > max || quantidade <= 0);
    }

    function sortearNumeros(min, max, quantidade, permitirRepeticao) {
        const numeros = [];
        const setNumeros = new Set();

        while (numeros.length < quantidade) {
            const numero = gerarNumeroAleatorio(min, max);
            if (permitirRepeticao || !setNumeros.has(numero)) {
                numeros.push(numero);
                setNumeros.add(numero);
            }
        }

        return numeros;
    }

    function gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
