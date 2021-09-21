const profitInput = document.getElementById('profit-input');
const calcBtn = document.getElementById('calc-btn');
const profitOutput = document.getElementById('total-output');

function calcIRPF() {
  const tax = 0.19;
  const profitInt = parseInt(profitInput.value, 10);
  const calculo = profitInt * tax;
  if (profitInput.value.trim() === '' || profitInt < 0) {
    profitInput.value = 0
    profitOutput.innerHTML = 'Insira um valor valido';
  } else {
    profitOutput.innerHTML = `Total a Pagar: R$ ${calculo.toFixed(2)}`;
  }
}

calcBtn.addEventListener('click', calcIRPF);