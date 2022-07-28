console.log('Ejemplo de POO');
//Nombre de las clases inician Mayusculas
class Rectangulo{

    base = 0;
    altura = 0;
    //Metodo default constuctor
    constructor(pbase, paltura) {
        this.base = pbase;
        this.altura = paltura;
    }

    //Metodos
    area() {
        return this.base * this.altura ;
    }
    //Metodos
    perimetro(){
        console.log('Calculado Perimetro');
        return (this.base * 2) + (this.altura * 2)
    }
}
// Instancia
let rectanguloUno = new Rectangulo(5, 10);
console.log(rectanguloUno.area());
//DOM
document.getElementById('respuesta').innerHTML 
= rectanguloUno.area();