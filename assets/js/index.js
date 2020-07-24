/**
 * Función para eliminar todas las filas de la tabla
 * así no se amontonan resultados
 */
const deleteAllRows = () => {
    const tableRef = document.querySelector('#table tbody');
    tableRef.innerHTML = '';
}

/**
 * Agrega una fila a la tabla por cada iteración
 * @param {*number} limiteSuperior 
 * @param {*number} limiteInferior 
 * @param {*number} resultado 
 */
const addRow = (limiteSuperior, limiteInferior, resultado) => {
    const tableRef = document.querySelector('#table tbody');
    const newRow = tableRef.insertRow(-1);
    const cellLimiteSuperior = newRow.insertCell(0);
    const cellLimiteInferior = newRow.insertCell(1);
    const cellResultado = newRow.insertCell(2);
    const textLimiteSuperior = document.createTextNode(`${limiteSuperior}`);
    const textLimiteInferior = document.createTextNode(`${limiteInferior}`);
    const textResultado = document.createTextNode(`(${limiteSuperior} + ${limiteInferior}) / 2 = ${resultado}`);
    cellLimiteSuperior.appendChild(textLimiteSuperior);
    cellLimiteInferior.appendChild(textLimiteInferior);
    cellResultado.appendChild(textResultado);
    cellResultado.className = 'cell_resultado';
}

/**
 * Función que calcula el punto medio
 * el while se especifica en true porque no se sabe cuantas iteraciones se van a utilizar
 * y la condición es un poco compleja para colocarla en un do while
 * @param {*number} limiteSuperior 
 * @param {*number} limiteInferior 
 * @param {*number} objetivo 
 * @param {*number} error 
 */
const calcularAproximacionPuntoMedio = (limiteSuperior, limiteInferior, objetivo, error) => {
    /* casteando los valores de los parametros*/
    limiteSuperior = parseFloat(limiteSuperior);
    limiteInferior = parseFloat(limiteInferior);
    objetivo = parseFloat(objetivo);
    error = parseFloat(error);

    let resultado;
    const errorInferior = objetivo - error;
    const errorSuperior = objetivo + error;
    let diferenciaSuperior = 0;
    let diferenciaInferior = 0;
    let contador = 0;

    while (true) {
        contador++;
        resultado = (limiteSuperior + limiteInferior) / 2;
        addRow(limiteSuperior, limiteInferior, resultado);
        if ((errorInferior < resultado && resultado < errorSuperior)) {
            break;
        } else {
            diferenciaSuperior = objetivo - limiteSuperior;
            diferenciaInferior = limiteInferior - objetivo;
            limiteSuperior = diferenciaSuperior < diferenciaInferior ? resultado : limiteSuperior;
            limiteInferior = diferenciaInferior < diferenciaSuperior ? resultado : limiteInferior;
        }
    }

    printResults(resultado, contador);
}

/**
 * Función que imprime los resultados arriba de la tabla
 * @param {*number} resultado
 * @param {*number} iteraciones 
 */
const printResults = (resultado, iteraciones) => {
    const resultadoFinal = document.getElementById('resultadoFinal');
    const totalIteraciones = document.getElementById('totalIteraciones');

    resultadoFinal.innerHTML = `Resultado: ${resultado}`;
    totalIteraciones.innerHTML = `Total de iteraciones: ${iteraciones}`;
}