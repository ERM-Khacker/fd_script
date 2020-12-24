'use strict';

//Создали объект кота
const cat1 = {
  color: 'black',
  breed: 'Spinx',
  age: 8,
  isMale: false,
  name: 'Kasya',
  meow: function () {
    // метод
    return 'MEOW!!!';
  },
  run: function () {
    return 'I AM RUNNING!';
  },
  jump: function () {
    return 'Jump!';
  },
};

const cat2 = {
  color: 'black',
  breed: 'Siamease',
  age: 6,
  isMale: true,
  name: 'Test',
  meow: function () {
    // метод
    return 'MEOW!!!';
  },
  run: function () {
    return 'I AM RUNNING!';
  },
  jump: function () {
    return 'Jump!';
  },
};

const cat3 = {
  color: 'black',
  breed: 'Spinx',
  age: 3,
  isMale: false,
  name: 'Testovich',
  meow: function () {
    // метод
    return 'MEOW!!!';
  },
  run: function () {
    return 'I AM RUNNING!';
  },
  jump: function () {
    return 'Jump!';
  },
};

function Cat(name, color, age, isMale, breed) {
  this.name = name;
  this.furColor = color;
  this.age = age;
  this.isMale = isMale;
  this.breed = breed;
}

const newCat1 = new Cat('Murzik', 'red', 5, true, 'Persian');
const newCat2 = new Cat('Test', 'white', 3, false, 'Spinx');
const newCat3 = new Cat('Testovich', 'brown', 2, true, 'Siamese');
const newCat4 = new Cat('Keks', 'red', 1, false, null);
const newCat5 = new Cat('Bernard', 'red', 5, true, 'Persian');
