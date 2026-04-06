let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){

    console.log("o botão funcionou");

    e.preventDefault();

    let valido = true;

    

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let peso = document.getElementById('peso').value;
    let sangue = document.getElementById('sangue').value;
    let estado = document.getElementById('estado').value;

    document.getElementById('erroNome').textContent = "";
    document.getElementById('erroEmail').textContent = "";
    document.getElementById('erroTelefone').textContent = "";
    document.getElementById('erroIdade').textContent = "";
    document.getElementById('erroCidade').textContent = "";
    document.getElementById('erroPeso').textContent = "";
    document.getElementById('erroSangue').textContent = "";
    document.getElementById('erroEstado').textContent = "";

    let listaDados = [];
    let dados = {
    nome,
    email,
    idade,
    peso,
    tipoSanguineo: sangue,
    telefone,
    cidade,
    estado
    };


    /* 
    ==========================
    ====validações simples====
    ==========================
    */


    if(!nome.trim()){
        document.getElementById('erroNome').textContent = "Insira um nome e sobrenome.";
        valido = false;
    } else if(!nome.trim().includes(" ")){
        document.getElementById('erroNome').textContent = "Insira um sobrenome.";
        valido = false;
    }

    if(!email){
        document.getElementById('erroEmail').textContent = "Insira um email.";
        valido = false;
    } else if(!email.includes("@")){
        document.getElementById('erroEmail').textContent = "Insira um email válido";
        valido = false;
    }

    if(!idade){
        document.getElementById('erroIdade').textContent = "Insira a idade.";
        valido = false;
    } else if (idade < 16){
        document.getElementById('erroIdade').textContent = "Você precisa ter ao menos 16 anos.";
        valido = false;
    }

    if(!peso){
        document.getElementById('erroPeso').textContent = "Insira seu peso.";
        valido = false;
    } else if (peso < 50){
        document.getElementById('erroPeso').textContent = "Você precisa ter ao menos 50kg";
        valido = false;
    }

    if(!sangue){
        document.getElementById('erroSangue').textContent = "Insira seu tipo sanguíneo.";
        valido = false;
    }

    if(!telefone){
        document.getElementById('erroTelefone').textContent = "Insira seu telefone.";
        valido = false;
    }

    if(!cidade){
        document.getElementById('erroCidade').textContent = "Insira sua cidade.";
        valido = false;
    }

    if(!estado){
        document.getElementById('erroEstado').textContent = "Insira seu estado.";
        valido = false;
    }


    //botão enviar//

    if (valido) {
        listaDados.push(dados);

        console.log(listaDados);

        alert("Formulário enviado com sucesso!");

        document.getElementById('nome').value = "";
        document.getElementById('email').value = "";
        document.getElementById('telefone').value = "";
        document.getElementById('idade').value = "";
        document.getElementById('cidade').value = "";
        document.getElementById('peso').value = "";
        document.getElementById('sangue').value = "";
        document.getElementById('estado').value = "";
    }
})