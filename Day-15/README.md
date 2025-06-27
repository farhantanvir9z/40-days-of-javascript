# Day 15 Tasks complete!

## Questions



-   [x] **T-001**: Create an array of 5 elements using the Array Constructor.

### Solved!

```js
const arr = new Array(
    "tapascript",
    "bro code",
    "code with harry",
    "hablu programmer",
    "programming hero"
);
```

___

-   [x] **T-002**: Create an array of 3 empty slots.

### Solved!

```js
const myArray = new Array(5);
```

___

-   [x] **T-003**: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.

### Solved!

```js
const fruits = ["mango", "banana", "apple", "grape", "papaya", "orange"];
console.log(fruits[fruits.length - 3]); // "grape"
```

___

-   [ ] **T-004**: Use the `for` loop on the above array to print elements in the odd index.

### Solved!

```js
const fruits = ["mango", "banana", "apple", "grape", "papaya", "orange"];
for (let i = 0; i < fruits.length; i++) {
    if (i % 2 !== 0) console.log(fruits[i]);
}
```

___

-   [ ] **T-005**: Add one element at the front and the end of an array.

### Solved!

```js
const fruits = ["mango", "banana", "apple", "grape", "papaya", "orange"];
fruits.unshift("Jackfruit");
```

---

-   [ ] **T-006**: Remove an element from the front and the end of an array.

### Solved!

```js
const fruits = ["mango", "banana", "apple", "grape", "papaya", "orange"];
fruits.shift();
fruits.pop();
```


-   [ ] **T-007**: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

### Solved!

```js
const favFoods = [
    "Pizza",
    "Pasta",
    "Chicken rost",
    "Biryani",
    "Burger",
    "Thai Soup",
    "Sandwich",
    "Curry",
    "Milk Bread",
    "Noodles"
];
const [, , , , , favFood, , , ,] = favFoods;
console.log(favFood);
```

-   [ ] **T-008**: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

### Solved!

```js
const favFoods = [
    "Pizza",
    "Pasta",
    "Chicken rost",
    "Biryani",
    "Burger",
    "Thai Soup",
    "Sandwich",
    "Curry",
    "Milk Bread",
    "Noodles"
];
const [, , ...rest] = favFoods;
console.log(rest);
```

-   [ ] **T-009**: Clone an Array(Shallow cloning)

### Solved!

```js
const fruits = [
"mango", 
"banana", 
"apple", 
"grape", 
"papaya", 
"orange"
];
const clonedFruits = [...fruits];
console.log(clonedFruits);
```

-   [ ] **T-010**: Empty an array using its length property

### Solved!

```js
const fruits = ["mango", "banana", "apple", "grape", "papaya", "orange"];
fruits.length = 0;
console.log(fruits); // []
```

-   [ ] **T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.

### Solved!

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
        numbers.length = 6;
    }
}
console.log(numbers);
```

-   [ ] **T-012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.

### Solved!

```js
const fruits = ["mango", "banana", "apple", "grape", "papaya", "orange"];
fruits.splice(0, 6);
console.log(fruits);
```

-   [ ] **T-013**: Create an Array of 10 elements. You can empty the array in multiple ways: using the `length` property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, or the `splice()` method. Which among these methods are most efficient and why?

### Answer:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.length = 0;
console.log(numbers); // []
```

The most efficient way to empty an array is : to set the `length` value to `0`;

### Because,

-   It is like update a the value of a property of an object. which is like a single operation.

**_But,_**

-   If I use `pop()` or `shift` method to empty an array I have to use loop. so it is slow.
-   if I do `array = []` it will occupy some memory which is not good at all.

-   [ ] **T-014**: What happens when you concatenate two empty arrays?

### Answer :

It will return an `empty array`

-   [ ] **T-015**: How can you check if a value is partially matching with any of the elements of an Array?

### Answer :

I use `includes` method.

```javascript
const favFoods = ["pizza", "burger", "noodles", "sandwich"];
const hasPizza = favFoods.includes("pizza");
console.log(hasPizza); // true
```

-   [ ] **T-016**: What is the difference between the slice() and splice() methods?

