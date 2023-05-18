// My own solution: time complexity of O(n^2)
/*Pseudocode:
1. Get the first element from the input array and set it to a variable called buyPrice
2. Get the second element from the input array and set it to a variable called sellPrice.
3. Get the difference between first and second element by subtracting buyPrice from sellPrice and set it to a variable called maxProfit
4. Make a for loop, loop through the array starting at index i of 1 and ending at array length minus 1 (ending at 2nd to last element) 
5. Make an inner for loop inside previous loop, starting at index j of i+1 and ending at the last element (j < arr.length)
6. Inside inner j for loop, make an if statement, check if element at array index j minus element at array index i is more than maxProfit then 
re-set maxProfit to that new difference.
7. Outside both for loops, return the newly updated maxProfit.
 */

// const findMaxProfit = arr => {
//   let buyPrice = arr[0];
//   let sellPrice = arr[1];
//   let maxProfit = sellPrice - buyPrice;

//   for (let i = 1; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       // console.log('i: ', arr[i]);
//       // console.log('j: ', arr[j]);
//       // console.log('maxProfit: ', maxProfit);
//       if (arr[j] - arr[i] > maxProfit) {
//         maxProfit = arr[j] - arr[i];
//       }
//     }
//   }
//   return maxProfit;
// };

// My own solution: O(4n) time complexity --> O(n) time complexity
/*Pseudocode:
1. Set a variable called maxProfit and set it equal to the second element from input array minus the first element from input array
2. Get the minimum value element from the input array using Math.min method w/ spread operator and set it to a variable called potentialBuyPrice.
3. Get the index of the potentialBuyPrice from input array using indexOf method, and set it to a variable called buyPriceIndex
4. Make an if statement, check if buyPriceIndex is array length minus 1 from input array (it's the last element from input array) then decrement
buyPriceIndex by 1.
5. Still inside if statement, re-set potentialBuyPrice by setting it equal to the value from currently re-set index of buyPriceIndex from input 
array.
6. Make a for loop starting at index i of buyPriceIndex, ending at more than or equal to 0 and decrementing i (reverse for loop going backwards).
7. Inside for loop, make an if statement, check if current element at current index of i is less than potentialBuyPrice and if so, then reset 
potentialBuyPrice to the element at this current index from input array.
8. Outside previous for loop and if statement, make a second independent for loop, starting at one index after index of current potentialBuyPrice 
and ending right before length of array (all the way to last element). 
9. Inside the for loop, make an if statement of if current array element at current index minus potentialBuyprice is more than maxProfit then reset
maxProfit to this new difference.
10. Outside for loop, return maxProfit
 */
// const findMaxProfit = arr => {
//   let maxProfit = arr[1] - arr[0];
//   let potentialBuyPrice = Math.min(...arr);
//   let buyPriceIndex = arr.indexOf(potentialBuyPrice);
//   // console.log(buyPriceIndex);

//   if (buyPriceIndex == arr.length - 1) {
//     buyPriceIndex--;
//     potentialBuyPrice = arr[buyPriceIndex];
//     // console.log(buyPriceIndex);
//     for (let i = buyPriceIndex; i >= 0; i--) {
//       if (arr[i] < potentialBuyPrice) {
//         potentialBuyPrice = arr[i];
//       }
//     }
//     // console.log(potentialBuyPrice);
//   }
//   let sellPriceIndexStart = arr.indexOf(potentialBuyPrice) + 1;
//   for (let i = sellPriceIndexStart; i < arr.length; i++) {
//     if (arr[i] - potentialBuyPrice > maxProfit) {
//       maxProfit = arr[i] - potentialBuyPrice;
//     }
//   }
//   return maxProfit;
// };

// Suggested Solution: O(n) time complexity
/*Pseudocode:
first get the difference between current element in loop iteration and first array element if difference is higher, then re-set the minimum price
to current element if current element is lower
1. Get the first element from the input array and set it to a variable called minPrice
2. Get the difference between first and second array elements by subtracting 1st array element (buy price) from 2nd array element (sell price) and
set it to a variable called maxProfit 
3. Make a for loop, starting at index 1 (b/c index 0 is already taken by minPrice) and ending at index of array length, loopin through whole array
4. Set the current array element at current index to a variable currentPrice.
5. Get the maximum between current maxProfit and the difference between minPrice and currentPrice with minPrice - currentPrice using Math.max 
method, and reset the maxProfit to that new maximum value
6. If currentPrice is lower than the original minPrice (originally it is the first array element) then reset the minPrice to that currentPrice 
which is the current array element at current index
7. Outside for loop, return the maxProfit. 
 */
const findMaxProfit = arr => {
  let minPrice = arr[0];
  let maxProfit = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentPrice = arr[i];
    maxProfit = Math.max(currentPrice - minPrice, maxProfit);
    minPrice = Math.min(currentPrice, minPrice);
  };
  return maxProfit;
};


/* Some console.log tests */
console.log(findMaxProfit([10, 7, 5, 8, 11, 9])); // should print 6
console.log(findMaxProfit([1050, 270, 1540, 3800, 2])); // should print 3530
console.log(findMaxProfit([100, 90, 80, 50, 20, 10])); // should print -10
console.log(
  findMaxProfit([
    100,
    55,
    4,
    98,
    10,
    18,
    90,
    95,
    43,
    11,
    47,
    67,
    89,
    42,
    49,
    79
  ])
); // should print 94
