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