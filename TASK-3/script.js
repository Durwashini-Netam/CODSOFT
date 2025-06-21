 const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
display.addEventListener("keydown", function (e) {
  e.preventDefault();
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "AC") {
      display.value = "";
    } else if (value === "DE") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      
      const lastChar = display.value.slice(-1);
      const operators = ["+", "-", "*", "/", "."];
      if (operators.includes(lastChar) && operators.includes(value)) {
        return;
      }

      display.value += value;
    }
  });
});