### Answer :

#### The difference between `slice` and `splice()` is :

| `slice` | `splice` |
| -------------------------------------------------- | -------------------------------------------------------------------- |
| It is used to copy an array or a part of an array. | Is is used to update, delete, replace or insert elements in an array |

-   [ ] **T-017**: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

### Solved!

```js
const titles = ["title7", "title9", "title1", "title2", "title4", "title3"];
const sortedTitlesInAssendingOrder = titles.toSorted((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
});
console.log(sortedTitlesInAssendingOrder); // [ 'title1', 'title2', 'title3', 'title4', 'title7', 'title9' ]
const sortedTitlesIndescendingOrder = titles.toSorted((a, b) => {
    return a === b ? 0 : a > b ? -1 : 1;
}); //
console.log(sortedTitlesIndescendingOrder); // [ 'title9', 'title7', 'title4', 'title3', 'title2', 'title1' ]
console.log(titles); // remain unchanged.
```

-   [ ] **T-018**: Can you give examples of sparse and dense arrays?

> **Sprase array** is array which's some elements are empty

> **Dense array** is array which's any element is not empty

```javascript
const denseArray = [1, 5, 7, 9, 24, 66];
const spraseArray = [1, , , 3, 9, 55];
```

-   [ ] **T-019**: Give a practical usages of the .fill() method

### Answer : 
```js
const userPermission = [true, false, true,  false, true];
userPermission.fill(false);
 console.log(userPermission); // [ false, false, false, false, false ]
```
-   [ ] **T-020**: How to convert an array to a string?
I use `toString()` or `join()` methods to convert an array to a string.
```js
const fruits = ["mango", "banana", "apple", "grape", "papaya", "orange"];
const stringConverted = fruits.join("<=>");
console.log(stringConverted); // mango<=>banana<=>apple<=>grape<=>papaya<=>orange
```

> Consider these input arrays for question **T-21** to **T-48**

-   `employees array`: An array of emplyees working in a department.

    ```js
    const employees = [
        { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
        { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
        { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
        { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
        { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
        { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
        { id: 7, name: "George", departmentId: 3, salary: 5200 },
        { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
        { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
        { id: 10, name: "Jane", departmentId: 1, salary: 5100 }
    ];
    ```

-   `departments array`: An array of departments where emplyees work.

    ```js
    const departments = [
        { id: 1, name: "HR" },
        { id: 2, name: "Engineering" },
        { id: 3, name: "Marketing" },
        { id: 4, name: "Sales" }
    ];
    ```

-   [ ] **T-021**: Can you filter employees who work in the "Engineering" department?
### Solved!

```js
const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 }

];
const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" }
];

const combinedArray = employees.map((emp) => {
  const dept = departments.find((dpt) => {
    return dpt.id === emp.departmentId
  });
  emp.department = dept.name;
  return emp;
});

const employeesWorkingInEngeneeringDepertment = combinedArray.filter((emp) => emp.department === "Engineering");
console.log(employeesWorkingInEngeneeringDepertment);
```

-   [ ] **T-022**: Create a new array that combines employee names and department names in the format: "Alice (HR)".

### Solved!

