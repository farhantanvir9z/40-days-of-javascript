# Tasks Complete!

How to Approach These Assignments

- Read the Code: Understand what it’s trying to do.
- Run the Code: See what’s printed in the console (and what’s not!).
- Debug: Use console.log(), DevTools, breakpoints, or visual stepping.
- Fix: Carefully apply knowledge of scope, async, closures, or object handling.
- Refactor: Bonus points for writing cleaner, modern code.

## 1. Closure Confusion

```js
function makeMultipliers() {
  const result = [];
  for (var i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2));  // Expected: 2 * 1 = 2
console.log(triple(2));  // Expected: 2 * 2 = 4
console.log(quadruple(2)); // Expected: 2 * 3 = 6
```

## Fix:

```js
function makeMultipliers() {
  const result = [];
  for (let i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2));  // Expected: 2 * 1 = 2
console.log(triple(2));  // Expected: 2 * 2 = 4
console.log(quadruple(2)); // Expected: 2 * 3 = 6

```

## 2. Async Bug with setTimeout in Loop

```js
for (let i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log("Count:", i);
  }, 1000);
}
```

- Goal: This actually works fine because of let. But refactor it to use var instead, and now fix the broken version with var.

## Fix: 

```js
function printCount(i) {
  setTimeout(function () {
    console.log("Count:", i);
  }, 1000);
} 
// wrapping var to functional scope
function wrapper() {
  for (var i = 0; i <= 3; i++) {
  // calling function that is outside the scope
  printCount(i);
}
}

wrapper();
```
## 3. Object Mutation Trap

```js
const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  config = { ...config, ...newConfig };
}

updateConfig({ version: "2.0" });
```

- Error: Assignment to constant variable.
- Goal: Fix the error without changing const to let, and apply a clean way to update nested configs.

## Fix:

```js
const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  Object.assign(config, newConfig)
}

updateConfig({ version: "2.0" });

console.log(config);

```
## 4. Promise Chain Gone Wrong

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  const data = fetchData()
    .then(res => {
      console.log("Then block:", res);
      throw new Error("Something went wrong!");
    });

  console.log("Data:", await data);
}

start();
```

- Issue: Error isn’t caught properly. Unhandled rejection occurs.
- Goal: Catch the error properly using try/catch with await pattern.


## Fix:

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  try {
    const data = await fetchData();
    console.log("Data:", data);
    throw new Error("Something went wrong!");
  } catch(err) {
    console.error("err:", err.message)
  }
}

start();
```