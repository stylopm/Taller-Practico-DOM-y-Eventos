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
