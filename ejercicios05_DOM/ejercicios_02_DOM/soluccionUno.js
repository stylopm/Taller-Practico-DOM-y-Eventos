const actionOne = () => 
    document.getElementById('divOne').style.background = '#870000';

const actionTwo = () => {
    console.log('actionTwo');
    document.getElementById('divTwo').style.width = '600px';
}

const actionThree = () => {

    // primera forma
    // let divSelect = document.getElementById('divThree');

    // divSelect.style.border = '10px';
    // divSelect.style.borderStyle = 'dotted';
    // divSelect.style.borderColor = '#870000';

    // Segunda forma
    // divSelect.style.border = '10px dotted #870000'

    // Tercera forma
    document.getElementById('divThree').style.border = '10px';
    document.getElementById('divThree').style.borderStyle = 'dotted';
    document.getElementById('divThree').style.borderColor = '#870000';

    // # id
    // . class

}
