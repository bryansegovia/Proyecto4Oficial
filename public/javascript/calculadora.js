const funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const valorPorHora = parseFloat(document.getElementById('valorPorHora').value);
        const interfazHoras = parseFloat(document.getElementById('interfazHoras').value);
        const horasHtml= parseFloat(document.getElementById('horasHtml').value); 
        //const horasHtml = parseFloat(document.getElementById('horasHtml').value);
        const horasCSS = parseFloat(document.getElementById('horasCSS').value);
        const horasTesting = parseFloat(document.getElementById('horasTesting').value);
        const horasAPI = parseFloat(document.getElementById('horasAPI').value);
        const horasServidor = parseFloat(document.getElementById('horasServidor').value);

        let resultado = valorPorHora * (interfazHoras + horasHtml + horasCSS + horasTesting + horasAPI + horasServidor);
        document.getElementById('valorTotal').value = resultado;
    });
};

// Invocar la función funcionPredeterminada
funcionPredeterminada();
