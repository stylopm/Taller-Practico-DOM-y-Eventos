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

let areaCuadrado = () => {
    if(validacionCampos('ladoCuadrado')){
    let lado = parseInt(document.getElementById('ladoCuadrado').value);
    let cuadrado = new Cuadrado(lado);
    document.getElementById('resultadoCuadrado').innerHTML = `<strong>El area del cuadrado es ${cuadrado.area()}</strong>`;
    }
}
let perimetroCuadrado = () => {
    validacionCampos('ladoCuadrado');
    let lado = parseInt(document.getElementById('ladoCuadrado').value);
    let cuadrado = new Cuadrado(lado);
    document.getElementById('resultadoCuadrado').innerHTML = `<strong>El perímetro del cuadrado es ${cuadrado.perimetro()}</strong>`;
}

let validacionCampos = (nombreInput) => {
    let lado = parseInt(document.getElementById(nombreInput).value);
    if (lado <= 0 || isNaN(lado)) {
        alert(`El valor del ${nombreInput} debe ser mayor a 0`);
        return false;
    }
    return true;
}