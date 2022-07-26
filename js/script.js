const one = document.getElementById("one"),
  two = document.getElementById("two"),
  three = document.getElementById("three"),
  four = document.getElementById("four"),
  five = document.getElementById("five"),
  six = document.getElementById("six"),
  seven = document.getElementById("seven"),
  eight = document.getElementById("eight"),
  nine = document.getElementById("nine"),
  zero = document.getElementById("zero"),
  plus = document.getElementById("plus"),
  minus = document.getElementById("minus"),
  multiply = document.getElementById("multiply"),
  divide = document.getElementById("divide"),
  equal = document.getElementById("equal"),
  clearAll = document.getElementById("clear_all"),
  dot = document.getElementById("dot"),
  display = document.getElementById("display"),
  clear = document.getElementById("clear"),
  percent = document.getElementById("percent"),
  sqrt = document.getElementById("sqrt"),
  errorMsg = document.querySelector(".error-message"),
  buttons = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    zero,
    plus,
    minus,
    multiply,
    divide,
    equal,
    clearAll,
    dot,
    clear,
    percent,
    sqrt,
  ];

const getDisplayValue = (parse = false) => {
  return parse ? parseInt(display.value) : display.value;
};

const setDisplayValue = (value) => {
  display.value = value;
};

const compute = (value) => {
  try {
    let result = eval(value);
    setDisplayValue(result);
  } catch (e) {
    errorMsg.innerText = e;
    setTimeout(() => {
      errorMsg.innerText = "";
    }, 3000);
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = getDisplayValue();
    switch (e.target.id) {
      case "clear_all":
        setDisplayValue("");
        break;
      case "clear":
        setDisplayValue(value.slice(0, -1));
        break;
      case "percent":
        setDisplayValue(value / 100);
        break;
      case "sqrt":
        setDisplayValue(Math.sqrt(value));
        break;
      case "equal":
        compute(value);
        break;
      case "plus":
      case "minus":
      case "multiply":
      case "divide":
        if (!isFinite(value[value.length - 1])) {
          return;
        } else {
          setDisplayValue(value + e.target.innerText);
        }
        break;
      default:
        setDisplayValue(value + e.target.innerText);
    }
  });
});
