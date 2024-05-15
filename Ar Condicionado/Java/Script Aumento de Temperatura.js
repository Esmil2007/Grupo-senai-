let temperatura = 0; // Temperatura inicial

function aumentarTemperatura() {
  temperatura++;
  document.getElementById('temperatura').innerText = temperatura;
}

function diminuirTemperatura() {
  temperatura--;
  document.getElementById('temperatura').innerText = temperatura;
}