```js
const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 }
];
const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" }
];

const combinedArray = employees.map(emp => {
    const dept = departments.find(dpt => {
        return dpt.id === emp.departmentId;
    });
    emp.name = `${emp.name} (${dept.name})`;
    return emp;
});

console.log(combinedArray);

```
-   [ ] **T-023**: Find the highest salary among employees.
```js
const salaries = employees
      .map(emp => emp.salary)
      .sort((a, b) => {
        return a === b ? 0 : a > b ? -1 : 1 ;
       });
const highestSalary = salaries[0]
console.log(highestSalary);

```
-   [ ] **T-024**: Check if there is at least one employee in the "Sales" department.
### Solved!
```js
const employeesWithDept = employees.map(emp => {
    const dept = departments.find(dpt => {
        return dpt.id === emp.departmentId;
    });
    emp.department = dept.name;
    return emp;
});

const hasAnySalesMan = employeesWithDept.some(emp => emp.department === "Sales");
console.log(hasAnySalesMan);
```
-   [ ] **T-025**: Write a function to filter employees earning more than 6000.
# Solved!
```js
function employeesEarningMoreThan6000(arr) {
    try {
        if (Array.isArray(arr)) {
            console.log(arr.filter(emp => emp.salary > 6000));
        } else {
            throw new Error("Input is not an array");
        }
    } catch (error) {
        console.error("An error has occured:", error.message);
    }
}
employeesEarningMoreThan6000(employees);
```
-   [ ] **T-026**: Create an array of employee names only.
### Solved!
```js
const employeeNames = employees.map(emp => emp.name);
console.log(employeeNames);

```
-   [ ] **T-027**: Calculate the total salary of all employees using `reduce()`
### Solved!
```js
const totalSalaries = employees
    .map(emp => emp.salary)
    .reduce((acc, currentVal) => {
    acc += currentVal;
    return acc;
  }, 0);
console.log(totalSalaries);

```

-   [ ] **T-028**: Is there any employee earning less than 5000?
### Solved!
```js
const hasLowEarningStaff = employees.some(emp => emp.salary < 5000);
console.log("Is there any employee earning less than 5000? :", hasLowEarningStaff);
```
-   [ ] **T-029**: Find the first employee who earns exactly 5100.
### Solved!
```js
const fEmp = employees.find(emp => emp.salary === 5100);
console.log(fEmp);
```
-   [ ] **T-030**: Find the last employee in the "HR" department.
```js
const combinedArray = employees.map(emp => {
    const dept = departments.find(dpt => {
        return dpt.id === emp.departmentId;
    });
    emp.department = dept.name;
    return emp;
});
console.log(combinedArray)
// Find the first employee who earns exactly 5100.
const lEmp = combinedArray.findLast(emp => emp.department === "HR");
console.log(lEmp);
```

-   [ ] **T-031**: Find the first employee in the "Marketing" department.
### Solved!
```js
const employeesWithDepts = employees.map(emp => {
    const dept = departments.find(dept => dept.id === emp.departmentId);
    emp.department = dept.name;
    return emp;
});

const fEmpInEng = employeesWithDepts.find(
    emp => emp.department === "Engineering";
);
console.log(fEmpInEng);

```
-   [ ] **T-032**: Check if all employees earn more than 4000.
### Solved!
```js
const allEmployeesEarnMoreThan4000
= employees.every(emp => emp.salary > 4000);
console.log(allEmployeesEarnMoreThan4000);
```
-   [ ] **T-033**: Find the first employee in the "Sales" and "HR" department.
-   [ ] **T-034**: Verify if all employees belong to a department listed in the departments array.
### Solved!
```js
const employeesWithDepts = employees.map(emp => {
    const dept = departments.find(dept => dept.id === emp.departmentId);
    emp.department = dept.name;
    return emp;
});

const areAllemployeesInDept = employeesWithDepts.every(emp => emp.department);
console.log(areAllemployeesInDept);

```
-   [ ] **T-035**: Log each employee's name and department name to the console.
### Solved!
```js
employeesWithDepts.forEach(emp => {
    console.log(`${emp.name} is in ${emp.department}`);
});
```
-   [ ] **T-036**: Extract all employee names into a single array.
### Solved!
```js
const employeeNames = employees.map(emp => emp.name);
console.log(employeeNames);
});
```
-   [ ] **T-037**: Increment each employee's salary by 10%
### Solved!
```js
employees.forEach(emp => {
  emp.salary = Math.floor(emp.salary * 1.1);
  console.log(emp.salary);
});
```
-   [ ] **T-038**: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
-   [ ] **T-039**: Find the total salary of all employees working in the "Engineering" department.
### Solved!
```js
const employeesWithDepts = employees.map(emp => {
    const dept = departments.find(dept => dept.id === emp.departmentId);
    emp.department = dept.name;
    return emp;
});

const totalSalaryOfempInEngeering = employeesWithDepts
      .filter(emp => emp.department === "Engineering")
      .map(emp => emp.salary)
      .reduce((acc, currentVal) => { return acc += currentVal
      }, 0);

console.log(totalSalaryOfempInEngeering);

```
-   [ ] **T-040**: Check if there is any department where all employees earn more than 5000.
### Solved!
```js
const employeesWithDepts = employees.map(emp => {
    const dept = departments.find(dept => dept.id === emp.departmentId);
    emp.department = dept.name;
    return emp;
});
const empInHR = employeesWithDepts
    .filter(emp => emp.department === "HR")
    .every(emp => emp.salary > 5000);
const empInSales = employeesWithDepts
    .filter(emp => emp.department === "Sales")
    .every(emp => emp.salary > 5000);
const empInEng = employeesWithDepts
    .filter(emp => emp.department === "Engineering")
    .every(emp => emp.salary > 5000);
const empInMarketting = employeesWithDepts
    .filter(emp => emp.department === "Marketing")
    .every(emp => emp.salary > 5000);
const hasHigherEarnignGroup =
    empInHR || empInSales || empInEng || empInMarketting;

```
-   [ ] **T-041**: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
        Find the total number of unique projects being handled across all employees.
