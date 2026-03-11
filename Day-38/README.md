# Tasks Of Day 38 is complete!

## 1. Identify Reachable vs Unreachable Objects

Write a small program where:

- You create an object user
- Create a second object profile that references user
- Then set user = null

Is the original user object still reachable? Why or why not?
### Answer:

> **Yes, the original `user` object is still reachable.**

When I write:

`let profile = user`

both `user` and `profile` reference the **same object in memory**.
So the object now has **two references (pointers)**: `user` and `profile`.

Later, when I do:

`user = null`

the `user` reference is removed. However, the object is **still referenced by `profile`**.

Since the object still has a reference pointing to it, it is **still reachable from the root**, and therefore **JavaScript’s garbage collector will not reclaim its memory**.

The object will only become eligible for garbage collection **when no references to it remain**.

![Graph](./Task-1(reachability).png)
## 2. Simulate and Break a Cyclic Reference

Observe how cyclic references can cause memory retention.

- Create two objects a and b
- Make them reference each other (a.ref = b and b.ref = a)
- Nullify external references to both

Explain why this may or may not cause a memory leak. Add a.ref = null; b.ref = null; and explain how it helps

### Done!

### Explanation:

When I set `a = null` & `b = null`, `a` and `b` become Unreachable, So the memory of these objects (that are pointed by `a` & `b` ) will be reclaimed by Garbage Collector.
Thus, it not may cause a memory leak.

> but

After setting `a & b` to `null`, adding `a.ref = null` & `b.ref = null` will generate and throw `TypeError`. Because, `a.ref === null.ref`

![Task 2 Graph](./Task-2(reachability).png)

## 3. DOM Leak Detection and Fix

Learn how DOM elements and closures can create memory leaks.

- Create a button using JavaScript
- Add an event listener that references a variable outside the listener
- Remove the button from the DOM, but not the event listener

Identify the leak & fix it.

## Fix:

```javascript
const body = document.querySelector("body");

const btn = document.createElement("button");
btn.innerText = "click me";

function handleClick(e) {
  console.log(e.target);
}

btn.addEventListener("click", handleClick);

body.appendChild(btn); // Memory leaks

setTimeout(() => {
  btn.removeEventListener("click", handleClick); // fix the Memory leak issue
  body.removeChild(btn);
}, 3000);
```

[Task 3](./Task-3)