const inputEmail = document.getElementsByTagName('input')[0];
const inputPassword = document.getElementsByTagName('input')[1];
const buttonEntrar = document.getElementsByTagName('button')[0];
const buttonEnviar = document.getElementsByTagName('button')[1];
const inputCheckbox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const span = document.getElementById('counter');
const formulario = document.getElementById('evaluation-form');
const p = document.getElementsByTagName('p');

function alerta() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } alert('Email ou senha inválidos.');
}

buttonEntrar.addEventListener('click', alerta);

function desabilitar() {
  if (inputCheckbox.value === 'on') {
    buttonEnviar.disabled = false;
  }
}
inputCheckbox.addEventListener('click', desabilitar);

function contar() {
  span.innerHTML = (500 - textarea.value.split('').length);
}
textarea.addEventListener('keyup', contar);

function criarP() {
  for (let i = 0; i < 7; i += 1) {
    const elementoP = document.createElement('p');
    document.getElementById('form-data').appendChild(elementoP);
  }
}

const materias = [];
function subjects() {
  const subject = document.querySelectorAll('input[class = "subject"]:checked');
  for (let i = 0; i < subject.length; i += 1) {
    materias.push(subject[i].value);
  } p[4].innerHTML = `Matérias: ${materias.join(', ')}`;
}

function nome() {
  const valorNome = document.getElementById('input-name').value;
  const valorSobrenome = document.getElementById('input-lastname').value;
  p[0].innerHTML = `Nome: ${valorNome} ${valorSobrenome}`;
}

function email() {
  const valorEmail = document.getElementById('input-email').value;
  p[1].innerHTML = `Email: ${valorEmail}`;
}
function casa() {
  const valorCasa = document.getElementById('house').value;
  p[2].innerHTML = `Casa: ${valorCasa}`;
}

function familia() {
  const valorFamilia = document.querySelector('input[name="family"]:checked').value;
  p[3].innerHTML = `Família: ${valorFamilia}`;
}

function avaliacao() {
  const valorAvaliacao = document.querySelector('input[name="rate"]:checked').value;
  p[5].innerHTML = `Avaliação: ${valorAvaliacao}`;
}

function observacoes() {
  p[6].innerHTML = `Observações: ${textarea.value}`;
}

function respostas(event) {
  event.preventDefault();
  formulario.style.display = 'none';
  criarP();
  nome();
  email();
  casa();
  familia();
  subjects();
  avaliacao();
  observacoes();
}

buttonEnviar.addEventListener('click', respostas);
