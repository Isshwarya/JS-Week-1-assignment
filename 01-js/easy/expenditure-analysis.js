/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let report = {};
  transactions.forEach((transaction) => {
    if (!(transaction.category in report)) {
      report[transaction.category] = 0;
    }
    report[transaction.category] += transaction.price;
  });
  let ans = [];
  for (const [key, value] of Object.entries(report)) {
    ans.push({ category: key, totalSpent: value });
  }
  //Object.keys(report).forEach(function(key) {...})
  //for (var key in report){...}
  return ans;
}

module.exports = calculateTotalSpentByCategory;

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: "Park",
    itemName: "parking",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 20,
    category: "Park",
    itemName: "Food",
  },
];

console.log(
  JSON.stringify(calculateTotalSpentByCategory(transactions), null, "\t")
);
