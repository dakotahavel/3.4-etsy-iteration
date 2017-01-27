(function(){
  "use strict"

  // 1) Display average price


// viewing the prices
  // items.forEach(function(item){console.log(item.price)});

// creating array of item prices
  var pricesArray = items.map(function(item){
    return item.price
  });
  // console.log(pricesArray);

  // using map to sum prices then taking average by dividing by number of prices
  var averagePrice = "The average price is $"+
  (pricesArray.reduce(function(subtotal,eachPrice){
    var sum = subtotal + eachPrice;
    return sum;
  }) / pricesArray.length).toFixed(2);

  // Answer
  // console.log(averagePrice);

// ================================

// 2) Display items between $14 and $18 USD

 // I tried it the hard way to start.... used filter below

// creating array of item
//   var itemsBetween = items.map(function(item){
//     var itemsBetweenArray = [];
//     if (item.currency_code == "USD" && item.price > 14 && item.price < 18){
//       // console.log(item.title, item.description);
//
//       itemsBetweenArray.push(item.title,item.description)
//       // console.log(itemsBetweenArray);
//       // return itemsBetweenArray;
//
//     }
//     return itemsBetweenArray;
//
//   });
// console.log(itemsBetween);

  // Set up filter conditions
function checkPrice(item){
      if (item.currency_code == "USD" && item.price > 14 && item.price < 18){
        return item;
      }
}
  // apply filter
var filteredCost = items.filter(checkPrice);

 // --- answer
// console.log("Items that cost between $14.00 USD and $18.00 USD:", filtered);




  // 3) Find item with GBP currency and display

  // Set up filter conditions
function checkCurrency(item,minPrice){
      if (item.currency_code == "GBP" && item.price> minPrice){
        return item;
      }
}

var filteredCurrency = items.filter(checkCurrency);
// console.log(filteredCurrency[0]);

console.log(filteredCurrency[0].title,"costs £"+filteredCurrency[0].price);






















}());
