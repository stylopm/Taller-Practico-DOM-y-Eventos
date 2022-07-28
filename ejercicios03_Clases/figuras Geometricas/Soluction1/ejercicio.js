class Cuadrado {
    constructor(lado) {
        this.lado = lado
    }
    area() {
        return this.lado * 2;
    }
    perimetro() {
        return this.lado * 4;
    }
}

class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura
    }
    area() {
        return (this.base * this.altura) / 2;
    }
    perimetro() {
        return this.base * 3;
    }
}

class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura
    }
    area() {
        return this.base * this.altura;
    }
    perimetro() {
        return (this.base * 2) + (this.altura * 2);
    }
}

class Paralelogramo {
    constructor(ladoA, ladoB) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
    };
    area() {
        return this.ladoA * this.ladoB;
    }
    perimetro() {
        return 2 * (this.ladoA + this.ladoB);
    }
}

class Circulo {
    pi = 3.1416
    constructor(radio) {
        this.radio = radio
    }
    area() {
        return (this.radio * (this.pi ** 2)).toFixed(2);
    }
    perimetro() {
        return (this.pi * (2 * this.radio)).toFixed(2);
    }
}

let areaCuadrado = () => {
        let lado = parseInt(document.getElementById('ladoCuadrado').value);
        let cuadrado = new Cuadrado(lado);
        document.getElementById('resultadoCuadrado').innerHTML = `<strong>El area del cuadrado es ${cuadrado.area()}</strong>`;
}

let perimetroCuadrado = () => {
    let lado = parseInt(document.getElementById('ladoCuadrado').value);
    let cuadrado = new Cuadrado(lado);
    document.getElementById('resultadoCuadrado').innerHTML = `<strong>El perímetro del cuadrado es ${cuadrado.perimetro()}</strong>`;
}

let areaTriangulo = () => {
    let baseTriangulo = parseInt(document.getElementById('baseTriangulo').value);
    let alturaTriangulo = parseInt(document.getElementById('alturaTriangulo').value);
    let triangulo = new Triangulo(baseTriangulo, alturaTriangulo);
    document.getElementById('resultadoTriangulo').innerHTML = `<strong>El area del triángulo es ${triangulo.area()}</strong>`;
}
let perimetroTriangulo = () => {
    let baseTriangulo = parseInt(document.getElementById('baseTriangulo').value);
    let alturaTriangulo = parseInt(document.getElementById('alturaTriangulo').value);
    let triangulo = new Triangulo(baseTriangulo, alturaTriangulo);
    document.getElementById('resultadoTriangulo').innerHTML = `<strong>El perímetro del triángulo es ${triangulo.perimetro()}</strong>`;
}


let areaRectangulo = () => {
    let baseRectangulo = parseInt(document.getElementById('baseRectangulo').value);
    let alturaRectangulo = parseInt(document.getElementById('alturaRectangulo').value);
    let rectangulo = new Rectangulo(baseRectangulo, alturaRectangulo);
    document.getElementById('resultadoRectangulo').innerHTML = `<strong>El area del rectángulo es ${rectangulo.area()}</strong>`;
}
let perimetroRectangulo = () => {
    let baseRectangulo = parseInt(document.getElementById('baseRectangulo').value);
    let alturaRectangulo = parseInt(document.getElementById('alturaRectangulo').value);
    let rectangulo = new Rectangulo(baseRectangulo, alturaRectangulo);
    document.getElementById('resultadoRectangulo').innerHTML = `<strong>El perímetro del rectángulo es ${rectangulo.perimetro()}</strong>`;
}

let areaParalelogramo = () => {
    let ladoA = parseInt(document.getElementById('ladoA').value);
    let ladoB = parseInt(document.getElementById('ladoB').value);
    let paralelogramo = new Paralelogramo(ladoA, ladoB);
    document.getElementById('resultadoParalelogramo').innerHTML = `<strong>El area del paralelogramo es ${paralelogramo.area()}</strong>`;
}
let perimetroParalelogramo = () => {
    let ladoA = parseInt(document.getElementById('ladoA').value);
    let ladoB = parseInt(document.getElementById('ladoB').value);
    let paralelogramo = new Paralelogramo(ladoA, ladoB);
    document.getElementById('resultadoParalelogramo').innerHTML = `<strong>El perímetro del paralelogramo es ${paralelogramo.perimetro()}</strong>`;
}

let areaCirculo = () => {
    let radio = parseInt(document.getElementById('radio').value);
    let circulo = new Circulo(radio);
    document.getElementById('resultadoCirculo').innerHTML = `<strong>El area del círculo es ${circulo.area()}</strong>`;
}
let perimetroCirculo = () => {
    let radio = parseInt(document.getElementById('radio').value);
    let circulo = new Circulo(radio);
    document.getElementById('resultadoCirculo').innerHTML = `<strong>El perímetro del círculo es ${circulo.perimetro()}</strong>`;
}