var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var CEP = document.getElementById("CEP");
var logradouro = document.getElementById("logradouro");
var número = document.getElementById("logradouro");
var complemento = document.getElementById("número");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");
var saida = document.getElementById("saida-de-dados");


function alertar(event){
//      alert("Voce clicou no botao!!!" + " " + nome.value);

//      var numero = 6;
//      var resultado = numero % 2;
//      if(resultado == 0){
//         alert("este numero é par!");
//      }
// 
saida.innerTExt = "Nome: " + nome.value +
   "\n Email: " + email.value;
   "\n Telefone: " + telefone.value;
   "\n CEP: " + CEP.value;
   "\n logradouro: " + logradouro.value;
   "\n número: " + número.value;
   "\n Complemento: " + complemento.value;
   "\n Bairro: " + bairro.value;
   "\n Cidade: " + cidade.value;
   "\n Estado: " + estado.value;
}