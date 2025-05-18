# Day 3 task complete!
___
 ## ✅  1. Odd or Even?
 - [ ] Take a number and find if the number is an odd or even number.
 - [ ] Print the number and result in the console.

> ## Solved!

```js
const num1 = 3;
const num2 = 6;
console.log(num1 % 2 === 0 ? num1 + "is" + "even" : "odd");
console.log(num2 % 2 === 0 ? "even" : "odd");

```

___

## ✅ 2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

- [ ] Manage `age` as a variable.
- [ ] Check if the age is elligible for a driving license and print it on the console accordingly.

> ## Solved!

```js
let age = 25;
let isEligibleForDriving = age >= 18? "Eligible for driving." : "NOT Eligible for driving.";
console.log(isEligibleForDriving);
```

___

## ✅ 3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.

- [ ] You get 12,300 rupees as your monthly salary.
- [ ] You get a 20% bonus on your annual salary.
- [ ] How much money do you make per annum as a CTC?

> ## Solved!

```js
const salary = 12300;
let bonusInPercentage = 20;
let annualSalary = salary * 12;
let CTC = annualSalary  + (annualSalary * (20/100))

console.log(CTC);
```

___

## ✅ 4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!

- [ ] Create a `color` variable.
- [ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

> ## Solved!

```js
let trafficSignal = "red";
let intructionForTravellers = trafficSignal === "red" ?  "STOP" : "GO"
console.log(intructionForTravellers);
```

___

## ✅  5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

- [ ] Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
- [ ] If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
- [ ] If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

> ## Solved!

```js
let units = 75;
let electricityBillPerMonth = units * 150;
let annualElectricityBill =  electricityBillPerMonth * 12;
let finalElectricityBill = annualElectricityBill - (annualElectricityBill * (20/100));
console.log("You have to pay " + finalElectricityBill + " " + "rupees");
```
___

## ✅  6. Leap Year Checker
Is 2025 a Leap Year?

- [ ] Take `year` as input.
- [ ] Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

> ## Solved!

```js
let year = 2025;
let isLeapYear = (year % 4 === 0) ? "Leap year" : "Not a leap year";
console.log(isLeapYear);
```
___

## ✅  7. Max of Three Numbers
Find the max number from the lot.

- [ ] Take three numbers and assign them to variables p, q, and r.
- [ ] Now find the maximum of these three numbers using the comparison operators.

> ## Solved!

```js
const p = 6;
 const q = 2;
 const r = 9;
let z = (p > q && p > r) ? p 
        : (q > p && q > r) ? q 
        : (r > p &&  r > q) ? r 
        : "";
console.log(z)
```
___

## ✅ 8. Bitwise Doubling
A tricky one for you

- [ ] Create a variable `count` and assign  a value, say, 5.
- [ ] Now use the Bitwise shift operator to make the number double.
- [ ] Print it on the console.

> ## Solved!

```js
const count = 5; // 00000101
console.log(count << 1); // 00001010 => 10;
```