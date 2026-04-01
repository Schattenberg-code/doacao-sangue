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


    /* 
    ==========================
    ====validações simples====
    ==========================
    */

    if(!nome){
        document.getElementById('erroNome').textContent = "Insira um nome.";
        valido = false;
    }
    if(!email){
        document.getElementById('erroEmail').textContent = "Insira um email.";
        valido = false;
    }
    if(!idade){
        document.getElementById('erroIdade').textContent = "Insira a idade.";
        valido = false;
    }
    if(!peso){
        document.getElementById('erroPeso').textContent = "Insira seu peso.";
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
        alert("Formulário enviado com sucesso!");
        form.submit();
    }


})