-   [ ] **T-042**: For each employee, find their department name and return an array of employee names with their department names.
### Solved!
```js 
const employeesWithDepts = employees.map(emp => {
    const dept = departments.find(dept => dept.id === emp.departmentId);
    return {
        name: emp.name,
        department: dept.name
    };
});
console.log(employeesWithDepts);

```
-   [ ] **T-043**: Get a list of names of employees earning more than 6000.
### Solved!
```js
const namesOfHighEarningEmployee = employees
    .filter(emp => emp.salary > 6000)
    .map(emp => emp.name);
console.log(namesOfHighEarningEmployee);
```
-   [ ] **T-044**: Write a for-of loop to print the names of all employees from the employees array
### Solved!
```js
for (let { name } of employees) {
    console.log(name);
}
```
-   [ ] **T-045**: Using a for-of loop, print the names of employees earning more than 5000.
### Solved!
```js
const earningMoreThan5000 = employees.filter(emp => emp.salary > 5000);
for (let {name} of earningMoreThan5000){
  console.log(name)
}
```
-   [ ] **T-046**: Modify the for-of loop to destructure each employee object and log their name and salary.
### Solved!
```js
for (let {name, salary} of employees){
  console.log(name, salary)
}
```
-   [ ] **T-047**: Write a for-of loop to match employees with their departments and print the results.
-   [ ] **T-048**: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
### Solved! 
```js
const x = employees.map(emp => emp.name).entries();

for (let [index, value] of x) {
  console.log(index, value);
 }
```
-   [ ] **T-049**: Given the array-like object below, access the second element and log it:

    ```js
    const arrayLike = { 0: "First", 1: "Second", length: 2 };
    ```

### Solved!

```js
const arrayLike = { 0: "First", 1: "Second", length: 2 };
console.log(arrayLike[1])
```
-   [ ] **T-050**: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.
### Solved!

```js
function printArgs(num1, num2) {
  const args = arguments;
  const convertedArray = Array.from(args);
  console.log(convertedArray);
}

printArgs(12, 87, "true", false);
```
-   [ ] **T-051**: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.
### Solved!

```js
const allDivElems = document.querySelectorAll("div");
const nodelistToArray = Array.from(allDivElems);
console.log(nodelistToArray);
```
-   [ ] **T-052**: Merge these two arrays into a single array:

    ```js
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    ```
### Solved!
```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const margedArray = [...arr1, ...arr2];
console.log(margedArray);
```
-   [ ] **T-053**: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
### Solved!
```JavaScript
const n = 5;
const value = "A";
const newArr = new Array(n).fill(value); 
console.log(newArr); // ["A", "A", "A", "A", "A"];
```
-   [ ] **T-054**: Use Array.from to convert a string like "Hello" into an array of characters.
### Solved!
```js
const str = "Hello";
const arr = Array.from(str);

```
-   [ ] **T-055**: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().
   
