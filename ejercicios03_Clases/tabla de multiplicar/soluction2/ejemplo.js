let calcularTablas = ()=>{
    let tablaM = parseInt( document.getElementById('tablaMultiplicar').value);
    let inicioT = parseInt(document.getElementById('inicioTabla').value);
    let finT = parseInt(document.getElementById('finTabla').value);
    if (tablaM <= 0 || isNaN(tablaM)){
        alert('El valor de la tabla debe ser mayor a 0');
        // Se para la secuencia del la funcion
        return false;
    }
    if (inicioT <= 0 || isNaN(inicioT)){
        alert('El valor del inicio debe ser mayor a 0');
        // Se para la secuencia del la funcion
        return false;
    }
    if (finT <= 0 || isNaN(finT)){
        alert('El valor del fin debe ser mayor a 0');
        // Se para la secuencia del la funcion
        return false;
    }
    if (inicioT >= finT){
        alert('El valor del inicio debe ser menor al final');
        return false;
    }
    document.getElementsByTagName('tbody')[0].innerHTML = '';
    document.getElementById('tablaMultiplicar').value = '';
    document.getElementById('inicioTabla').value = '';
    document.getElementById('finTabla').value= '';
    for (let ciclo = inicioT; ciclo <= finT; ciclo++) {
        let tabla = tablaM;
        let texth1 = document.createElement('tr');
        let resultado = ciclo * tabla;
        texth1.innerHTML = `<td>${tabla}*${ciclo}</td><td>=${resultado}</td>`; 
        document.getElementsByTagName('tbody')[0].appendChild(texth1);        
    }
}