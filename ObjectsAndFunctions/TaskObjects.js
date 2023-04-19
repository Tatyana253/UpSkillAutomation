
  let car = {
    color: 'черный',
    power: function() {
      console.log('Мощность двигателя: 250 л.с.');
    }
  };
  car.color = 'зеленый';
  car.power();



let pears = 10;
let apples = 5;
function countFruits(pears, apples) {
    return pears + apples;
  }

let totalFruits = countFruits(pears, apples);
console.log(totalFruits);


function checkName(name) {
    let terminalName = 'Tatyana';
    if (name === terminalName) {
      console.log('Привет, ' + name + '!');
    } else {
      console.log('Нет такого имени!');
    }
  }

let myName = 'Tatyana';
checkName(myName);

let otherName = 'Anna';
checkName(otherName);


function checkType(arg) {
    console.log(typeof arg);
  }
let num = 123;
let str = 'hello';

checkType(123);


function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}