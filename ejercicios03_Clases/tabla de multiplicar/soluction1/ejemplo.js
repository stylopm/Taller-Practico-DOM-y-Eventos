let calcularTablas = ()=>{
    let tablaM = parseInt(document.getElementById('tablaMultiplicar').value);
    let inicioT = parseInt(document.getElementById('inicioTabla').value);
    let finT = parseInt(document.getElementById('finTabla').value);
    for (let ciclo = inicioT; ciclo <= finT; ciclo++) {
        let tabla = tablaM;
        let texth1 = document.createElement("tr");
        let resultado = ciclo * tabla;
        texth1.innerHTML = `<td>${tabla}*${ciclo}</td><td>=${resultado}</td>`; 
        document.getElementsByTagName("tbody")[0].appendChild(texth1);        
    }
}