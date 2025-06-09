# Day 13 task complete!

## 1. Create a table of two columns, `situation` and `value`. Now add the rows for every situations and the value of `this` in that situation. Please cover the following situations

-   At the Global
-   Inside an Object Method
-   Inside the Satandalone             non-Arrow Function
-   Inside an Arrow                    Function(standalone)
-   Inside an Arrow Function(as        object method)
-   Inside an object created with      the Constructor Function

Please add examples for each of the scenarios.

| situation | value |
| ---------- | ---------- | 
| At the Global | `Window` object | 
| Inside an Object Method | The Object  | 
| Inside the Satandalone             non-Arrow Function | `Window` Object |
| Inside an Arrow                    Function (standalone) | `Window` Object |
| Inside an Arrow Function(as object method) | the object's parent scope |
| Inside an object created with the Constructor Function | the object's instances |

# Examples
1. ## At the Global scope
```js
console.log(this); // window
```
2. ## Inside an Object Method
```js
const obj1 = {
  name: "java",
  printThis: () {
    console.log(this);
  };
};

obj1.printThis(); // obj1
``` 

3. ## Inside the Satandalone             non-Arrow Function
```js
function printThis() {
  console.log(this);
};
printThis(); // window
```
4. ## Inside an Arrow                    Function (stand alone)
```js
const printThis = () => {
  console.log(this);
};

printThis(); // window
``` 

4. ## Inside an Arrow Function(as        object method)
```js
const obj2 = {
  isAdmin : false,
  printThis : () => {
  console.log(this);
  };
};

obj2.printThis(); // window
```

5. ## Inside an object created with      the Constructor Function
```js
function Product(name, quantity) {
  this.name = name;
  this.quantity = quantity;
};
const product1 = new Product("shampoo", 200);
const product2 = new Product("soap", 200);
```
## 2. What is the problem here? Fix it to log the correct name and explain the fix

```js
const user = {
    name: "tapaScript",
    greet: () => {
        console.log(`Hello, ${this.name}!`);
    }
};

user.greet();
```

## Solved!

```js
const user = {
    name: "tapaScript",
    greet: function () {
        return () => {
            console.log(`Hello, ${this.name}!`);
        };
    }
};

const returnFn = user.greet();
returnFn();

```
### fix explanation
In an object if there is a method which is an `arrow function`, it refers to its parent's scope. which is `window object` which has a property named `name : ""` so `this.name` refers to `window.name` So, the output will be `"" (empty string)`. 
#### To solve this,
I canged the scope of the arrow function and return the function to its object property then store it in a variable and call the function.
___
<br />

## 3. Can you explain what is the problem here and fix the issue to log the correct name?

```js
const obj = {
    name: "Tom",
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    }
};

const greetFn = obj.greet;
greetFn();
```

## Solved!

```js
const obj = {
    name: "Tom",
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    }
};

const greetFn = obj.greet;
greetFn.call(obj);
```
### The problem is :
when I do `greetFn = obj.greet` it store only the function's reference.
later when I called this function, It is called like a `standalone function` not a method of `obj` object. So, generally, it refers to window object in non-strict mode.
**So**, `this.name` resolved to `window.name` which value is an empty string.

#### To solve this problem, 
I have to call the function in the context of `obj` object. So, I call the function using `call()` for explicit  binding.

___

<by />

## 4. What is the problem with the following code? Why isn't it logging the name correctly?

```js
const user = {
    name: "Alex",
    greet: function () {
        function inner() {
            console.log(`Hello, ${this.name}!`);
        }
        inner();
    }
};

user.greet();
```

> ## `Stand alone function` refers to the `window` object. function inside an object method is also a `stand alone function` so It also refers to the `window` object. it means `this.name` refers to `window.name` witch is `""` (empty string)

___

<br />

## 5. Create a `Sports` constructor function that takes `name` and `number of players` as arguments and assigns them using `this` keyword. Then, create two sports instances and log their details

### Solved!

```js
function Sports(name, players) {
  this.name = name;
  this.players = players;
}
const sport1 = new Sports("Soccer", 11);
for (let x in sport1) {
  console.log(sport1[x])
};
const sport2 = new Sports("cricket", 11);
for (let x in sport2) {
  console.log(sport2[x])
};

```
___
<br />

## 6. Can you attach the car1's `describe()` method to car2 object? Give all possible solutions that you can think of

```js
const car1 = {
    brand: "Audi",
    model: "A8",
    describe: function () {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    }
};

const car2 = {
    brand: "BMW",
    model: "X1"
};
```

### Solved!

```js

const car1 = {
    brand: "Audi",
    model: "A8",
    describe: function () {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    }
};

const car2 = {
    brand: "BMW",
    model: "X1"
};
// 1 st way
car2.describe = car1.describe;
car2.describe();

// 2nd way
car1.describe.call(car2);
// 3rd way
car1.describe.apply(car2);
// 4th way
const retFunc = car1.describe.bind(car2);
retFunc();

```
## 7. What will be the output of the following code and why?

```js
const person = {
    name: "Charlie",
    sayHello: function () {
        console.log(this.name);
    },
    sayHelloArrow: () => {
        console.log(this.name);
    }
};

person.sayHello();
person.sayHelloArrow();
```

Options are:

-   A: "Charlie" and "Charlie"
-   B: "Charlie" and undefined
-   C: "Charlie" and "" (empty string)
-   D: undefined and "Charlie"

### Answer is :
- **Option C** "Charlie" and "" (empty string)

### Because,

`Arrow function` has not its own `this`. **So,** in this case `this` refers to its parents scope. **Which is global scope**.
In `global scope` `this` refers to the `window` object. And `window` object has a property named `name` which value is `"" (empty string)`  **So**, the the output will be `"Charlie" and "" (empty string)`
