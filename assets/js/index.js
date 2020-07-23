const aproximacionPuntoMedio = (limiteSuperior, limiteInferior, objetivo, error) => {
    let resultado;
    const errorInferior = objetivo - error;
    const errorSuperior = objetivo + error;
    let contador = 0;
    let diferenciaSuperior = 0;
    let diferenciaInferior = 0;
    while (true) {
        contador++;
        resultado = (limiteSuperior + limiteInferior) / 2;

        if ((errorInferior < resultado && resultado < errorSuperior)) {
            break;
        } else {
            diferenciaSuperior = objetivo - limiteSuperior;
            diferenciaInferior = limiteInferior - objetivo;
            if (diferenciaSuperior < diferenciaInferior) {
                limiteSuperior = resultado;
            } else {
                limiteInferior = resultado;
            }
        }
        if (contador == 10) {
            break;
        }
    }


    console.log(`El resultado final es: ${resultado}`);
    console.log(`Se iteraron: ${contador} veces`);
}

aproximacionPuntoMedio(100, 20, 52.5, .05);