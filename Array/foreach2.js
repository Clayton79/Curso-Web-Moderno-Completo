Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1 }) ${nome}`);
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);