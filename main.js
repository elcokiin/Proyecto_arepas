const tipo = document.querySelector('#tipo');
const paquetes = document.querySelector('#paquetes');
const boton = document.querySelector('#boton');


boton.addEventListener('click', enviar = () => {
    resPaquetes = parseFloat(paquetes.value);
    resTipo = tipo.value;
    if (resTipo == 'sal' || resTipo == 'azucar' || resTipo == 'Sal' || resTipo == 'Azucar' || resTipo == 1 || resTipo == 2) {
        if (resPaquetes > 0) {
            todo('maiz', 35, 60, 'results-one');
            todo('mantequilla', 2.5, 60, 'results-two');
            if (resTipo == 'sal' || resTipo == 'Sal' || resTipo == 1) {
                todo('sal', 0.5, 35, 'results-three');
            }
            else {
                todo('azucar', 2, 25, 'results-three');
            }
        }
        else {
            alert('Inserte un número de paquetes valido');
        }
    }
    else {
        alert('El tipo de arepa no se a encontrado');
    }
})

const todo = (matter, amount, num, where) => {
    resPaquetes = parseFloat(paquetes.value);
    operacion = amount * resPaquetes / num;
    const resultsObj = document.getElementById(where);
    // operacion = Math.round(operacion);
    operacion = operacion.toFixed(2);
    if (operacion < 1) {
        operacion *= 500;
        resultsObj.innerHTML = `<p>La cantidad de <b>${matter}</b> que se necesita para <b>${resPaquetes}</b> paquetes es <b>${operacion} gramos</b><br></p>`

        // document.write(`La cantidad de <b>${matter}</b> que se necesita para <b>${resPaquetes}</b> paquetes es <b>${operacion} gramos</b><br>`);    
    }
    else {
        resultsObj.innerHTML = `<p>La cantidad de <b>${matter}</b> que se necesita para <b>${resPaquetes}</b> paquetes es <b>${operacion} libras</b><br></p>`
        // document.write(`La cantidad de <b>${matter}</b> que se necesita para <b>${resPaquetes}</b> paquetes es <b>${operacion} libras</b><br>`);
    }
}