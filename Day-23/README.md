# Tasks

## 1. Create Your First Promise

- Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
- Log the result using .then().

### Solved!

```js
const printPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, Promises!");
    }, 1000);
});

printPromise
  .then(resolveValue => {
    console.log(resolveValue);
  });

```

## 2.  Reject a Promise

- Create a Promise that immediately rejects with the message "Something went wrong!".
- Handle the error using .catch().

### Solved!

```js
const myPromise = new Promise((resolve, reject) => {
    reject("Something went wrong!");
});

myPromise.catch((rejectedValue) => {
  console.error(rejectedValue)
})
```

## 3. Simulate Coin Toss

Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

### Solved!

```js
const coinTossPromise = new Promise((resolve, reject) => {
    const randNum = Math.floor(Math.random() * 2);
    resolve(randNum);
});

coinTossPromise
    .then(value => {
        return new Promise((resolve, reject) => {
            const results = ["Heads", "Tails"];
            setTimeout(() => {
                resolve(results[value]);
            }, 1000);
        });
    })
    .then(value => {
        console.log(value);
    });

```

## 4. Promise with Condition

- Create a function checkAge(age) that returns a Promise.
- Resolve if age >= 18, reject otherwise.

### Done!
```js
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (typeof age === "number" && age >= 18) {
      resolve("You are eligible.")
    } else {
      reject("You are not eligible for this site.")
    }
  })
}
const myPromise = checkAge(9);

myPromise
  .then((value) => {
    console.log(value);
  },
  (error) => {
    console.error(error);
  })
```

## 5. Chain Promises Sequentially

- Create three Promises that log:
  - "Step 1 done"
  - "Step 2 done"
  - "Step 3 done"
- Chain them using .then().

### Solved!

```js
const promise1 = new Promise((resolve, reject) => {
    resolve("Step 1 done");
});

const promise2 = new Promise((resolve, reject) => {
    resolve("Step 2 done");
});

const promise3 = new Promise((resolve, reject) => {
    resolve("Step 3 done");
});

promise1
  .then((value) => {
    console.log(value);
    return promise2;
  })
  .then((value) => {
    console.log(value)
    return promise3
  })
  .then((value) => {
    console.log(value)
  })
```

## 6. Value Transformation in Chain

- Create a Promise that resolves with 5.
- Chain .then() handlers to double it, then square it.
- Final output should be 100.

### Solved! 

```js
const myPromise = new Promise((resolve, reject) => {
    resolve(5);
});

myPromise
    .then(value => {
        return value * 2; // 10
    })
    .then(value => {
        return value ** 2; // 100
    })
    .then(value => {
        console.log(value); // 100
    });

```
## 7. Chain with Random Rejection

- First .then() resolves to "Start".
- Second .then() randomly throws an error or returns "Continue".
- Handle rejection gracefully.

### Solved!

```js
const myPromise = new Promise((resolve, reject) => {
  resolve("start");
});

myPromise
    .then((value) => {
      const randNum = Math.floor(Math.random() * 2);
      if (randNum === 0) {
      throw new Error("Opps! try again.")
      } else {
        return "continue"
      }
    })
      .then((value) => {
        console.log(value)
      })
      .catch((error) => {
        console.error(error)
      })
```
## 8. Multiple then() calls on same Promise

- Create a single resolved Promise.
- Attach two different .then() handlers to it.
- Explain that both run independently.

## Done!

```js
const myPromise = new Promise((resolve, rejecte) => {
    resolve(20);
});

myPromise.then(value => {
    return value ** 2; // 400
});

this promise get the resolved value of myPromise which is 20;

myPromise.then(value => {
    console.log(value); // 20 not 400
    return value * 10;
});

this promise get the resolved value of myPromise which is 20 not the previous returned value of myPromise because both are run independently.;
```
## 9.  Return New Promises in .then()

- Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
  - “First”
  - “Second”
  - “Third”

### Solved! 

```js
const myPromise = new Promise((resolve, reject) => {
    resolve("first");
});

myPromise
    .then(value => {
        console.log(value);
        return new Promise((resolve, reject) => {
            resolve("Second");
        });
    })
    .then(value => {
        console.log(value);
        return new Promise((resolve, reject) => {
            resolve("Third");
        });
    })
    .then(value => {
        console.log(value);
    });

```
## 10. Implement fakeDBQuery()

- Create a function that simulates a DB query with a random delay and returns data (like a user object).
- Chain multiple fake queries.

## Solved!

```js
const workers = [
    {
        id: 1,
        name: "Anna Thompson",
        age: 24,
        role: "SEO Specialist",
        department: "Marketing",
        email: "anna.thompson@techsphere.com",
        salary: 42000,
        joinDate: "2022-05-10"
    },
    {
        id: 2,
        name: "John Carter",
        age: 34,
        role: "Mechanical Engineer",
        department: "Product Design",
        email: "john.carter@techsphere.com",
        salary: 58000,
        joinDate: "2020-11-02"
    },
    {
        id: 3,
        name: "Mark Alis",
        age: 27,
        role: "Full Stack Developer",
        department: "Software Engineering",
        email: "mark.alis@techsphere.com",
        salary: 63000,
        joinDate: "2021-08-17"
    },
    {
        id: 4,
        name: "James Miller",
        age: 41,
        role: "Data Analyst",
        department: "Business Intelligence",
        email: "james.miller@techsphere.com",
        salary: 56000,
        joinDate: "2019-03-29"
    },
    {
        id: 5,
        name: "Sara Ahmed",
        age: 29,
        role: "UI/UX Designer",
        department: "Design",
        email: "sara.ahmed@techsphere.com",
        salary: 48000,
        joinDate: "2023-01-15"
    }
];

function fakeDBQuery() {
    const randTime = Math.floor(Math.random() * 3000) + 1;
    const randIndex = Math.floor(Math.random() * 5);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(workers[randIndex]);
        }, randTime);
    });
}

const filteredUser = fakeDBQuery();

filteredUser
    .then(value => {
        console.log(value);
        return fakeDBQuery();
    })
    .then(value => {
        console.log(value);
        return fakeDBQuery();
    })
     .then(value => {
        console.log(value);
        return fakeDBQuery();
    })
    .then(value => {
        console.log(value);
        return fakeDBQuery();
    })
    .then(value => {
        console.log(value);
        return fakeDBQuery();
    })
    .then(value => {
        console.log(value);
        return fakeDBQuery();
    });

```