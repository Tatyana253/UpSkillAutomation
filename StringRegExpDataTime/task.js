//task1
const str = 'ahb acb aeb aeeb adcb axeb';
const regex = /a.b/g;
const matches = str.match(regex);
console.log(matches); // ['ahb', 'acb', 'aeb']

//task2
const strTwo = '2+3 223 2223';
const regexTwo = /2\+3/;
const matchesTwo = strTwo.match(regexTwo);
console.log(matchesTwo);

//task3
const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

console.log(`Сегодняшняя дата: ${day}.${month}.${year}`);
console.log(`День: ${day}`);
console.log(`Месяц: ${month}`);
console.log(`Год: ${year}`);
