"use strict";
function createExpenseTracker(userName = "", initialBudget = 0) {
  let expenses = [];
  let id = 0;
  return {
    name: userName,
    budget: initialBudget,
    addExpense: (amount = 0, catagory = "", description = "") => {
    try {
      if (isNaN(amount)) {
        throw new Error("Invalid Input. Amount must be a number.");
      } else if (amount < 0) {
        throw new Error("Invalid Amount. Amount must be greater than 0");
      } else if (catagory === ""){
        throw new Error("Catagory is empty. Please, write catagory.")
      } else {
        expenses.push({
          id: ++id,
          amount,
          catagory,
          description
        });
        console.log(`Now,  You expend ${amount} BDT`)
      }
    } catch (error) {
      console.error(error.message);
    }
    },
   getTotalExpenses: () => {
   let expenseArray = [];
     if (expenses.length === 0) {
       console.log(`Your total expenses is: 0 BDT.`);
     } else {
      expenses.forEach(obj => {
         expenseArray.push(obj["amount"]);
       });
      let totalExpenses = expenseArray.reduce((acc,currentVal) => {
         acc += currentVal;
         return acc;
       },0);
      console.log(`Your total expenses is: ${totalExpenses} BDT.`)
     }
   },
   getHighestExpense: () => {
     let expenseArray = [];
     if (expenses.length === 0) {
       console.log(`you did nit expend anything yet!`);
     } else {
      expenses.forEach(obj => {
         expenseArray.push(obj["amount"]);
       });
     }
   const highestExpense =   expenseArray.reduce((acc,currentVal) => {
       acc = (acc < currentVal) ? currentVal : acc;
       return acc;
     }, -Infinity);
   console.log(highestExpense);
   },
   getLowestExpense: () => {
     let expenseArray = [];
     if (expenses.length === 0) {
       console.log(`you did nit expend anything yet!`);
     } else {
      expenses.forEach(obj => {
         expenseArray.push(obj["amount"]);
       });
     }
   const lowestExpense =   expenseArray.reduce((acc,currentVal) => {
       acc = (acc > currentVal) ? currentVal : acc;
       return acc;
     }, Infinity);
     console.log(lowestExpense);
   },
   getAllExpenses: () => {
    console.log(expenses)
  },
   getUserInfo: function () {
    console.log({
      name: this.name,
      budget: this.budget
    })
  },
  updateUserInfo: function (userName, budget) {
   try {
     if (!userName) {
       throw new Error("Please, write the username which you want to update with.")
     } else if (!budget){
       throw new Error("Please, write the budget which you want to update with.")
     } else if (isNaN(budget)) {
       throw new Error("Invalid amount. Please, write a valid amount (Number).");
     } else if (budget < 0) {
       throw new Error("Please, write an amount more than 0")
     } else {
       this.name = userName,
       this.budget = budget
     }
   } catch (error) {
     console.error("an error occured:", error.message)
   }
    
  }
}
}
const user = createExpenseTracker("Farhan", 20000);
user.addExpense(29,"dress")
user.addExpense(90,"dress")
user.addExpense(150,"dress")
user.addExpense(200,"dress")
user.addExpense(10,"dress")
console.log(user);

