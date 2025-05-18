# Day 4 Tasks complete!


## ✅  1. What will be the output of this code snippet and why?

 ```js
 let day = "Monday";

switch (day) {
    case "monday":
        console.log("It's the start of the week."); 
        // it will not be executed because day = "Monday" (with Capital letter) and the case is "monday" (with small letter)
        break;
    default:
        console.log("It's a normal day.");
        // It will be executed. by default
}
```
> ### The output will be...

```txt
It's a normal day.
```
_**Because, the case is `monday` (with small letter) but day = `Monday` (with Capital letter). First case does not match and so the default is executed. which is `It's a normal day.`**_
____
<br />

## ✅ 2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

> ### Solved!

```js
let amount = 300;
if (amount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}
```
___

<br />

## ✅  3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
> ### Solved!

```js
let num1 = 5;
let num2 = 2;
let operator = "/";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "%":
    console.log(num1 % num2);
    break;
  default : console.error("Invalid operator.");
}

```
___
<br />

## ✅  4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:
- Children (<18 years): $3
- Adults (18 - 60 years): $10
- Seniors (60+ years): $8

Write a program that prints the ticket price based on the person’s age.

> ### Solved!

```js
let age = 70;
let ticketPrice;
if (age < 18) {
  ticketPrice = 3;
} else if (age >= 18 && age <= 60) {
  ticketPrice = 10;
} else {
  ticketPrice = 8;
};
console.log(ticketPrice);
```

___

<br />

<br />

## ✅ 5. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:
- All sides equal is called, `Equilateral Triangle`.
- Two sides equal is called, `Isosceles Triangle`.
- All sides different is called, `Scalene Triangle`.

Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

> ### Solved!

```js
const side1 = 5;
const side2 = 4;
const side3 = 7;

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side2 || side1
=== side3 || side2 === side3) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
} 
```
