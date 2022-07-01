// globais
let boo = true;
let nome = "";
let email = "";
let assunto = "";
let mensagem = "";

document.getElementById("inputName").value = nome;
document.getElementById("inputEmail").value = email;
document.getElementById("inputAssunto").value = assunto;
document.getElementById("inputMensagem").value = mensagem;

bt = document.querySelector("#submitButton");
bt.disabled = true;

let inputName = document.querySelector("#inputName");
inputName.addEventListener("focus", (evt) => {
  evt.preventDefault();
  console.log("Evento input Name disparado ONFOCUS");
});

inputName.addEventListener("blur", (evt) => {
  evt.preventDefault();
  nome = document.getElementById("inputName").value;
  if (nome.length < 1 || nome.length > 50) {
    console.log("Error: input Name disparado ONBLUR " + nome);
    document.querySelector("#inputName").focus;
  } else {
    console.log(
      "Evento input Name disparado ONBLUR " + nome + " " + nome.length
    );
    nome = document.getElementById("inputName").value;
    boo = true;
    document.querySelector("#inputEmail").focus;
  }
});

//

let inputEmail = document.querySelector("#inputEmail");
inputEmail.addEventListener("focus", (evt) => {
  evt.preventDefault();
  console.log("Evento input Email disparado ONFOCUS");
});

inputEmail.addEventListener("blur", (evt) => {
  evt.preventDefault();
  email = document.getElementById("inputEmail").value;
  if (email.length < 1 || email.length > 50) {
    console.log("Error: input Email disparado ONBLUR " + email);
    document.querySelector("#inputEmail").focus;
  } else {
    console.log(
      "Evento input Email disparado ONBLUR " + email + " " + email.length
    );
    email = document.getElementById("inputEmail").value;
    document.querySelector("#inputEmail").focus;
  }
});

//

let inputAssunto = document.querySelector("#inputAssunto");
inputAssunto.addEventListener("focus", (evt) => {
  evt.preventDefault();
  console.log("Evento input Assunto disparado ONFOCUS");
});

inputAssunto.addEventListener("blur", (evt) => {
  evt.preventDefault();
  assunto = document.getElementById("inputEmail").value;
  if (assunto.length < 1 || assunto.length > 50) {
    console.log("Error: input Assunto disparado ONBLUR " + assunto);
    document.querySelector("#inputAssunto").focus;
  } else {
    console.log(
      "Evento input Assunto disparado ONBLUR " + assunto + " " + assunto.length
    );
    assunto = document.getElementById("inputAssunto").value;
    document.querySelector("#inputAssunto").focus;
  }
});

//

let inputMensagem = document.querySelector("#inputMensagem");
inputMensagem.addEventListener("focus", (evt) => {
  evt.preventDefault();
  console.log("Evento input Mensagem disparado ONFOCUS");
});

inputMensagem.addEventListener("blur", (evt) => {
  evt.preventDefault();
  mensagem = document.getElementById("inputMensagem").value;
  if (mensagem.length < 1 || mensagem.length > 50) {
    console.log("Error: input Mensagem disparado ONBLUR " + mensagem);
    document.querySelector("#inputMensagem").focus;
  } else {
    console.log(
      "Evento input Mensagem disparado ONBLUR " +
        mensagem +
        " " +
        mensagem.length
    );
    mensagem = document.getElementById("inputMensagem").value;
    document.querySelector("#inputMensagem").focus;
  }
  enableButton();
});

function enableButton() {
  document.getElementById("inputName").value = nome;
  document.getElementById("inputEmail").value = email;
  document.getElementById("inputAssunto").value = assunto;
  document.getElementById("inputMensagem").value = mensagem;
  if (nome.length < 1 || nome.length > 50) {
    boo = false;
    alert(
      "Error: Digite um valor valido para o campo Nome até 50 carracteres."
    );
    bt = document.querySelector("#submitButton");
    bt.disabled = false;
  }
  if (email.indexOf("@") == -1) {
    boo = false;
    alert("Error: Digite um valor valido para o campo Email.");
    bt = document.querySelector("#submitButton");
    bt.disabled = false;
  }
  if (email.length < 6 || email.length > 50) {
    boo = false;
    alert(
      "Error: Digite um valor valido para o campo Email até 50 carracteres."
    );
    bt = document.querySelector("#submitButton");
    bt.disabled = false;
  }
  if (assunto.length < 1 || assunto.length > 50) {
    bt.disabled = false;
    alert(
      "Error: Digite um valor valido para o campo Assunto até 50 carracteres."
    );
    bt = document.querySelector("#submitButton");
    bt.disabled = false;
  }
  if (mensagem.length < 1 || mensagem.length > 300) {
    boo = false;
    alert(
      "Error: Digite um valor valido para o campo Mensagem até 300 carracteres."
    );
    bt = document.querySelector("#submitButton");
    bt.disabled = false;
  }
  if (boo) {
    bt = document.querySelector("#submitButton");
    bt.disabled = false;
  }
}
