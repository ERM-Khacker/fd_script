'use strict';

const driver1 = {
  name: 'Marina Testovna',
  age: 20,
  driverExp: 9,
};

const driver2 = {
  name: 'Test Testovich',
  age: 30,
  driverExp: 5,
};

const car = {
  go() {
    return `Водитель ${this.name} сейчас едет`;
  },
};

driver1.__proto__ = car; // устанавливаем prototype для обычных объектов
driver2.__proto__ = car; // устанавливаем prototype для обычных объектов

/* 
Функцию конструктор:
ladder  - лестница
  
value - ступенька на которой вы стоите
up() - вы поднимаетесь на одну ступеньку
down() - вы опускаетесь на одну ступеньку
showStep() - вы смотрите на какой вы ступеньке

const l1 = new Ladder();
l1.up().up().up().down().showStep(); //задание

*/

function Ladder() {
  this.value = 0;

  this.up = function up() {
    this.value++;
    return this;
  };

  this.down = function down() {
    this.value--;
    return this;
  };

  this.showStep = function showStep() {
    return this.value;
  };
}

const l1 = new Ladder();

console.log(l1.up().up().up().value);
l1.up();

/*
Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
 */

function getMinAndMaxNumbers(arr) {
  return [getMinValue(arr), getMaxValue(arr)];
}

function getMinValue(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function getMaxValue(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
