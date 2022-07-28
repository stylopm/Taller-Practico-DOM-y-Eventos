// La clase `Instructor` hereda las propiedades y métodos de la clase `Persona`
// También se puede decir que `Instructor` es un tipo de `Persona`
class Instructor extends Persona {
    // Se pueden crear nuevas propiedades para esta clase hija
    materia = null;
    // Así como crear nuevos métodos para esta clase hija
    asignarMateria(materia) {
        this.materia = materia;
    }

    explicar(tema) {
        // Validamos si tiene materia asignada
        if (!this.materia) {
            console.log(`${this.nombre} no tiene materia asignada.`);
        } else {
            console.log(`Hoy, en clase de ${this.materia}, veremos el tema: ${tema}`);
        }
    }

    // O se pueden sobrescribir métodos
    hablar(mensaje) {
        console.log(`${this.nombre} dice: ${mensaje}`);
    }
}
