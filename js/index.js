'use strict';
function UserProto() {
  this.getFullName = function getFullName() {
    return `${this.firstName} ${this.lastName}`;
  };
}
function User(firstName, lastName, email, age, isMale, isSubscribed = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
}
User.prototype = new UserProto();
function createRandomUsers(amount = 1) {
  const db = [];

  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Name${i + 1}`, // firstName
      `Surname${i + 1}`, //lastName
      `email${i + 1}@mail.com`, //email
      Math.ceil(Math.random() * 100), //age
      Math.random() > 0.5, // isMale
      Math.random() > 0.5 // isSubscribed
    );
    db.push(user);
  }
  return db;
}
const users = createRandomUsers(100);
/* Получить массив полных имён с помощью метода map */
const getNames = function (user) {
  return user.getFullName(); // Full Name
};

const userNames = users.map(getNames);

/* Получить массив совершеннолетних пользователей (filter) */

const adultUsers = users.filter(function (user) {
  return user.age >= ADULT_AGE;
});

/* 
  1.1 Зарандомить подписку для каждого пользователя.
  1.2Получить массив совершеннолетних пользователей 
женского пола.
  2.1 Добавить Почту для пользователей.
  2.2 Как 1.2, но только их почты.
*/
const adultWoman = users.filter(function (user) {
  return user.age >= ADULT_AGE && !user.isMale;
});

const adultWomanEmails = adultWoman.map(function (user) {
  return user.email;
});

//ladder.up().up()

const mails = users
  .filter(function (user) {
    return user.age >= ADULT_AGE && !user.isMale;
  })
  .map(function (user) {
    return user.email;
  });
