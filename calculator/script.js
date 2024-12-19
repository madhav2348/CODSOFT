function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  function backspace() {
    const screen = document.getElementById("result");
    screen.value = screen.value.slice(0, -1);
  }
  
  function calculate() {
    const screen = document.getElementById("result");
    try {
      screen.value = eval(screen.value);
    } catch {
      screen.value = "Error";
    }
  }
  