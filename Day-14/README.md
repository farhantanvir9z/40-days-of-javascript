# Day 14 Tasks complete!

## 1. What will be the output of the following code?

```js
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}
```

- ReferenceError
- SyntaxError
- TypeError
- No error, it prints 10

## Answer is : 
- **ReferenceError**

___

<br />

## 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors.

### Solved!

```js
function processPayment(amount) {
    try {
        let a = parseFloat(amount);
        console.log("Payment is being processed...");
        if (isNaN(a)) {
            throw new Error(
                "❌ Error: The amount provided is not a valid number."
            );
        } else if (a < 0) {
            throw new Error("❌ Error: Amount must be greater than 0 Taka.");
        } else {
            console.log("Payment processing is done!");
        }
    } catch (error) {
        console.error("An error has occured:");
        console.error(error.message);
    }
}
processPayment(100);
processPayment("tapas");
processPayment(-200);

```

___
<br />

## 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

- UserError
- PaymentError
- ServerError
- EmailError

## Solved!

```js
function UserError(message) {
    this.name = "UserError";
    this.message = message;
}
function PaymentError(message) {
    this.name = "PaymentError";
    this.message = message;
}
function ServerError(message) {
    this.name = "ServerError";
    this.message = message;
}
function EmailError(message) {
    this.name = "EmailError";
    this.message = message;
}

function Customer(userName = "", email = "", fund = 0, isSentData = false) {
    this.userName = userName;
    this.email = email;
    this.fund = fund;
    this.isSentData = isSentData;
}

const customer1 = new Customer("Solimulla", "abdyahoo.com", 5, true);

try {
    if (customer1.UserError === "") {
        throw new UserError("User is not logged in.");
    } else if (customer1.email === "") {
        throw new EmailError("Email is not found");
    } else if (!customer1.email.includes("@")) {
        throw new EmailError("Email is invalid");
    } else if (customer1.fund < 0) {
        throw new PaymentError("Insufficient funds for this order.");
    } else if (!customer1.isSentData) {
        throw new ServerError("Internal server error.");
    } else {
        console.log(customer1);
    }
} catch (err) {
    console.error("An error has occured :", err);
    
} finally {
    console.log("Database is cleanup...");
}

```
___
<br />

## 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

### Solved! 

```js
function fetchData(url) {
  try {
    if (!((url).toLowerCase().startsWith("https"))){
      throw new Error("Invalid URL");
    } else {
      console.log("fetching...")
    }
  } catch (error) {
    console.error("An error has occured :", error)
  }
}
fetchData("https://www.google.com")
```
___
<br />

## 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

Example:

```js
const userInput = { username: "", age: -2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number
```

## Solved!

```js
const userInput = { userName: "", age: -2 };

function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
}
function validateUser(user) {
    try {
        if (user.userName === "") {
            throw new ValidationError("Username cannot be empty");
        } else if (user.age < 0) {
            throw new ValidationError("Age must be a positive number");
        } else {
            console.log(user);
        }
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}

validateUser(userInput);
```
___

<br />

## 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.

### Solved!

```js
function readFile(filePath = "") {
    try {
        if (filePath === "") {
            throw new Error("File not found!");
        } else {
            console.log("Processing the file. Please wait...");
        }
    } catch (error) {
        console.error("an error has occurred :");
        console.error(error);
    }
}
readFile("./images/birds.png");
```

___
<br />

## 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

## Solved!

```js
function parseJson(str) {
    try {
        return JSON.parse(str);
    } catch {
        return "Invalid JSON";
    }
}

const abc = JSON.stringify({
    name: "Rohan",
    age: 33,
    isMarried: true
});
console.log(parseJson(abc));
```

___
<br />

## 8. What is the purpose of throw in JavaScript?

- It catches an error
- It stops the execution of a program
- It creates a new error manually
- It prints an error message

### Answer is :
- **It creates a new error manually**


## 9. What does the finally block do in a try...catch statement?

- Runs only if an error occurs
- Runs only if no error occurs
- Runs regardless of whether an error occurs or not
- Stops the execution of the script

### Answer is :
- **Runs regardless of whether an error occurs or not**

___ 
<br />

## 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

### the usage of `try`, `catch`, `throw`, `rethrow` & `error object`

| `try` | `catch` | `throw` | `rethrow` | `error object` |
| -------- | -------- | -------- | -------- | -------- |
| Executes code that might throw an error  | Handles errors thrown in the try block | Manually throw an error | Throw the caught error again | A built-in error object constructor which crete an instance of `error` and help to show error with different messages.|