
const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];
const nombreMayusculas = ['ALBERTO', 'PATY', 'JOSE', 'DANIEL', 'LUIS', 'ANTONIO', 'LUIS', 'PATY', 'LUIS'];

const ejercicio1 = () => {
    console.clear();
    console.log('Ejercicio 1');
    const table = 2;
    let printHtml = '';
    for (let row = 1; row <= 10; row++) {
        let print = `${table} X ${row} = ${table * row}`
        console.log(print);
        printHtml += print + '<br>';
    }
    document.getElementById('result').innerHTML = printHtml;
}

const ejercicio2 = () => {
    console.clear();
    console.log('Ejercicio 2');
    const nombreMayusculas = [];
    nombres.forEach(
        (name) => nombreMayusculas.push(name.toUpperCase())
    )
    console.log(nombreMayusculas);
}

const ejercicio3 = () => {
    console.clear();
    console.log('Ejercicio 3');
    const nombreMinusculas = nombreMayusculas.map(
        (name) => name.toLowerCase()
    );
    console.log(nombreMinusculas);
}

const ejercicio4 = () => {
    console.clear();
    console.log('Ejercicio 4');
    const nombresFiltro = nombres.filter((name) => {
        if (name.toLowerCase() === 'luis') {
            return name;
        }
    })
    console.log(nombresFiltro);
}

const ejercicio5 = () => {
    console.clear();
    console.log('Ejercicio 5');
    const numeros = [];
    for (let ciclo = 2; ciclo <= 10; ciclo++) {
        if (ciclo % 2 === 0) {
            numeros.push(ciclo);
        }
    }
    console.log(numeros);
}

const ejercicio6 = () => {
    console.clear();
    console.log('Ejercicio 6');
    const numeros = [];
    for (let ciclo = 2; ciclo <= 10; ciclo++) {
        if (ciclo % 2 === 0) {
            numeros.push(ciclo);
        }
    }
    const valorInicial = 0;
    const total = numeros.reduce((valorAnterior, valorActual) => valorAnterior + valorActual, valorInicial);
    console.log(`El total del contenido del arreglo es ${total}`);
}