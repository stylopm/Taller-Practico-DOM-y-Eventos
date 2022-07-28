let tablas = () => {
    // Detecto cuantas tablas se van a llenar
    let tablas = document.getElementsByTagName('table');
    for (let tabla = 0; tabla< tablas.length; tabla++ ) {
        for (let ciclo = 1; ciclo <= 10; ciclo++) {
            let texth1 = document.createElement("tr");
            let resultado = ciclo * tabla+1;
            texth1.innerHTML = `<td>${tabla+1}*${ciclo}</td><td>=${resultado}</td>`;
            // Arreglo
            document.getElementsByTagName("tbody")[tabla].appendChild(texth1);
        }
    }
}
tablas();