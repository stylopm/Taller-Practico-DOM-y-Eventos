const ejercicio1 = () => {
    console.clear();
    console.log('Ejercicio 1');
    alert('Hello World');
}

const ejercicio2 = () => {
    console.clear();
    console.log('Ejercicio 2');
    document.write('Hello World');
}

const ejercicio3 = () => {
    console.clear();
    console.log('Ejercicio 3');
    const a = 3;
    const b = 5;
    const res = `Ejercicio 3: La suma de ${a} + ${b} = ${a + b}`;
    console.log(res);
    document.getElementById('result').innerHTML = res;
}

const ejercicio4 = () => {
    console.clear();
    const nameUser = prompt('Digite el nombre del usuario');
    console.log(nameUser);
    const res = `Ejercicio 4: El nombre del usuario es ${nameUser}`
    document.getElementById('result').innerHTML = res;
    console.log(res);
}

const ejercicio5 = () => {
    console.clear();
    console.log('Ejercicio 5');
    const a = prompt('Digite el primer número');
    const b = prompt('Digite el segundo número');
    const r = parseInt(a)+parseInt(b);
    const message = `Ejercicio 5: El resultado de sumar ${a} + ${b} es ${r} `
    document.getElementById('result').innerHTML = message;
    console.log(message);
}