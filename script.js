/// CONVERSOR DE MONEDA
/// MONEDA A CONVERTIR - factor1
/// MONEDAS A MULTIPLICAR: DOLAR USD, EURO, REAL, LIBRA - factor2

let saludo = alert(`Hola! Bienvenido al conversor de divisas.`)
let moneda;
let factor;
let valorFactor1;
let valorFactor2;


do {
    moneda = prompt(`Ingrese la moneda que quiera convertir:` + `\n`
                    + `PESO ARG` + `\n`
                    + `DOLAR USD` + `\n`
                    + `EURO` + `\n`
                    + `REAL` + `\n`
                    + `LIBRA` + `\n`);
    factor = prompt(`Ingrese la moneda a la cual quiera convertir:` + `\n`
                    + `PESO ARG` + `\n`
                    + `DOLAR USD` + `\n`
                    + `EURO` + `\n`
                    + `REAL` + `\n`
                    + `LIBRA` + `\n`);

    valorFactor1 = +prompt(`Ingrese el monto que quiera convertir`);
    if (moneda == `PESO ARG`) {
        convertirPeso(valorFactor1,valorFactor2)
    }else if (moneda == `DOLAR USD`) {
        convertirDolar(valorFactor1,valorFactor2)
    }else if (moneda == `EURO`) {
        convertirEuro(valorFactor1,valorFactor2)
    }else if (moneda == `REAL`) {
        convertirReal(valorFactor1,valorFactor2)
    }else if(moneda == `LIBRA`) {
        convertirLibra(valorFactor1,valorFactor2)
    }else {
        alert(`Ingrese un valor numerico.`)
    };
    continuar = prompt(`Desea realizar otra conversion? SI/NO`);
    while (continuar != `NO` && continuar != `SI`) {
        continuar = prompt(`Debe ingresar "NO" o "SI", asegurese de escribir en mayusculas.`);
    }
}while (continuar == `SI`);



function convertirPeso (valor1,valor2) {
    if (factor == `PESO ARG`) {
        valorFactor2 = 1
    }else if (factor == `DOLAR USD`) {
        valorFactor2 = 349.26
    }else if (factor == `EURO`) {
        valorFactor2 = 377.12
    }else if (factor == `REAL`) {
        valorFactor2 = 70,67
    }else if (factor == `LIBRA`) {
        valorFactor2 = 440,18
    }else {
        alert(`Ingrese un valor que se encuentre dentro de la lista, recuerde escribir con mayusculas.`)
    };
    valor2 = valorFactor2;
    let resultado = valor1 / valor2;
    alert(`${valor1} de PESOS ARS = ${resultado} de ${factor}`);
};

function convertirDolar (valor1,valor2) {
    if (factor == `DOLAR USD`) {
        valorFactor2 = 1
    }else if (factor == `PESO ARG`) {
        valorFactor2 = 0.0029
    }else if (factor == `EURO`) {
        valorFactor2 = 1.08
    }else if (factor == `REAL`) {
        valorFactor2 = 0.20
    }else if (factor == `LIBRA`) {
        valorFactor2 = 1.26
    }else {
        alert(`Ingrese un valor que se encuentre dentro de la lista, recuerde escribir con mayusculas.`)
    };
    valor2 = valorFactor2
    let resultado;
    if (valor1 < 1) {
        resultado = valor1 * valor2
    } else {
        resultado = valor1 / valor2
    };
    alert(`${valor1} de DOLAR USD = ${resultado} de ${factor}`)
};

function convertirEuro (valor1,valor2) {
    if (factor == `EURO`) {
        valorFactor2 = 1
    }else if (factor == `DOLAR USD`) {
        valorFactor2 = 0.93
    }else if (factor == `PESO ARG`) {
        valorFactor2 = 0.0027
    }else if (factor == `REAL`) {
        valorFactor2 = 0.19
    }else if (factor == `LIBRA`) {
        valorFactor2 = 1.17
    }else {
        alert(`Ingrese un valor que se encuentre dentro de la lista, recuerde escribir con mayusculas.`)
    };
    valor2 = valorFactor2
    let resultado;
    if (valor1 < 1) {
        resultado = valor1 * valor2
    } else {
        resultado = valor1  / valor2
    };
    alert(`${valor1} de EURO = ${resultado} de ${factor}`)
};

function convertirReal (valor1,valor2) {
    if (factor == `REAL`) {
        valorFactor2 = 1
    }else if (factor == `DOLAR USD`) {
        valorFactor2 = 4.95
    }else if (factor == `EURO`) {
        valorFactor2 = 5.34
    }else if (factor == `PESO ARG`) {
        valorFactor2 = 0.0142
    }else if (factor == `LIBRA`) {
        valorFactor2 = 6.23
    }else {
        alert(`Ingrese un valor que se encuentre dentro de la lista, recuerde escribir con mayusculas.`)
    };
    valor2 = valorFactor2
    let resultado;
    if (valor1 < 1) {
        resultado = valor1 * valor2
    } else {
        resultado = valor1  / valor2
    };
    alert(`${valor1} de REAL = ${resultado} de ${factor}`)
};

function convertirLibra (valor1,valor2) {
    if (factor == `LIBRA`) {
        valorFactor2 = 1
    }else if (factor == `DOLAR USD`) {
        valorFactor2 = 0.79
    }else if (factor == `EURO`) {
        valorFactor2 = 0.86
    }else if (factor == `REAL`) {
        valorFactor2 = 0.16
    }else if (factor == `PESO ARG`) {
        valorFactor2 = 0.0023
    }else {
        alert(`Ingrese un valor que se encuentre dentro de la lista, recuerde escribir con mayusculas.`)
    };
    valor2 = valorFactor2
    let resultado = valor1 * valor2
    alert(`${valor1} de LIBRA = ${resultado} de ${factor}`)
};



