# Task complete!

## 1. What's the output of the code below?

```js
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

function f4() {
    console.log('f4');
}

console.log("Let's do it!");

setTimeout(function() {f1();}, 0);

f4();

setTimeout(function() {f2();}, 5000);

setTimeout(function() {f3();}, 3000);
```

Options are,

- Let's do it!, f4, f1, f3, f2
- Let's do it!, f1, f3, f2, f4
- Let's do it!, f1, f2, f3, f4
- Let's do it!, f1, f4, f2, f3

## Example Answer: Let's do it!, f4, f1, f3, f2

Explanation:

- "Let's do it!" is executed by Execution Stack
- f1() calls browser API, so gets added to Callback Queue
- f4() gets added to Execution Stack and is executed
- Event loop finds a callback function f1() in callback queue & executes it
- f2() calls browser API and gets added to Callback Queue. Similarly f3() is added to callback queue
- Now there is nothing in Execution Stack, so event loop checks & finds f2() & - f3() callback functions in callback queue
- f3() goes back into the stack after timeout, and gets executed
- f2() too goes back into the stack after timeout, and gets executed

## 2. What's the output of the code below?

```js
function f1() {
    console.log('f1');
}

console.log("Let's do it!");

setTimeout(function() {console.log('in settimeout');}, 0);

f1();
f1();
f1();
f1();
```

Options are,

- Let's do it!, in settimeout, f1, f1, f1, f1
- Let's do it!, f1, f1, f1, f1, in settimeout
- Let's do it!, f1, , in settimeout, f1, f1, f1

## Answer: Let's do it!, f1, f1, f1, f1, in settimeout

Explanation:

- "Let's do it!" is executed by Execution Stack
- "in settimeout" calls browser API, so gets added to Callback Queue.
- f1() is added to call Stack 4 times and executed one after one.
- every time `event loop` checks whether the `call stack` is empty or not.
- when it see that `call stack` is empty (after f1() got executed 4 ties) it checks and find a `callback function` in `callback queue` and pulls it to the `call stack` and finally "in settimeout" is got executed.

## 3. Which statements are `true`? Select multiple

- [ ] JavaScript is single-threaded
- [ ] By default, JavaScript is synchronous
- [ ] Only promises make JavaScript asynchronous
- [ ] All function callbacks are asynchronous

## Answer:
- [x] JavaScript is single-threaded
- [x] By default, JavaScript is synchronous.

## 4. Which statement is `true`? Select Only one

- (_) JavaScript Function Execution Stack(Call Stack) never gets empty.
- (_) The job queue gets higher priority than the callback queue.
- (_) The only job of Event Loop is to manage the Call Stack
- (_) The StackOverflow exception is random.

## Answer:
- (_) The job queue gets higher priority than the callback queue.


### 5. Guess the output

```js
const tom = () => console.log('Tom');

const jerry = () => console.log('Jerry');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 5000);

  new Promise((resolve, reject) =>
    resolve('should it be right after Tom, before Jerry?')
  ).then(resolve => console.log(resolve))

  jerry();
}

cartoon();
```

Options are,

- Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
- Cartoon, Tom, Jerry, should it be right after Tom, before Jerry?,
- Cartoon, Tom, should it be right after Tom, before Jerry?, Jerry
- Error

## Answer: 
Cartoon, Jerry, should it be right after Tom, before Jerry?, tom

### Explanation:
- Cartoon() is executed by Execution Stack
- then print "cartoon"
- then `tom()` call browser API and gets added in the `callback queue` 
- then `should it be right after Tom, before Jerry?` is in promise. so it get added in the `job queue`
- then `jerry()` is executed by call Stack 
- Everytime `event loop` checks whether the `callstack` is empty or not. 
- when it see the  `callstack` is empty, it checks in the `job queue` and finds a function and pull it into the `callstack` and execute it.
- then it see the callback function in the callback queue it pulls up the callbacks into the `callstack` and execute it.

### 6. Guess the output

