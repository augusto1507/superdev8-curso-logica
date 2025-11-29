//padrao js é camelcase
function exemploVariaveisTexto() {
    const produto1 = "Xbox"
    const produto2 = "Gameboy Color"

    const produtos = produto1 + " " + produto2
    alert("produtos: " + produtos)
}

function exemploVariaveisInteiro() {
    const numero1 = 18
    const numero2 = 147
    const soma = numero1 + numero2

    alert("soma: " + soma)
}

function exemploVariaveisFloat() {
    const quantidadeHoras = 10;
    const valorHora = 2.31;

    const salariobruto = quantidadeHoras * valorHora;
    alert("Salario bruto: " + salariobruto)
}

function exemploVariaveisBoolean() {
    let lorenzofechouAba = false;

    //const:n muda
    //let: muda

    lorenzofechouAba = true;

    alert("Lorenzou fechou a aba: " + lorenzofechouAba)
}

function exemploVariaveisCompra() {
    const destino = "maceió";
    const quantidadeDias = 20;
    const precoDiaria = 1300.1;
    let finalizadaCompra = false;

    let valortotal = quantidadeDias * precoDiaria

    finalizadaCompra = true

    alert(
        "Destino: " + destino +
        "\nQuantidade de dias: " + quantidadeDias +
        "\nPreço Diária: " + precoDiaria +
        "\nFinalizar compra:" + finalizadaCompra +
        "\nValor total: R$" + valortotal
    )
}

function exercicioPokemon() {
    const nomep1 = "Naclstack";
    const numerop1 = 933;
    const descricaop1="This Pokémon dry cures its prey by spraying salt over them. The curing process steals away the water in the prey’s body" ;
    const alturap1=0.6;
    const pesop1=150.0;
    const categoriap1="rock salt";
    const habilidadep1="Purifying Salt, Sturdy";
    const alturap12= alturap1*alturap1;
    const imcp1=pesop1/alturap12;

    const nomep2 = "Mudbray";
    const numerop2 = 749;
    const descricaop2="This Pokémon covers itself in mud that it has regurgitated. The mud won’t dry out even if it’s exposed to the sun for a long time." ;
    const alturap2=1.0;
    const pesop2=110.0;
    const categoriap2="donkey";
    const habilidadep2="Own Tempo ,Stamina";
    const alturap22= alturap1*alturap1;
    const imcp2=pesop2/alturap22;

    alert("Pokemon1"+
        "\nNome: "+ nomep1 +
        "\nNumero: "+ numerop1 +
        "\nDescrição: "+ descricaop1+
        "\nAltura: "+ alturap1+
        "\nPeso: "+ pesop1+
        "\nCategoria: "+ categoriap1+
        "\nHabilidade: "+ habilidadep1+
        "\nIMC: "+imcp1+
        "\nPokemon2"+
        "\nNome: "+ nomep2 +
        "\nNumero: "+ numerop2 +
        "\nDescrição: "+ descricaop2+
        "\nAltura: "+ alturap2+
        "\nPeso: "+ pesop2+
        "\nCategoria: "+ categoriap2+
        "\nHabilidade: "+ habilidadep2+
        "\nIMC: "+imcp2
    )
}