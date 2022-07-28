const formulario = document.getElementsByName('formulario')[0];
elementos = formulario.elements,
boton = document.getElementById('btn');

const validarNombre = (e) => {
    if (formulario.nombre.value == 0) {
        alert('Completa el campo Nombre');
        e.preventDefault();
    }
};

const validar1 = (e) => {
    validarNombre(e);
}

const validarApellido = (e) => {
    if (formulario.apellido.value == 0) {
        alert('Completa el campo Apellido');
        e.preventDefault();
    }
};

const validar2 = (e) => {
    validarApellido(e);
}

const validarRadio = (e) => {
    if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {
    } else {
        alert("Completa el campo de sexo");
        e.preventDefault();
    }
};

const validar3 = (e) => {
    validarRadio(e);
}

const validarCheck = (e) => {
    if (formulario.checkin.checked == true) {
    } else {
        alert("Completa el check de Términos y Condiciones");
        e.preventDefault();
    }
};

const validar4 = (e) => {
    validarCheck(e);
}

formulario.addEventListener("submit", validar1);
formulario.addEventListener("submit", validar2);
formulario.addEventListener("submit", validar3);
formulario.addEventListener("submit", validar4);