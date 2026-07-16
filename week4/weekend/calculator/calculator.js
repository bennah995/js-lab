// calculator.js

// --- DOM Element References ---

const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const operatorButtons = document.querySelectorAll('button[data-op]');
const resultDisplay = document.getElementById('result');
const clearBtn = document.getElementById('clear-btn');
const historyList = document.getElementById('history');
const themeToggle = document.getElementById('theme-toggle');

// Tracks the operator symbol used most recently, for Enter-key support
let lastOperator = null;

// --- Pure Logic Function ---

function calculate(a, operator, b) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/':
      if (b === 0) return 'Error: Cannot divide by zero';
      return a / b;
    default:
      return 'Error: Unknown operator';
  }
}

// --- Display Helper ---

function displayResult(message, isError = false) {
  resultDisplay.textContent = message;
  resultDisplay.classList.toggle('error', isError);
}

// --- History Helper (C) ---

function addHistoryEntry(a, operator, b, result) {
  const li = document.createElement('li');
  const symbol = operator === '*' ? 'x' : operator;
  li.textContent = `${a} ${symbol} ${b} = ${result}`;
  historyList.appendChild(li);
}

// --- Core Calculation Runner ---
// Shared by button clicks and the Enter key so the logic lives in one place.

function runCalculation(operator) {
  const raw1 = input1.value.trim();
  const raw2 = input2.value.trim();

  if (raw1 === '' || raw2 === '') {
    displayResult('Please fill in both number fields', true);
    return;
  }

  const a = Number(raw1);
  const b = Number(raw2);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    displayResult('Please enter valid numbers only', true);
    return;
  }

  const result = calculate(a, operator, b);
  const isError = typeof result === 'string';
  displayResult(result, isError);

  if (!isError) {
    addHistoryEntry(a, operator, b, result);   // C: history log
    input1.value = result;                     // D: chain results
    input2.value = '';
  }

  lastOperator = operator;
}

// --- Event Handlers ---

function handleOperatorClick(event) {
  runCalculation(event.target.dataset.op);
}

// A: Clear button
function handleClear() {
  input1.value = '';
  input2.value = '';
  displayResult('');
}

// B: Enter key support
function handleKeydown(event) {
  if (event.key === 'Enter' && lastOperator) {
    runCalculation(lastOperator);
  }
}

// E: Light/dark mode toggle
function handleThemeToggle() {
  const isDark = document.body.classList.toggle('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
}

// --- Attach Listeners ---

operatorButtons.forEach(button => button.addEventListener('click', handleOperatorClick));
clearBtn.addEventListener('click', handleClear);
input1.addEventListener('keydown', handleKeydown);
input2.addEventListener('keydown', handleKeydown);
themeToggle.addEventListener('click', handleThemeToggle);