### Solved!
```js
const fruits = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
 const groupedByFirstLetter = Object.groupBy(fruits, ([elemsń''!! nconsole n belems[0]);
 // or!! hhhhhhhhhhh!hh!
const x = fruits.reduce((acc, currentVal) => {
  if (acc[currentVal[0][0 ::nnumbernb yi unh3hhhhhhhhhh!hhhhhhhhh!hhbh!bhhhh!bh3!bh!bb''''b''hbbbhbhh!h'h!hgv hhh' h!!b!':hbbbnn'ń':::Objectj2 ! h3hhhhh) {
b hh!h3hh    acc[currentVal[0][0]] = [];
    acc[currentVal[0][0]].push(currentVal);
  } else {
    acc[currentVal[0][0]].push(currentVal);
  }
  return acc;
  }, {})
 console.log(x);
```

-   [ ] **T-057**: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.
-   [ ] **T-058**: Find the median of [5, 2, 9, 1, 3, 6, 8].
### Solved!
```js
const nums = [5, 2, 9, 1, 3, 6, 8];
let median;
nums.sort((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
});
const n = nums.length;
if (n % 2 !== 0) {
    median = nums[(n + 1) / 2 - 1];
} else {
    median = (nums[n / 2] + nums[n / 2 + 1]) / 2;
}
console.log(median); // 5

```
-   [ ] **T-059**: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
### Solved!
```js
const myArr = [
    ["a", 1],
    ["b", 2],
    ["c", 3]
];

const obj = myArr.reduce((acc, cVal) => {
    const [key, val] = cVal;
    acc[key] = val;
    return acc;
}, {});
console.log(obj);

```
-   [ ] **T-060**: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].
### Solved!
```js
const arr = [
    ["a", "b"],
    ["c", "d"]
];

const flattenArray = arr.flatMap(([a, b]) => {
    return [a.toUpperCase(), b.toUpperCase()];
});
console.log(flattenArray);

```
-   [ ] **T-061**: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
-   [ ] **T-062**: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']
### Solved!
```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const slicedArray = arr.slice(1, 4);
console.log(slicedArray); // ['b', 'c', 'd']
```
-   [ ] **T-063**: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
### Solved!
```js
const nums =  [9, 3, 1, 6, 8];
const sortedInAccendingOrder = nums.toSorted((a, b) => {
  return a === b ? 0 : a > b ? 1 : -1;
});
console.log(sortedInAccendingOrder);
```
-   [ ] **T-064**: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()
### Solved! 
```js
const nums = [1, 2, 3, 4, 5];
const reversedNums = nums.toReversed(); // dont change the source Array. 
console.log(reversedNums); // [5, 4, 3, 2, 1];
console.log(nums); // [1, 2, 3, 4, 5];
nums.reverse(); // change the source array.
console.log(nums); // [5, 4, 3, 2, 1]
```
-   [ ] **T-065**: Group the follwing array elements based on age(Adult vs Non-Adult):

```js
const users = [
    { name: "Alice", age: 55 },
    { name: "Bob", age: 3 },
    { name: "Charlie", age: 25 }
];
```
### Solved!
```js
const users = [
    { name: "Alice", age: 55 },
    { name: "Bob", age: 3 },
    { name: "Charlie", age: 25 }
];
const groupByAge = Object.groupBy(users, ({age}) => {
  return age >= 18 ? "Adult" : "Non-Adult";
});
console.log(groupByAge);
```
-   [ ] **T-066**: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".

### Solved! but...
```js
const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";

let firstLargestWord = sentence         .split(" ")
      .reduce((acc, cVal) => {
        if (acc.length < cVal.length) {
          acc = cVal;
        }
        return acc;
      }, "");

console.log(firstLargestWord); // "JavaScript"
```
> There are multiple world which length is same. So, I find the first Largest World

-   [ ] **T-067**: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
### Solved!
```js
const arr1 = [1, 2, 3, 4]
const arr2 = [3, 4, 5, 6];

let commonElems = [];
arr2.forEach((elem) => {
  if (arr1.includes(elem)) {
    commonElems.push(elem);
  }
})
console.log(commonElems); // [3, 4]
```