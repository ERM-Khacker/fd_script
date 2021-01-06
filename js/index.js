'use strict';

function countDown(startValue) {
  console.log(startValue);

  if (startValue > 0) {
    countDown(startValue - 1); // рекурсия
  }

  return true; // база
}

function power(num, exp) {
  debugger;
  if (exp === 1) {
    return num;
  }

  return num * power(num, exp - 1);
}

/* Залогировать все числа от 1 до N */

function logNum(n) {
  if (n === 1) {
    return 1; //basis
  }
  return `${logNum(n - 1)} ${n}`;
}

/* Факториал числа */

function factorial(n) {
  if (n === 1) {
    return 1; // basis
  }

  return n * factorial(n - 1); //recursion
}

/*
  parenthsis(5);
 '((((()))))' 
 */

function par(n) {
  if (n === 1) {
    return '()';
  }
  return `(${par(n - 1)})`;
}

/*
Этапы рекурсии:
  1) Происходит рекурсивный вызов функций
  2) Доходим до базы
  3) Все в call stack заканчивают свою работу
*/
