# Day 09 Tasks complete!

## 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

```js
{
   console.log(x); //Error because it is in TDZ
  
   console.log(y); // Error because it is in TDZ
  
  let x = "hero";
  
  console.log(x); // Accessible because it is not in TDZ
  
  console.log(z) // Error because z is in TDZ
  
  const y = 20;
  
  console.log(y); //Accessible because it is not in TDZ
  
  const z = null;
  
}
````

## 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

> ***`Hoisting`*** in js means the memory allocation for variables and Functions in the creation phase of Execution context.

```js
console.log(x); // Undefined

greeting("Farhan"); // executed without any ReferenceError!

var x = 54;

console.log(x); // 54

function greeting(name = "Friend"){
  console.log(`Hello ${name}, Hope you are enjoying 40 days of javascript!`)
};
```