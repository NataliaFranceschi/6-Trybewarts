const inputEmail = document.getElementsByTagName('input')[0];
const inputPassword = document.getElementsByTagName('input')[1];
const buttonEntrar = document.getElementsByTagName('button')[0];

function alerta() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } if (inputEmail.value !== 'tryber@teste.com' || inputPassword.value !== '123456') {
    alert('Email ou senha inválidos.');
  }
}

buttonEntrar.addEventListener('click', alerta);