let Alunos = [];

function cadastrar(x, y){
    let nomecadastrado = x;
    let idadecadastrada = y;
    let maioridade = true;
    if (idadecadastrada < 18){
        maioridade = false;
    } else {
        maioridade = true;
    }
    let aluno = {
        nome: nomecadastrado,
        idade: idadecadastrada,
        maioridade: maioridade
    }
    Alunos.push(aluno);
    console.log(Alunos)
}

function exibir(){
    console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, ${aluno.maioridade}`)
}

cadastrar("Carlos", 17);
cadastrar("Adrian", 19);
cadastrar("Gabs", 18);

function iniciar() { //Tentei colocar um IMPUT para o usuário poder cadastrar utilizando o comando prompt() e cadastrar qnts vezes ele quiser, mas não funcionou
    let iniciar = prompt("Deseja cadastrar um aluno?(sim ou não)")
    
    while (iniciar == "sim") {
        n=String(prompt("digite o nome"));
        i=Number(prompt("digite a idade"));
        cadastrar(n,i);
        exibir();

        iniciar = prompt("Deseja cadastrar mais um aluno?(sim ou não)")

        if (iniciar == "sim") {
            return iniciar();
        }
    }
}