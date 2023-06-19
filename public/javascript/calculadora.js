const funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const valorPorHora = parseFloat(document.getElementById('valorPorHora').value);
        const interfazHoras = parseFloat(document.getElementById('interfazHoras').value);

        let resultado = valorPorHora * interfazHoras;
        document.getElementById('valorTotal').value = resultado;
    });
};

// Invocar la función funcionPredeterminada
funcionPredeterminada();
