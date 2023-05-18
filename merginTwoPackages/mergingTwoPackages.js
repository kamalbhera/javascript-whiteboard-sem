/*Pseudocode:
1. Initialize an empty object call it hashTable.
2. loop through the array and find the difference between input target weight minus current array element at current index and 
call it difference.
3. Make if statement, check if target weight minus current array element at current index (difference) is present as a key in the
hashTable object. If not, then set the difference as a key and the current element as a value in the hashTable object.
4. Make another for in loop outside the first for loop to loop through the hashTable object keys and values.
5. Make an if statment inside the inner for-in loop, check if input array includes the value from each key in the hashTable using
array indexOf method and if input array also includes that key from the hashTable. If so, then make another inner if statement
to check if index of the value is greater than the index of the key - if so then return the index of that value, first
then return the index of the key as a second element in an array.
6. Else, from inner if statement that was inside the 1st if statement, if array index of current value in hashTable is not greater
than array index of current value from hashTable then return array index of current key first then array index of current value 
from hashTable.  
7. For edge case of if input array length is less than 2 then return [].
8. For edge case of if input array contains only 2 elements and both elements sum up to equal the target weight, make an if
statement, check if array length is equal to 2 and array element at 0th index plus at 1st index equals to targetWeigth then 
return [1, 0]  
 */

// My own solution: time complexity is ~ O(3n) and space complexity of O(n);
// const getIndicesOfItemWeights = (arr, targetWeight) => {
//   let hashTable = {};

//   if (arr.length < 2) {
//     return [];
//   };

//   if (arr.length == 2 && arr[0] + arr[1] === targetWeight) {
//     return [1, 0];
//   };

//   for (let i = 0; i < arr.length; i++) {
//     let difference = targetWeight - arr[i];

//     if (!hashTable[difference]) {
//       hashTable[difference] = arr[i];
//     }
//   };
//   // console.log(hashTable);
//   for (arrItem in hashTable) {
//     if (arr.indexOf(parseInt(arrItem)) !== -1) {
//       // console.log(hashTable[arrItem], arrItem);
//       if (arr.indexOf(hashTable[arrItem]) >= arr.indexOf(parseInt(arrItem))) {
//         return [arr.indexOf(hashTable[arrItem]), arr.indexOf(parseInt(arrItem))];
//       } else {
//         return [arr.indexOf(parseInt(arrItem)), arr.indexOf(hashTable[arrItem])];
//       };
//     };
//   };
// };

// Optimized solution: Time complexity- ~O(n) ; space complexity- ~O(n) at worst, O( < n) at average:
/*Pseudocode:
1. Initialize an empty object call it hashTable
2. Loop through the array, with for loop and initialize a variable called currentElement and set it equal to current array 
element at current index
3. Initialize a variable called differenceIndex and set it to be as a key in the hashTable object, where this key difference 
will be input target number minus current element at current index.
4. Make an if statement, check if the differenceIndex key in hashTable object has a real value. If so, return in an array, 
the current array index and the value of the difference key from the hashTable object. 
5. Else (if hashTable object does not have a real value for the difference key, since initially it won't), set the current array
element at current index as a key and it's value to be the current array index. Loop will repeat itself until a difference is 
found as an array element, then it'll return the later array element index and the current difference between current 
element and input target weight and that difference's index in the array.
6. Outside for loop, return empty array if no 2 numbers in array equals the input target weight number.
 */

const getIndicesOfItemWeights = (arr, inputWeight) => {
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let differenceIndex = hashTable[inputWeight - currentElement];

    if (differenceIndex !== undefined) {
      return [i, differenceIndex];
    } else {
      hashTable[currentElement] = i
    }
  };

  return [];
}


console.log(getIndicesOfItemWeights([4, 6, 10, 15, 16], 21)); // [3 , 1]
console.log(getIndicesOfItemWeights([4, 4], 8)); // [1 , 0]
console.log(getIndicesOfItemWeights([12, 6, 7, 14, 19, 3, 0, 25, 40], 7)); // [6, 2]
console.log(getIndicesOfItemWeights([9], 9)); // []

// getIndicesOfItemWeights([4, 6, 10, 15, 16], 21)
// getIndicesOfItemWeights([4, 4], 8)
// getIndicesOfItemWeights([12, 6, 7, 14, 19, 3, 0, 25, 40], 7)
// getIndicesOfItemWeights([9], 9)
