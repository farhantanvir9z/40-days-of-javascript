# Day 11 Tasks complete!

## 1. What will be the output of the following code and why?

```js
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
```

### Answer is :

The output is

```sh
1
2
```

#### **Because**

When `outer` function is called, it returns the `inner` function which is stored in `counter` variable.
Then while The `counter()` is called, the `inner()` function will be executed.
As it is a `clouser` it can remember the variable's latest value which is declared in it's outer function.
**So**, When `counter()` is called first the value of count will be **1**. Again when it is called, the value will be incremented and become **2**

## 2. What will be the output and why?

```js
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());
```

### The output will be :

```sh
100
```

**Because,**
When `testClosure()` is called it returns a function which square the value of `x` and return the value.
Then while the anonymous function is called through `testClosure()()` as it is clouser it remembers the outer function's variable and square the value and return it.

## 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

### Solved!

```js
const button = document.getElementById("button");

function countClicks() {
    let count = 0;
    button.addEventListener("click", function () {
        count++;
        console.log(`The button is clicked ${count} time(s)`);
    });
}
countClicks();
```

## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.

### Solved!

```js
function createMultiplier(multiplier) {
  let num = 4;
  return function () {
    num *= multiplier;
    console.log(num);
  }
}
const retFunc = createMultiplier(3);
retFunc(); // 12
retFunc(); // 36
```

## 5. What happens if a closure references an object?

1. The object is garbage collected    immediately
2. The object remains in memory as    long as the closure exists
3. The object is automatically       cloned
4. None of the Above.

### Answer is : 

**2. The object remains in memory as long as the closure exists**

## 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functions.

### Solved!
```js
function counter() {
  let count = 0;
  return {
    increment: function(x) {
     count += x;
     console.log(count);
   },
     decrement: function(y) {
     count -= y;
     console.log(count);
   },
     reset: function() {
     count = 0;
     console.log(count);
   }
  }
}

const retCount = counter();
console.log(retCount);
retCount.increment(500);
retCount.decrement(200);
retCount.reset();
```