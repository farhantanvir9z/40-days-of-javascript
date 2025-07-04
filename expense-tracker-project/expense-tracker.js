function createExpenseTracker(userName = "", initialBudget = 0) {
  let expenses = [];
  let id = 0;
  return {
    name: userName,
    budget: initialBudget,
    addExpense: function (amount = 0, catagory = "", description = "") {
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
        console.log(expenses)
      }
    } catch (error) {
      console.error(error.message);
    }
    },
   getTotalExpenses: function () {
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
   getHighestExpense: function (){
     
   },
   getLowestExpense: function (){
     
   },
  getAllExpenses: function (){
    
  },
  getUserInfo: function () {
    
  },
  updateUserInfo: function () {
    
  }
}
}
const user = createExpenseTracker("Farhan", 20000);
console.log(user);
