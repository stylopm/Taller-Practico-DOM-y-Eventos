const botonSimple = document.getElementById('botonSimple');
botonSimple.addEventListener('click', () =>{
    console.log('Evento nuevo desde JS');
    alert('Evento nuevo desde JS');
})

const saludo = () => {
    console.log('Hola a todos desde la función Saludo');
    // Modal 
    alert('Hola a todos');
}

const onmouseoverTest =() =>{
    console.log('Disparo onmouseover');
}


const onmouseoutTest =() =>{
    console.log('Disparo onmouseout');
}