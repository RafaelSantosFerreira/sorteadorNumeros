document.addEventListener("DOMContentLoaded", function() {
    const sorteioBtn = document.getElementById("sorteioBtn");
    const resultado = document.getElementById("dados");

    const numVezes = document.getElementById("numero-inicial");
    const inicial = document.getElementById("de");
    const final = document.getElementById("ate");
    const repNum = document.getElementById("repetir-numero");

    sorteioBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Desabilita o comportamento normal do botão do formulário
        
        // Convertendo os valores dos inputs para números
        const min = parseInt(inicial.value);
        const max = parseInt(final.value);
        const quantidade = parseInt(numVezes.value);
        const isSortear = repNum.checked; // Verifica se os números podem se repetir
        
        // Verifica se os valores fornecidos são válidos
        if (isNaN(min) || isNaN(max) || isNaN(quantidade) || min > max || quantidade <= 0) {
            resultado.textContent = "Por favor, insira valores válidos.";
            return;
        }

        const numerosSorteados = sortearNumeros(min, max, quantidade, isSortear);
        resultado.textContent = ` ${numerosSorteados.join(", ")}`;
    });

    repNum.addEventListener("change", function() {
        if (repNum.checked) {
            console.log("Checkbox está marcado: true");
        } else {
            console.log("Checkbox não está marcado: false");
        }
    });

    function sortearNumeros(min, max, quantidade, permitirRepeticao) {
        const numeros = permitirRepeticao ? [] : new Set();
        
        while (permitirRepeticao ? numeros.length < quantidade : numeros.size < quantidade) {
            const numero = Math.floor(Math.random() * (max - min + 1)) + min;
            if (permitirRepeticao) {
                numeros.push(numero);
            } else {
                numeros.add(numero);
            }
        }

        return permitirRepeticao ? numeros : Array.from(numeros);
    }
});
