class Persona {
    nombre = '';
    correo = '';

    // El constructor instancia la clase
    // es lo que hace que el objeto que se está creando
    // tenga una identidad y un estado

    constructor(nombre, correo) {
        // La palabra reservada `this` hace referencia al ámbito `scope` del objeto
        // en este caso hace referencia a sus propiedades internas.
        this.nombre = nombre;
        this.correo = correo;
    }

    // Los métodos definen el comportamiento que tendrá el objeto
    hablar(mensaje) {
        console.log(`Persona ${this.nombre} dice: ${mensaje}`);
    }

    decirCorreo() {
        this.hablar(`Mi correo es: ${this.correo}`);
    }
}