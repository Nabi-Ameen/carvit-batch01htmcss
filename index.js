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

function sum(num1, num2, num3) {
  let result = num1 + num2 + num3;
  return result;
}

// console.log("outside function", sum(10, 20, 30));
// console.log("outside function", sum(100, 200, 300));

// arrow function syntax
const multiply = (num1, num2) => {
  let result = num1 * num2;
  return result;
};
multiply(10, 20);

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

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const checkElement = (numberArray) => {
  for (let i = 0; i <= numberArray.length - 1; i++) {
    if (i <= 5) {
      console.log(numberArray[i]);
    }
  }
};

checkElement(numbers);
