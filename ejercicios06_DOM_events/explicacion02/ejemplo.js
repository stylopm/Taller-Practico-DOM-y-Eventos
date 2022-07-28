const enviar= () => {
    // Obtengo el input
    let nameuser = document.getElementById('nameUser');
    // Imprimo en consola el valor del input
    console.log(nameuser.value);
    // Creo una etiqueta tipo p
    let usuario = document.createElement("p");
    // Inserto el valor del input a mi nuevo elemento 
    usuario.innerText = nameuser.value;
    // Inserto en mi doc de html el nuevo elemento creado
    document.getElementById("result").appendChild(usuario);
    // Limpio el input con un valor nulo
    nameuser.value = null;
}
