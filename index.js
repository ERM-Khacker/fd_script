const sum = function (a, b) {
  return a + b;
};
const subtraction = function (a, b) {
  return a - b;
};
const mul = function (a, b) {
  return a * b;
};
const division = function (a, b) {
  return a / b;
};

const calculate = function (a, b, sign) {
  const check = a - b;
  if (isNaN(check)) {
    return null;
  }
  let f;
  switch (sign) {
    case '/': {
      f = division;
      break;
    }
    case '*': {
      f = mul;
      break;
    }
    case '-': {
      f = subtraction;
      break;
    }
    case '+': {
      f = sum;
      break;
    }
    default: {
      return null;
    }
  }
  return f(a, b);
};

const userInput1 = +prompt('введите 1 число');
const userInput2 = +prompt('введите 2 число');
const operation = prompt('Введите знак операции');

const result = calculate(userInput1, userInput2, operation);

console.log(result);
