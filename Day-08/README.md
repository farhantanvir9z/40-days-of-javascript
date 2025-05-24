# Day 08 Tasks complete!

## 1. Draw the Execution Context Diagram of the follwoing code and share as explained below:

```js
const message = "I can do it";

fucntion sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);
```

```txt
Www.molla9z.farhan@github.com
```

- Create the GEC and FEC with CP and EP flow

![execution context](./execution-context.png)

- Create a stack and heap flow

![Stack and Heap flow](./stack-heap-flow.png)

- Create a stack diagram


![stack diagram](./stack-diagram.png)
