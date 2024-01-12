/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var result = [];
  var categories = new Set();

  transactions.forEach(function (transaction) {
    categories.add(transaction.category);
  });

  categories.forEach(function (category) {
    var total = 0;
    transactions.forEach(function (transaction) {
      if (category === transaction.category) {
        total += transaction.price;
      }
    });
    let ans = { category: category, totalSpent: total };
    result.push(ans);
  });

  return result;
}


module.exports = calculateTotalSpentByCategory;
