let tablas = () => {
    let tablas = 10;
    for (let tabla = 0; tabla < tablas; tabla++) {
        let createTable = document.createElement("table");
        createTable.className='table';
        document.getElementsByTagName("body")[0].appendChild(createTable);
        let lastTable = document.getElementsByTagName("table").length;
        let createHead = document.createElement("head");
        document.getElementsByTagName("table")[lastTable - 1].appendChild(createHead);
        let createtr = document.createElement("tr");
        document.getElementsByTagName("table")[lastTable - 1].appendChild(createtr);
        let createth = document.createElement("th");
        createth.colSpan = 2
        createth.innerText = `Tabla ${lastTable}`
        document.getElementsByTagName("table")[lastTable - 1].appendChild(createth);

        for (let recorridotabla = 1; recorridotabla <= 10; recorridotabla++) {
            let createTr = document.createElement("tr");
            document.getElementsByTagName("table")[lastTable - 1].appendChild(createTr);

            let createTdOne = document.createElement("td");
            createTdOne.innerText = ` ${recorridotabla} * ${lastTable}`;
            document.getElementsByTagName("table")[lastTable - 1].appendChild(createTdOne);

            let createTdTwo = document.createElement("td");
            createTdTwo.innerText = ` = ${recorridotabla * lastTable} `;
            document.getElementsByTagName("table")[lastTable - 1].appendChild(createTdTwo);
        }
    }
}
 tablas();