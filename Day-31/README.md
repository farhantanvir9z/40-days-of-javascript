# Tasks complete!



# 1. Create a Simple Prototype Chain

- Define a base object animal with a method eat.
- Create another object dog that inherits from animal using Object.create.
- Call eat from dog and explain how the prototype chain resolves it.

### Done! 
```js

const animal = {
	name: "Monkey",
	eat : function () {
		console.log(`${this.name} is eating...`);
	}
}

const dog = Object.create(animal, {name : {value: "dog"}});
dog.eat();

```
## Explanation

> first dog.eat() it checks whether the eat() exist in the dog object or not. it not finds then go to the prototype of the dog wich is Animal then checks again and finds the eat() here and then it executes eat() method.

> dog.eat() -> dog object (not found) -> Animal (found) -> execute

# 2. Build a Custom Constructor Function

- Create a constructor function Book(title, author).
- Add a method getDetails() to the prototype of Book.
- Instantiate two books and show they share the method from the prototype.

## Done!
```js

function Book(title, author) {
	this.title = title;
	this.author = author;
}

Book.prototype.getDetails = function () {
	console.log(`The book's title is ${this.title}. This book's author is ${this.author}`);
}

const book1 = new Book("হাবলুদের প্রোগ্রামিং","Jhankar Mahboob.");

book1.getDetails(); // The book's title is হাবলুদের প্রোগ্রামিং. This book's author is Jhankar Mahboob.

const book2 = new Book("Introduction To Algorithms", "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein")

book2.getDetails(); // The book's title is Introduction To Algorithms. This book's author is Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein
```
# 3. Compare Object Creation Patterns

Create three objects using:

- Object literals
- Constructor functions
- Object.create

Add similar methods and compare how inheritance works in each pattern.

## Done!

## 1. Object Literal

```js
const user1 = {
  name: "Alex",
  age: 25,
  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};
```
### Explanation

* This is the easiest way to create an object.
* Everything is written inside `{ }`.
* If we create another object like this, the method will be written again.

### Inheritance

* There is no automatic inheritance.
* We can’t easily share methods between many objects.

---

## 2. Constructor Function

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.getInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

const user2 = new User("Alex", 25);
```

### Explanation

* Objects are created using the `new` keyword.
* Methods are kept in the prototype.
* All objects share the same method, so it saves memory.

### Inheritance

* Inheritance works using the prototype chain.
* One constructor can inherit methods from another.

---

## 3. Object.create()

```js
const userMethods = {
  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};

const user3 = Object.create(userMethods);
user3.name = "Alex";
user3.age = 25;
```

### Explanation

* This creates a new object from another object.
* No constructor is used.
* The new object looks for methods in its parent object.

### Inheritance

* Inheritance is very direct.
* The object directly uses another object as its prototype.


# 4. Simulate a Real-World Inheritance Chain

- Simulate a real-life hierarchy: Person → Student → GraduateStudent.
- Each level should add its own methods or properties using prototypes.
- Show how a GraduateStudent can access methods from both Student and Person.

## Done!
```js

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`I am ${this.name}. I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, studentId, gpa) {
        super(name, age);
        this.studentId = studentId;
        this.gpa = gpa;
    }
    study() {
        console.log(`${this.name} is studying...`);
    }
    getGPA() {
        console.log(this.gpa);
    }
}

class GraduateStudent extends Student {
    constructor(name, age, studentId, gpa, thesisTitle) {
        super(name, age, studentId, gpa);
        this.thesisTitle = thesisTitle;
    }
    doResearch() {
        console.log(`${this.name} is researching on \`${this.thesisTitle}'\``);
    }
    submitThesis() {
        console.log(`Thesis is submitting...`);
    }
}

const graduate1 = new GraduateStudent(
    "Kamal",
    36,
    1200,
    3.4,
    "machine learning's impact on employment"
);
console.log(graduate1);

graduate1.introduce(); // accessing from the `Person` class
graduate1.study(); // accessing from the `Student` class.
graduate1.doResearch(); // accessing from the `GraduateStudent` class

```
# 5. Object.create vs Class vs Constructor Function

- Implement the same User entity using:
  - Constructor Function
  - ES6 Class
  - Object.create
- Write a summary comparing syntax, readability, and prototype behavior.

## Done!

```js

function CreateUser(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.getInfo = function () {
        console.log(
            `User's name is ${this.name}. He is ${this.age} years old.`
        );
    };
}

// with ES6 Class
class CreateUserWithClass {
	constructor(name, age, id) {
		this.name = name;
    this.age = age;
    this.id = id;
	}
	getInfo() {
        console.log(
            `User's name is ${this.name}. He is ${this.age} years old.`
        );
    };
}

const user = new CreateUserWithClass("tapas", 38, 20);

// with Object.create()
const user1 = Object.create(user);


```

## Comparison: Constructor Function, ES6 Class, and Object.create()

### Syntax
Constructor functions use the older JavaScript style where everything is written using functions and `this`. It works, but the code looks a bit long and manual. 

ES6 classes have a much cleaner and more organized syntax. They look similar to classes in other programming languages, so they feel more natural.  

`Object.create()` is very short in syntax, but it feels unusual because there is no constructor or clear structure.

---

### Readability
ES6 classes are the easiest to read and understand. Even someone new to JavaScript can guess what the code is doing by just looking at it.  

Constructor functions are readable, but needed some JavaScript knowledge to understand how `this` and prototypes work.  
`Object.create()` is the hardest to read because it directly works with prototypes, which can be confusing without a strong understanding of JavaScript basics.

---

### Prototype Behavior
In constructor functions, if methods are written inside the constructor, each object gets its own copy of the method, which is not memory efficient.  

In ES6 classes, methods are automatically added to the prototype, so all objects share the same methods. This is more efficient and cleaner.  

With `Object.create()`, a new object directly uses another object as its prototype. No constructor is called, and the new object depends on the original object for properties and methods.