
function totalEstimado() {
    var numeroNoites = parseInt(document.getElementById('quarto').value);
    var numeroPessoas = parseInt(document.getElementById('convidado').value);
    var total = 0;
    if (numeroPessoas == 1)
        total = numeroNoites * 99;
    else
        total = numeroNoites * 99 + numeroPessoas * 10;
    document.getElementById('total').value = total;
}
