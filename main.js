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
  console.log(averagePrice);






// 2) Display items between $14 and $18 USD

var currencyType = 'USD';
var minPrice = 14;
var maxPrice = 18;

  // Set up filter conditions
function checkPrice(item){
      if (item.currency_code == currencyType && item.price > minPrice && item.price < maxPrice){
        return item;
      }
}
  // apply filter
var filteredCost = items.filter(checkPrice);

var filteredCostItems = filteredCost.map(function(item){
  return item.title;
})

console.log("Items that cost between $14.00 USD and $18.00 USD:", filteredCostItems);






// 3) Find item with GBP currency and display

  // Set up filter conditions
function checkCurrency(item){
      if (item.currency_code == "GBP"){
        return item;
      }
}

var filteredCurrency = items.filter(checkCurrency);

    // Answer
console.log(filteredCurrency[0].title,"costs £"+filteredCurrency[0].price);






//  4) Show me how to find which items are made of wood. Please console.log the ones you find.

items.map(function(item,index,array){
  var materialsArray = item.materials;
  // console.log(index,materialsArray);

  if( materialsArray.includes('wood') == true){
      // answer
      console.log(item.title)
      return item.title;
    }
})



// 5) Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

var materialsNum = 8;

// Set up filter conditions
function checkMatCount(item){
    if (item.materials.length >= materialsNum){
      return item;
    }
}

var filteredMatCount = items.filter(checkMatCount);

var matCountDisplay = filteredMatCount.map(function(item){
  return item.title + " : " +item.materials;
});

  // answer
console.log(matCountDisplay);



// 6) Show me how to calculate how many items were made by their sellers
var homeMade = 0;

items.map(function(item){
  if (item.who_made == 'i_did')
  homeMade += 1;
  }
)

  // answer
console.log(homeMade);











}());
