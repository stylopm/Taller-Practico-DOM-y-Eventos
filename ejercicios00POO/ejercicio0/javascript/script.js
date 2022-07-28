// Creamos o instanciamos un nuevo objeto de tipo `Persona`
// Al instanciarlo se le asigna una identidad.
const fulano = new Persona('Fulano', 'fulanito@de.tal');

// Se pueden realizar acciones por medio de su interfaz (abstracción)
// Imprime `Mi correo es: fulanito@de.tal`
fulano.decirCorreo();

// Imprime `Persona Fulano dice: Hola, qué tal!`
fulano.hablar('Hola, que tal!');

// Así mismo se puede crear un nuevo objeto de tipo `Instructor`
// El cual recibe una nueva identidad.
const instructorZutano = new Instructor('Instructor Zutano', 'instructor.zutano@de.tal');

// Al ser el objeto de tipo `Instructor` se tiene acceso a los nuevos métodos definidos en su clase
// Ya que aún no asignamos una materia
// imprime: `Instructor Zutano no tiene materia asignada`
instructorZutano.explicar('Programación orientada a objetos');

// Los métodos de las clases son los únicos que modifican las propiedades internas
// Por lo que las propiedades están encapsuladas
instructorZutano.asignarMateria('Desarrollo de Software');

// Ya que el Instructor tiene materia asignada
// imprime: `Hoy, en la clase de Desarrollo de Software, veremos el tema Programación orientada a objetos` 22
instructorZutano.explicar('Programación orientada a objetos');

// Se puede acceder a los métodos de la clase padre `Persona`
// Imprime `Mi correo es: instructor.zutano@de.tal`
instructorZutano.decirCorreo();

// O se pueden usar los métodos sobrescritos de la clase hija (polimorfismo)
// Imprime: `Zutano Instructor dice: Hola desde Instructor`
instructorZutano.hablar('Hola desde Instructor');