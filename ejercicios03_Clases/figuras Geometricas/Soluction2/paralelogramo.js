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