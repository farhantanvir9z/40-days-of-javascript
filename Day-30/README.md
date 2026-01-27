# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a Book Class

- Create a Book class with properties: title, author, pages.
- Add a method describe() that logs:
    "Title: [title], Author: [author], Pages: [pages]"
- Create at least two book objects and call the describe() method.

## Done! 

```js
class Book {
    constructor(title, author, pages) {
        try {
            if (!title || !author || !pages) {
                throw new Error("please, fill all the paranms");
            } else {
                this.title = title;
                this.author = author;
                this.pages = pages;
            }
        } catch (err) {
            console.error(err.message);
        }
    }
    describe() {
	console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
	   
    }
}

const book1 = new Book("Introduction to algorithm", "john", 1000);
book1.describe();

const book2 = new Book("Python", "john", 400);
book2.describe()
```
## 2. Use Getters and Setters with a Temperature Class

- Create a Temperature class with a private field _celsius.
- Add a getter to return Fahrenheit value.
- Add a setter to set Celsius temperature.
- Test setting temperature and logging Fahrenheit.

```js
this._celsius * 1.8 + 32;
```

## Done!

```js 


class Temperature {
	constructor(calcius){
		this._calcius = calcius;
	}
	get fahrenheit() {
		return this._calcius * 1.8 + 32;
	}
	set calcius(value ) {
		this._calcius = value;
	}
}

const temp = new Temperature(76);
console.log(temp.fahrenheit)

```
## 3. Build a User Class with Public & Private Fields

- Fields: name, `#password`
- Add a method checkPassword(pw) that checks if it matches #password.
- Show how private fields can’t be accessed directly outside the class.
SyntaxError

## Done!
```js
class User {
	// fields
    #password;
    name;
    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }
    checkPassword(pw) {
        if (pw === this.#password) {
            console.log("Varified successfully.");
        } else {
            console.log("varification failed.");
        }
    }
}


const jahangir = new User("Jahangir Alam ", "Www.9999@#");
jahangir.checkPassword("ww.9999@#")

console.log(jahangir.#password); // SyntaxError
```
## 4. Inheritance — Vehicle and Car

- Vehicle class has fields: make, model, and method start()
- Car extends Vehicle, adds fuelType
- Override the start() method in Car to print: "Starting [fuelType] car: [make] [model]"

## Done! 

```js  

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log("The Vehicle is starting...");
    }
}

class Car extends Vehicle {
    constructor(make, model, fuelType) {
        super(make, model);
        this.fuelType = fuelType;
    }
    start() {
        console.log(
            `Starting ${this.fuelType} car: ${this.make}, ${this.model}`
        );
    }
}

const teslaCar = new Car("Tesla", "Model 3 sedan", " Electric");

teslaCar.start();

```
## 5. Use a Static Method

- Create a class MathUtils with static methods:
    add(a, b), subtract(a, b), randomInt(min, max)
- Call the methods without creating an object.

## Done!

```JavaScript

class MathUtils {
    static add(a, b) {
        const result = a + b;
        console.log(result);
    }
    static subtract(a, b) {
        const result = a - b;
        console.log(result);
    }
    static randomInt(min, max) {
        const result = Math.floor(Math.random() * max) + (max - min + 1);
        console.log(result);
    }
}

MathUtils.add(11, 82);
MathUtils.subtract(100, 82);
MathUtils.randomInt(1000, 7373);
```

## 6. Smart Light Bulb Class with Access Control

- Create a SmartLightBulb class:
  - Public method: turnOn(), turnOff()
  - Private method: #connectToWiFi()
  - turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
  - Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
- Try accessing the private method directly and observe the error.

## Done!

```js 

class SmartLightBulb {
    model = "v1.0";
    constructor(name) {
        this.name = name;
    }
    #connectToWiFi() {
        console.log("connecting to a wifi...");
    }
    turnOn() {
        this.#connectToWiFi();
        console.log("Light is on.");
    }
    turnOf() {
        console.log("light is of.");
    }
    info() {
        console.log(
            "SmartLightBulb v1.0 supports remote control and scheduling."
        );
    }
}

const light = new SmartLightBulb("Phillips Hue");

light.turnOn();
light.turnOf();
light.#connectToWiFi(); // SyntaxError

```

## 7. Animal Class and Subclasses

- Base Class: Animal(name, sound)
  - Method: makeSound() logs: "The [name] says [sound]"
- Subclass 1: Dog(name) — inherits from Animal
  - Overrides makeSound() → "The Dog [name] barks!"
- Subclass 2: Cat(name)
  — overrides makeSound() → "The Cat [name] meows!"
- Call super() inside each subclass constructor
- Add a shared method sleep() in Animal and test with both Dog and Cat instances.

## Done!

```js 

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
    sleep() {
        console.log(`${this.name} is sleeping...`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`The dog ${name} barks.`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`The Cat ${name} meows.`);
    }
}

const dog = new Dog("Tom");

dog.makeSound(); // The dog  barks.
dog.sleep(); // Tom is sleeping...

const cat = new Cat("Barley");

cat.makeSound(); // The Cat  meows.
cat.sleep(); // Barley is sleeping...

```