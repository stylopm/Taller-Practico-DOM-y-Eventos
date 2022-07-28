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