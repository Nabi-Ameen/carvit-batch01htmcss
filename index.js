// let person = {
//   firstName: "majid",
//   lastName: "Khan",
//   contactNo: "092308097562",
//   age: 30,
//   address: {
//     address1: "office address",
//     address2: "home address",
//   },
// };

// delete person.firstName;
// person.nationality = "Pakistani";
// console.log(person);

// console.log(person.address);
// console.log(person);
// window.alert();
// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let numbers = [10, 20, 30, 40, 50, 60, 70];

// let names = ["ali", "amjad", "uzair"];
// for (let index = 0; index <= names.length - 1; index++) {
//   debugger;
//   console.log(names[index]);
// }

// function sum(num1, num2, num3) {
//   let result = num1 + num2 + num3;
//   return result;
// }

// console.log("outside function", sum(10, 20, 30));
// console.log("outside function", sum(100, 200, 300));

// arrow function syntax
// const multiply = (num1, num2) => {
//   let result = num1 * num2;
//   return result;
// };
// multiply(10, 20);

// const marks = 40;
// if (marks > 40 && marks < 50) {
//   console.log("grade D");
// } else if (marks > 50 && marks < 60) {
//   console.log("grade C");
// } else if (marks > 60 && marks < 70) {
//   console.log("grade B");
// } else {
//   console.log("u r failed");
// }

// const checkElement = (numberArray) => {
//   for (let i = 0; i <= numberArray.length - 1; i++) {
//     if (i <= 5) {
//       console.log(numberArray[i]);
//     }
//   }
// };

// checkElement(numbers);
// let numbers2 = [11, 12, 13, 14, 15];
// numbers.pop(); delete last element;
// numbers.shift(); delete first Element;
// numbers.push(11); add element last index;
// numbers.unshift(0); add element first index;
// numbers.includes(6);
// console.log(numbers.slice(1, 5));
// let combineArray = numbers.concat(numbers2);

// let findElement = numbers.find((num) => num === 3);
// let filterElement = numbers.filter((num) => num < 6);
// let iterateNumbers = numbers.map((num, index) => num * 2);
// console.log(iterateNumbers);
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.splice(1, 0, 12, 13, 14, 15);

// console.log(numbers);

// const fruits = [
//   { name: "apple", color: "red" },
//   { name: "peaches", color: "red" },
//   { name: "plum", color: "black" },
//   { name: "banana", color: "yellow" },
// ];

// const updateArray = fruits.map((fruit) => ({
//   fruitName: fruit.name.toUpperCase(),
//   fruitColor: fruit.color.toLowerCase(),
// }));

// console.log(updateArray);

// const student = [
//   { name: "ameen", address: "abcd", age: 30 },
//   { name: "ali", address: "peshawar", age: 30 },
//   { name: "majid", address: "nowshehra", age: 30 },
//   { name: "uzair", address: "karchi", age: 30 },
// ];

// objec destructure
// const student = { stdName: "wajid", stdAdrees: "peshawar", stdAge: 30 };
// const { stdName, stdAdrees } = student;
// console.log(stdName);

// array destructure
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [num1, num2, num3] = numbers;
// console.log(num2);

// let [num1, num2, ...remainingElement] = [...numbers];
// console.log(num1, num2, remainingElement);

// let numbers = [1, 2, 3];

// console.log(...numbers);

// const multifly = (num1, num2, num3) => {
//   return num1 * num2 * num3;
// };

// console.log(multifly(...numbers));
// const colors = ["yellow", "black", "green"];
// const colors2 = ["gray", "cyan", "lightgray"];

// DOM stands for Document object model

// let paraghraph = document.querySelectorAll("p");
// console.log(paraghraph);

// let btn = document.querySelector("#btn");
// function showAlert() {
//     window.alert("hello world");
// }
// btn.addEventListener("click", showAlert);

// console.log(btn);

function changColor() {
  let paraghrap = document.querySelector("#text");
  paraghrap.style.backgroundColor = "red";
}

let changeColor = document.querySelector("#changColor");
changeColor.addEventListener("click", changColor);
