// 1. Select the elements
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// 2. Simple global tracking variables (No state object)
let firstNum = "";
let currentOperator = "";
let secondNum = "";

// 3. Loop through every button
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    
    // Get the text written on the button (e.g., "7", "+", "C")
    const buttonText = button.innerText;

    // IF CLEAR BUTTON IS CLICKED
    if (buttonText === "C") {
      firstNum = "";
      currentOperator = "";
      secondNum = "";
      display.value = "0";
    }
    
    // IF EQUALS BUTTON IS CLICKED
    else if (buttonText === "=") {
      // Convert our stored strings into real mathematical numbers
      const num1 = parseFloat(firstNum);
      const num2 = parseFloat(secondNum);
      let result = 0;

      // Check which math operation to run
      if (currentOperator === "+") { result = num1 + num2; }
      if (currentOperator === "-") { result = num1 - num2; }
      if (currentOperator === "*") { result = num1 * num2; }
      if (currentOperator === "/") { result = num1 / num2; }

      // Show the answer and reset variables for the next calculation
      display.value = result;
      firstNum = result.toString(); 
      secondNum = "";
      currentOperator = "";
    }
    
    // IF OPERATOR BUTTONS ARE CLICKED (+, -, *, /)
    else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
      if (firstNum !== "") {
        currentOperator = buttonText;
      }
    }
    
    // IF NUMBER BUTTONS ARE CLICKED (0-9)
    else {
      // If we haven't picked an operator yet, we are still building the first number
      if (currentOperator === "") {
        firstNum = firstNum + buttonText;
        display.value = firstNum;
      } 
      // If an operator exists, we are now building the second number
      else {
        secondNum = secondNum + buttonText;
        display.value = secondNum;
      }
    }

  });
});
