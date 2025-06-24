const display = document.getElementById("display");

// Append a character to the display
function appendToDisplay(value) {
  if (display.value === "0") {
    
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearAll() {
    display.value = "0"
}

function removeTheLast() {
     display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
  try {
    display.value = eval(
      display.value
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
    );
  } catch {
    display.value = "Error";
  }
}


document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9+\-*/.]/.test(key)) {
    appendToDisplay(key);
  }

  if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  }

  if (key === "Backspace") {
    deleteLast();
  }

  if (key === "Escape") {
    clearDisplay();
  }
});
