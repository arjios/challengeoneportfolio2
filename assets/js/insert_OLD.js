function wordValidator() {
  let inputName = document.getElementById("inputName").value;
  let inputEmail = document.getElementById("inputEmail").value;
  let inputAssunto = document.getElementById("inputAssunto").value;
  let inputMensagem = document.getElementById("inputMensagem").value;
  if(inputName.length < 1 || inputName.length > 50) {
    alert("Error: Nonme não pode ser vazio e deve ter menos que 50 caracteres.")
  }

  if(inputEmail.length < 1 || inputEmail.length > 50) {
    alert("Error: Email não pode ser vazio e deve ter menos que 50 caracteres.")
  }

  if(inputAssunto.length < 1 || inputAssunto.length > 50) {
    alert("Error: Assunto não pode ser vazio e deve ter menos que 50 caracteres.")
  }

  if(inputMensagem.length < 1 || inputMensagem.length > 300) {
    alert("Error: Mensagem não pode ser vazio e deve ter menos que 50 caracteres.")
  }

  console.log("Palavra inserida com sucesso!!!" + inputName);
  console.log("Palavra inserida com sucesso!!!" + inputEmail);
  console.log("Palavra inserida com sucesso!!!" + inputAssunto);
  console.log("Palavra inserida com sucesso!!!" + inputMensagem);
}

function nameValidator() {
  let name = document.getElementById("inputName").value;
  if(name.length < 1 || name.length > 50) {
    alert("Error: Nonme não pode ser vazio e deve ter menos que 50 caracteres.");
  }
  console.log(name);
}


let inputs = document.querySelector(".text__description");
inputs.addEventListener('onchange', function(evt) {
  evt.preventDefault();
  console.log("**************************");
  let el = document.getElementById("inputName");
  el.onblur = function() {
    console.log("TESTE");
  }
});




