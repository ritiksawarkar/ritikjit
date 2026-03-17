let calculator = (a, b, operator) => {
  if (operator == "+") {
    return a + b;
  } else if (operator == "-") {
    return a - b;
  } else if (operator == "*") {
    return a * b;
  } else if (operator == "/") {
    return a / b;
  } else {
    return "provide proper arguments parameter";
  }
};

console.log(calculator(5, 3, "+"))