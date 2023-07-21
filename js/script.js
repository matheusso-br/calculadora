//VÁRIÁVEIS DE ARMAZENAMENTO
let display = document.getElementById('display');
let currentInput = '';

//ADICIONA O VALOR DO BOTÃO AO DISPLAY
function appendToDisplay(value) {
  if (currentInput === '0') {
    currentInput = '';
  }
  currentInput += value;
  display.value = currentInput;
}

//APAGA TODOS OS NÚMEROS DO DISPLAY
function clearDisplay() {
  currentInput = '0';
  display.value = currentInput;
}

//DELETA OS NÚMEROS DO DISPLAY UM POR UM
function deleteLastChar() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === '') {
    currentInput = '0';
  }
  display.value = currentInput;
}

//REALIZA O CÁLCULO
function calculate() {
  try {
    let result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}

//ZERO PISCANDO NO DISPLAY
function blinkZero() {
  if (currentInput === '') {
    display.value = display.value === '0' ? '' : '0';
    setTimeout(blinkZero, 500); // INTERVALO EM QUE O ZERO PISCA: 500ms
  }
}

// CHAMA O ZERO NO DISPLAY
blinkZero();
