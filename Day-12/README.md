# Day 12 Tasks complete!


## 1. What will be the output and why?

```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
```
> ## Solved!

### The output is 

```js
"Not provided" 
```


> ### Because, `??` operator checks if the the value of `user.age` is `undefined` or `null` or not. if so the value of `user.age` will be `"Not provided"`. otherwise the value of `user.age` remain the same as before. 

<br />

> ### So, the result of the code above is `"Not provided"`

___

<br />

## 2. What will happen if we try to modify a frozen object?

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); // 1
```

> ## Solved!

> ### if we try to modify a frozen object, the object will not be modified. Rather than it will remain unchanged. 

___ 

<br />

## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```js
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
```

> ## Solved!

```js
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name, company : {name : companyName ,location : {city}}} = person;
console.log(name, companyName, city)
```
___

<br />

## 4. Build a Student Management System

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

> ## Solved!

> ## I will calculate the grades based on the chart mentioned below

| Grade point | Grade |
| -------------- | --------------------------- |
| 5.00 | A+                  |
| 4.00 | A                   |
| 3.50 | A-                  |
| 3.00 | B                   |
| 2.00 | C                   |
| 1.00 | D                   |
| 0.00 | F                   |

```js
function Student(name = "", age = 18, grades = []){
  this.name = name;
  this.age = age;
  this.grades = grades;
  this.avgGrade = function() {
    const grades = this.grades;
    const totalGrade = grades.reduce((preVal, currentVal) => {
      preVal += currentVal;
      return preVal;
    }
    ,0);
    const avarage = parseFloat((totalGrade / grades.length).toFixed(2));
    return avarage;
  }
}
const student1 = new Student("Farhan", 19, [2, 5, 3.5, 3, 4, 4.7]);
console.log(student1.avgGrade());

```
## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books.

> ## Solved! 

```js
const books = {
  book1 : {
    name : "Introduction to Algorithms",
    quantity : 35
  },
  book2 : {
    name : "Python for Beginners",
    quantity : 5
  },
  book3 : {
    name : "DSA for everyone",
    quantity : 0
  },
  isAvailable : function(bookId) { 
  
    if (this[bookId]?.quantity > 0) {
      console.log(`${bookId} is available.`);
    } else {
      console.log(`Sorry, ${bookId} is not available.`);
    }
  
    
  },
  restockBook: function(bookId, quantity = 0) {
    if (this[bookId]) {
    this[bookId].quantity += quantity;
    } else {
      console.log(`${bookId} was not sold here before. Please, add ${bookId} first. Thanks!`);
    }
  }
};
books.isAvailable("book2");
books.restockBook("book3", 5);
books.restockBook("book5", 7);
```
___
<br />

## 6. What is the difference between `Object.keys()` and `Object.entries()`? Explain with examples

> ## Solved!

<br />

> ### The difference between `Object.keys()` and `Object.entries()` is ...

 - #### `Object.keys()` returns an array of keys only 
__On the other hand,__ 
  - #### `Object.entries()` returns an array of keys and values inside another array

```js
const user = {
  name : "jahid",
  email : "jahid802@yahoo.com",
}
let x = Object.keys(user); // returns an array of keys.
let y = Object.entries(user) // returns an array of keys & values inside another array..
console.log(x);
console.log(y);
```
___

<br />

## 7. How do you check if an object has a certain property?

> ## Solved! 

> #### I will use `Object.hasOwn(objectName, propertyName)` to check if an object has a certain property?

```js
const player = {
  name : "Adam Thomas",
  level : 20
}
console.log(Object.hasOwn(player, "level")); // true
```
## 8. What will be the output and why?

```js
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);
```

> ### The output will be

```sh
"Doe"
```
> **Because** Now `newPerson` and `person` are pointing to the same reference. So, while the `newPerson.name` is changed the `person.name` will be changed too.

### So the result will be `Doe`

___

<br />

## 9. What’s the best way to deeply copy a nested object? Explain with examples

> ### The best way to deeply copy a nested object is to use `structuredClone()` method.

```js
const user1 = {
  name : "farabi",
  userName : "Ffarabi_Galib",
  handle : "@farabi9z",
  address : {
    division : "Dhaka",
    country : "Bangladesh",
    postCode : 1939 
  }
};

const user2 = structuredClone(user1);
console.log(user2)
user2.address.postCode = 1374;
console.log(user1.address.postCode); // 1939
console.log(user2.address.postCode); // 1374
```

___

<br />

## 10. Loop and print values using Object destructuiring

```js
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
```

> ## Solved!

```js
for (const {name, address, age} of users){
  console.log(name, address, age);
}
```