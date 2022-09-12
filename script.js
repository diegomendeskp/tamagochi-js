var fome = 100;
var banho = 100;
var sleep = 100;
var happy = 100;
var conv = 100;

function loop(time = 2) {
  var total = fome + banho + sleep + happy + conv;

  if (
    fome <= 0 ||
    banho <= 0 ||
    sleep <= 0 ||
    happy <= 0 ||
    conv <= 0
  ) {
    document.getElementById('pet').src = 'img/preto.jpg';
    document.getElementById('pet').innerHTML =
      'Você deixou seu pet MORRER!';
    time = 0;
  } else if (total > 400) {
    document.getElementById('pet').src = 'img/azul.jpg';
  } else if (total > 300) {
    document.getElementById('pet').src = 'img/verde.jpg';
  } else if (total > 200) {
    document.getElementById('pet').src = 'img/cinza.jpg';
  } else if (total > 100) {
    document.getElementById('pet').src = 'img/amarelo.jpg';
  } else if (total > 50) {
    document.getElementById('pet').src = 'img/vermelho.jpg';
  }

  fome = fome - parseInt(time);
  banho = banho - parseInt(time);
  sleep = sleep - parseInt(time);
  happy = happy - parseInt(time);
  conv = conv - parseInt(time);

  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('banho').innerHTML = banho + '%';
  document.getElementById('sleep').innerHTML = sleep + '%';
  document.getElementById('happy').innerHTML = happy + '%';
  document.getElementById('conv').innerHTML = conv + '%';
}

function Start() {
  var temporizador = setInterval(loop, 1000);
}
function Comer() {
  fome = 100;
  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('fome').style.width = fome + 'px';
}
function Higiene() {
  banho = 100;
  document.getElementById('banho').innerHTML = banho + '%';
  document.getElementById('banho').style.width = banho + 'px';
}
function Dormir() {
  sleep = 100;
  document.getElementById('sleep').innerHTML = sleep + '%';
  document.getElementById('sleep').style.width = sleep + 'px';
}
function Brincar() {
  happy = 100;
  document.getElementById('happy').innerHTML = happy + '%';
  document.getElementById('happy').style.width = happy + 'px';
}
function Conv() {
  conv = 100;
  document.getElementById('conv').innerHTML = conv + '%';
  document.getElementById('conv').style.width = conv + 'px';
}
Start();
