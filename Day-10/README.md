# Day 10 Tasks complete!


## 1. What will be the output of the following code and why?
```js
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();
```

## Answer: The output is **`Bob`**

### Explanation:

When `outer()` is called, it executes the `outer` function. Inside it, the function `inner()` is defined, and a local variable `user` is initialized with the value **`"Bob"`**.

After that, `inner()` is invoked. Inside `inner()`, the statement `console.log(user)` is executed.

JavaScript follows **lexical scoping**, which means it looks for variables in the **nearest (closest) scope first**. Since `user` is defined inside `outer()`, it takes precedence over any `user` variable in the global scope.

 Therefore, the `user` inside `outer()` (i.e., `"Bob"`) is used, and the output becomes:

```txt
Bob
```

## 2. What is the mistake in the code below?
```js
let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);
```

### mistakes:
- It can be modified from anywhere in your program
- It Makes the code harder to debug and maintain
- It Creates hidden dependencies between functions


## 3. Create a function with a nested function and log a variable from the parent function.

## Done!

```javascript

function parent() {
  const outside = "I am coming from parent function."
  function nested() {
    console.log(outside)
  }
  nested()
}

parent(); // "I am coming from parent function"
```

## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

### Done!

```javascript

function printTo5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i)
  }
  
}
printTo5()

console.log(i);  // ReferenceError: i is not defined.
```

### Answer: 
No I cannot access the variable decleared inside a loop which is inside a function 

## 5. Write a function that tries to access a variable declared inside another function.

## Done!

```javascript

function anotherFunc() {
  let count = 9;
}
function access() {
  console.log(count--); 
}

access(); // ReferenceError: count is not defined

```
## 6. What will be the output and why?
```js
console.log(a);
let a = 10;
```

### Answer: The output will be a `ReferenceError: a cannot be accessible before initialization.`
#### because:
variable `a` is hoisted in (Global Execution context -> Execution Phase) But, it is defined with `let`, so it is now in TDZ (Temporal Dead Zone). Therefore, it cannot be accessible before initialization. it got a ReferenceError.

## 7. Where is the `age` variable accessible?
```js
function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age);
```

Options:
- A: In Global
- B: Only inside showAge
- C: It will cause an error
- D: None of the above

## Answer: B. Only inside showAge.

## 8. What will be the output and explain the output?
```javascript
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```

### Answer: The output will be `Hi`.
---

## Explanation

When `outer()` is called, the variable `message` inside `outer` is initialized with the value **`"Hi"`**.

After that, `inner()` is invoked. Inside `inner()`, the statement `console.log(message)` is executed.

There are **two variables named `message`**:

* one in the **global scope**
* another in the **local scope of `outer()`**

JavaScript uses **lexical scoping**, which means it always looks for a variable in the **closest scope first**. Since `message` exists in the local scope of `outer()`, it takes precedence over the global `message`.

### Therefore, the output will be:

```txt
Hi
```

---

## 9. What will be the output and why?
```js
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();
```
## Answer: The output will be `Inner`

## Explanation

When `outer()` is called, the variable `x` inside `outer` is initialized with the value **`"Outer"`**.

After that, when `inner()` is invoked. Inside `inner()`, the variable `x` inside `inner` is initialized with the value **`"inner"`**.
After That the statement `console.log(x)` is executed.

There are **three variables named `x`**:

- one in the **global scope**
- another in the **local scope of `outer()`**
- another in the **local scope of `inner()`**

JavaScript uses **lexical scoping**, which means it always looks for a variable in the **closest scope first**. Since `x` exists in the local scope of `inner()`, it takes precedence over the global `x` & local `x` of outer function.

### Therefore, the output will be:

```txt
Inner
```

---

## 10. What will be the output and why?
```javascript
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce(); // -1
reduce(); // -2

```

## Answer: The output will be `-1`, `-2`
## Explanation:
When We call `counter()`, it will return a increment function that will be stored in `reduce`.
After that, when we call `reduce()` it will do `count--`.
And It is initialized with 0
So, first `reduce()` prints:
```txt
-1
```
then second `reduce()` prints:
```txt
-2
```