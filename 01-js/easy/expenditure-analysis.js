/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let expenses = [];
  transactions.forEach(element => {
    let {category,price} = element;
    let existingExpense = expenses.find(element => element.category === category)
    if(existingExpense){
        existingExpense.totalSpent+=price;
    }
    else {
      let totalSpent = price;
      expenses.push({category,totalSpent});
    }
  });
  return expenses;
}

module.exports = calculateTotalSpentByCategory;
