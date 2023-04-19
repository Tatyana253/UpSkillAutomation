//task1
let movies = ["movie1", "movie2", "movie3", "movie4", "movie5"];

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}
//task2
let carBrands = ["BMW", "Audi", "Mercedes-Benz", "Toyota"];

let carBrandsStr = carBrands.toString();
console.log(carBrandsStr);


let carBrandsArr = carBrandsStr.split(",");
console.log(carBrandsArr);

//task3
let names = ["Анна", "Петр", "Ольга", "Денис"];

let newNames = names.map(function(name) {
  return "hello " + name;
});

console.log(newNames);

//task4
let numbers = [1, 0, 3, -1, 5];

let booleans = numbers.map(function(number) {
  return Boolean(number);
});

console.log(booleans);

//task5
let arrFive = [1, 6, 7, 8, 3, 4, 5, 6];
arr.sort(function(a, b) {
  return b - a;
});
console.log(arr);

//task6
let arrSix = [1, 6, 7, 8, 3, 4, 5, 6];
let filteredArr = arr.filter(function(num) {
  return num > 3;
});
console.log(filteredArr);

//task7
function findIndex(arr, num) {
  let index = arr.indexOf(num);
  if (index === -1) {
    console.log(`Элемент с числом ${num} не найден в массиве`);
  } else {
    console.log(`Индекс элемента с числом ${num} в массиве: ${index}`);
  }
}


let arr = [1, 5, 7, 2, 9];
findIndex(arr, 7);
findIndex(arr, 3);

//task8
let a = 20;
while (a >= 10) {
  console.log(a);
  a--;
}

//task9
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return console.log(num);;
}

//task10
let num = 10
for (let i = 1; i <= num; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