```js
const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');
const doggy = () => console.log('Doggy');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 50);
  setTimeout(doggy, 30);

  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after tom and doggy! Really?')
  ).then(resolve => console.log(resolve));
  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  jerry();
}

cartoon();
```

Options are,

- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, , Tom, Doggy
- Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom
- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
- Cartoon, Tom, Doggy, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Jerry
- None of the above.

## Answer:
- Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom

- `cartoon()` is executed by the Execution Stack
- then `"Cartoon"` is printed
- `setTimeout(tom, 50)` calls browser API with **50ms** and gets added to the callback queue
- `setTimeout(doggy, 30)` calls browser API with **30ms** and gets added to the callback queue
- the first Promise is resolved immediately, so `"I am a Promise, right after tom and doggy! Really?"` goes to the **job queue**
- the second Promise is resolved immediately, so `"I am a Promise after Promise!"` also goes to the **job queue**
- then `jerry()` runs on the call stack and prints `"Jerry"`
- when the call stack becomes empty, the event loop first checks the **job queue**
- the job queue runs all its tasks in order, so it prints:

  1. `"I am a Promise after Promise!"`
  2. `"I am a Promise, right after tom and doggy! Really?"`
- then the event loop checks the callback queue for finished timers
- since `doggy` has **30ms**, it finishes before `tom` which has **50ms**
- so `"Doggy"` is printed first, then `"Tom"`


### 7. Guess the output

```js
const f1 = () => console.log('f1');
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Boom');
}).then(result => console.log(result));

setTimeout(f2, 2000);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
```

Options are,

- f4, Boom, Sonic, Albert, f1, f3, f2
- f4, f1, Boom, f2, Sonic, f3, Albert
- f4, Boom, Sonic, Albert, f3, f1, f2
- f4, Boom, Sonic, Albert, f1, f2, f3

## Answer:
- f4, Boom, Sonic, Albert, f1, f3, f2

### Explanation:

- `f4()` is executed first by the Execution Stack
- then `"f4"` is printed
- `setTimeout(f1, 0)` calls browser API and is added to the callback queue
- the first Promise resolves immediately, so `"Boom"` is added to the **job queue**
- `setTimeout(f2, 2000)` goes to browser API with a 2000ms delay
- the second Promise resolves immediately, so `"Sonic"` is added to the **job queue**
- `setTimeout(f3, 0)` goes to browser API
- the third Promise resolves immediately, so `"Albert"` is added to the **job queue**
- once the call stack is empty, the event loop checks the **job queue** first
- it finds `"Boom"`, `"Sonic"`, and `"Albert"` and executes them in that order
- after the job queue becomes empty, the event loop checks the callback queue
- both `f1` and `f3` have **0ms**, so they are ready before `f2`
- they are pulled into the call stack in the order they were scheduled
- finally, `f2` executes after 2000ms
- everything executes in the order: f4 → Boom → Sonic → Albert → f1 → f3 → f2


### 8. Guess the output

```js
const f1 = () => {
    console.log('f1');
    f2();
}
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
```

Options are,

- f4, f1, f2, Sonic, f3, Albert
- f4, Sonic, Albert, f3, f1, f2
- f4, Sonic, Albert, f1, f2, f3
- f4, Albert, Sonic, f1, f2, f3

## Answer:
- f4, Sonic, Albert, f1, f2, f3

### Explanation:

- `f4()` is executed immediately by the Execution Stack
- then `"f4"` is printed
- `setTimeout(f1, 0)` calls browser API and gets added to the callback queue
- the first Promise resolves immediately, so `"Sonic"` is added to the **job queue**
- `setTimeout(f3, 0)` is sent to browser API
- the second Promise resolves immediately, so `"Albert"` is added to the **job queue**
- once the call stack is empty, the event loop checks the **job queue**
- `"Sonic"` is executed first, then `"Albert"`
- after the job queue is empty, the event loop checks the callback queue
- `f1` entered earlier, so it gets executed
- `f1` itself calls `f2()`, so `"f2"` is printed immediately after `"f1"`
- then `f3()` is executed after that, because it also had 0ms timeout
- final order becomes: f4 → Sonic → Albert → f1 → f2 → f3
