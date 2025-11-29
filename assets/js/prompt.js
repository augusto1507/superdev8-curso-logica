function solicitarString(){
    let nome=prompt("Digite seu nome");
    let sobrenome=prompt("Digite seu sobrenome");

    let nomeSobrenome=nome+" "+sobrenome;
    alert("Nome complete: " + nomeSobrenome)
}

function solicitarInt(){
    let numeroCartao=parseInt(prompt("Digite o número do seu cartão"));
    let codigoSeguranca=parseInt(prompt("Digite o código se segurança"));

    alert("Número: " + numeroCartao + "\nCVV: " + codigoSeguranca)
    
}

function solicitarFloat(){
    let saldoBancario = parseFloat(prompt("Digite seu saldo bancario"));
    const saque= parseFloat(prompt("Digite o valor do saque"));

    saldoBancario=saldoBancario-saque;

    alert("Saque realizado: " + saque + "\nSaldo atual: " + saldoBancario)
}

function solicitarBoolean(){
    let vencido=confirm("produto vencido?");

    alert("Produto vencido: " + vencido)
}

function paciente(){
    let nome=prompt("Digite nome do pasciente");
    const idade=parseInt(prompt("Digite a idade"));
    const peso=parseFloat(prompt("Digite o peso"));
    const possuiPlanoSaude=confirm("Possui plano de saúde");
    const cpf= prompt("Digite o CPF");

    let planoSaude="";
    if(possuiPlanoSaude===true){
        planoSaude=prompt("Digite o nome do plano de saúde");
    }

    const tipoSanguinio=prompt("Digite seu tipo Sanguinio");
    const altura=parseFloat(prompt("Digite a altura"));

    const urgencia=prompt(`Escolha nivel de Urgência [Migué, Atestado, Dorzinha, Dengue, Dor Extrema]`)

    let tempoEspera=0;
    if(urgencia==="Migué"){
        tempoEspera=180;
    } else if(urgencia==="Atestado"){
        tempoEspera=150;
    } else if(urgencia==="Dorzinha"){
        tempoEspera=120;
    } else if(urgencia==="Dengue"){
        tempoEspera=60;
    } else if(urgencia==="Dor Extrema"){
        tempoEspera=30
    } else{
        alert("Nível de urgência inexistente");
    }

    alert(
        "📋 Dados do Paciente\n\n"+
        "Nome: "+nome+
        "\nIdade: "+ idade +" anos"+
        "\nPeso: "+ peso+" kg"+
        "\nCPF: "+cpf+
        "\nPlano de saude: "+ (possuiPlanoSaude ? planoSaude :"Não possui")+
        "\nTipo sanguinio: "+ tipoSanguinio+
        "\nAltura: "+ altura+ " m"+
        "\nNivel de urgencia: "+urgencia+
        "\nTempo de espera: "+ tempoEspera+ " minutos"
    )
    
}

function personagem(){
    let nome=prompt("Digite o nome do personagem");
    let idade=parseInt(prompt("Digite a idade do personagem"));
    let cidade=prompt("Digite a cidade do personagem");
    let tempoder=confirm("O personagem tem poder");
    let poder=""
    if(tempoder===true){
        poder=prompt("Digite o poder");
    }
    let atuacao=parseInt(prompt("Digite quantas vezes ele atua por mês"));

    alert(
        "Nome: "+ nome+
        "\nIdade: "+idade+
        "\nCidade: "+cidade+
        "\nPoder: "+ (tempoder ? poder :"Não possui")+
        "\nAtuação mensal: "+atuacao
    )

}