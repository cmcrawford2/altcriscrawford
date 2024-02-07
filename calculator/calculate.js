// Make sure the dom is loaded
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      handleButtonClick(buttonText);
    });
  });

  let operand = 0;
  let operation = "";
  let previousText = "";

  const display = document.getElementById("output");
  display.value = "0";

  function handleButtonClick(buttonText) {
    switch (buttonText) {
      case "+":
      case "-":
      case "/":
      case "x":
        if (operator(previousText)) {
          // Just overwrite
          operation = buttonText;
        } else if (operation === "") {
          operation = buttonText;
          operand = Number(display.value);
          display.value = "0";
          // Do not update textContent until the user types the next number.
        } else {
          operand = calculate_number(operand, Number(display.value), operation);
          operation = buttonText;
          display.value = "0";
          display.textContent = String(operand);
        }
        break;
      case "=":
        if (operation !== "") {
          operand = calculate_number(operand, Number(display.value), operation);
          operation = "";
          display.value = "0";
          display.textContent = String(operand);
        }
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (display.value === "0") {
          display.value = buttonText;
        } else {
          display.value += buttonText;
        }
        display.textContent = display.value;
        break;
      case "0":
        if (display.value !== "0") {
          display.value += buttonText;
          display.textContent = display.value;
        }
        break;
      case ".":
        const index = display.value.indexOf(".");
        if (index === -1) {
          display.value += buttonText;
          display.textContent = display.value;
        }
        break;
      case "DEL":
        if (display.value !== "0") {
          // We are deleting last digit of a value
          const newString = display.value.slice(0, -1);
          if (newString.length === 0) {
            display.value = "0";
          } else {
            display.value = newString;
          }
          // Update the display
          display.textContent = display.value;
        } else if (operand !== 0) {
          // We are deleting last digit of a result
          const oldString = String(operand);
          const newString = oldString.slice(0, -1);
          if (newString.length === 0) {
            operand = 0;
            display.value = "0";
          } else {
            operand = Number(newString);
            display.value = newString;
          }
          // Update the display
          display.textContent = display.value;
        }
        break;
      case "RESET":
        operand = 0;
        operation = "";
        display.value = "0";
        display.textContent = "0";
        break;
    }
    // We do this to check if user types two operands in a row.
    previousText = buttonText;
  }

  function operator(text) {
    return (
      text === "+" ||
      text === "-" ||
      text === "x" ||
      text === "/" ||
      text === "="
    );
  }

  function calculate_number(a, b, operation) {
    switch (operation) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "/":
        return a / b;
      case "x":
        return a * b;
    }
  }
});
