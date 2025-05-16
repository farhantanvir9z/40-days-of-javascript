# Day 2 Task Complete!
___
- ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
``` js
const name = "Rahul";
let age = 23;
let isStudent = true;
let favoriteProgrammingLanguage = "Javascript";
```
___
- ✅ Task 2: Print the values to the console.
```js
console.log(name);
console.log(age);
console.log(isStudent);
console.log(favoriteProgrammingLanguage);
```
___
- ✅ Task 3: Try reassigning values to let and const variables and observe errors.
```js
name = "Amit";  // error : TypeError for reassigning to a constant value.

age = 25; // no error
isStudent = false; // no error
```
___
- ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
```js
const user = {
  name : "Sumit",
  age  : 15,
  isStudent : true
};
const marks = [76, 55, 89, 90, 10, 15, 95];

user.isStudent = false; // no error

user = {}; // TypeError for reassigning to constant variable.
```