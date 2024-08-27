let person = {
  firstName: "majid",
  lastName: "Khan",
  contactNo: "092308097562",
  age: 30,
  address: {
    address1: "office address",
    address2: "home address",
  },
};

delete person.firstName;

person.nationality = "Pakistani";
console.log(person);

// console.log(person.address);

// console.log(person);

// window.alert();
