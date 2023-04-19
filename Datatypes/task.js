let bool = true;
let num = 5;
let str = "string";

//Выполнить сложение различных типов(string+boolean, string+number, number+boolean)

let sumA = str + bool;
console.log(sumA);
let sumB = str + num;
console.log(sumB);
let sumC = num + bool;
console.log(sumC);

//Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
let multA = str * bool;
console.log(multA);
let multB = str * num;
console.log(multB);
let multC = num * bool;
console.log(multC);

//Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

let divA = str / bool;
console.log(divA);
let divB = str / num;
console.log(divB);
let divC = num / bool;
console.log(divC);

//Выполнить явное преобразование(number, string, boolean)

let int = parseInt('22@@');
console.log(int);


let newNum = 10
let text = newNum.toString(2);
console.log(text);


let boolnew = true;
let textnew = boolnew.toString();
console.log(textnew);