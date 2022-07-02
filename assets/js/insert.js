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
});

inputName.addEventListener("blur", (evt) => {
  evt.preventDefault();
  nome = document.getElementById("inputName").value;
  if (nome.length < 1 || nome.length > 50) {
    document.querySelector("#inputName").focus;
  } else {
    nome = document.getElementById("inputName").value;
    boo = true;
    document.querySelector("#inputEmail").focus;
  }
});

//

let inputEmail = document.querySelector("#inputEmail");
inputEmail.addEventListener("focus", (evt) => {
  evt.preventDefault();
});

inputEmail.addEventListener("blur", (evt) => {
  evt.preventDefault();
  email = document.getElementById("inputEmail").value;
  if (email.length < 1 || email.length > 50) {
    document.querySelector("#inputEmail").focus;
  } else {
    email = document.getElementById("inputEmail").value;
    document.querySelector("#inputEmail").focus;
  }
});

//

let inputAssunto = document.querySelector("#inputAssunto");
inputAssunto.addEventListener("focus", (evt) => {
  evt.preventDefault();
});

inputAssunto.addEventListener("blur", (evt) => {
  evt.preventDefault();
  assunto = document.getElementById("inputEmail").value;
  if (assunto.length < 1 || assunto.length > 50) {
    document.querySelector("#inputAssunto").focus;
  } else {
    assunto = document.getElementById("inputAssunto").value;
    document.querySelector("#inputAssunto").focus;
  }
});

//

let inputMensagem = document.querySelector("#inputMensagem");
inputMensagem.addEventListener("focus", (evt) => {
  evt.preventDefault();
});

inputMensagem.addEventListener("blur", (evt) => {
  evt.preventDefault();
  mensagem = document.getElementById("inputMensagem").value;
  if (mensagem.length < 1 || mensagem.length > 50) {
    document.querySelector("#inputMensagem").focus;
  } else {
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
