/* Pseudocode strategy 1:
To get a certain sum of two numbers in an array we can use hashtable to store each number as we iterate through array
We can then subtract that number from the given input integer and check if hashtable has that difference.
1. declare an empty object call it hashtable, declare empty array, call it twoSumArr
2. loop through the array, get the integer at current index, call it currentInt.
3. Subtract currentInt from input parameter integer and set it to a variable called difference 
4. Make if statement if currentInt not in hashtable, put the currentInt as key of the hashTable and difference as it's value. 
5. Make if statement to check whether the difference is present as a key in hashtable, if so, push the key value pair into twoSumArr array.
6. Return twoSumArr array. 
 */

// Using hashtable which is O(n) time complexity
// const integerPairs = (arr, sumInt) => {
//   let hashTable = {};
//   let twoSumArr = [];
//   let len = arr.length;

//   for (let i = 0; i < len; i++) {
//     let currentInt = arr[i];
//     let difference = sumInt - currentInt;

//     if (!hashTable[currentInt]) {
//       hashTable[currentInt] = difference;
//     }

//     if (hashTable[difference]) {
//       twoSumArr.push([currentInt, hashTable[currentInt]]);
//     }
//   }
// //   console.log(hashTable);
//   return twoSumArr;
// };

// Using a for loop within a for loop with O(n^2) time complexity
/* Pseudocode
1. Initialize an empty array, call it twoSumArr
2. loop through the array, starting at 0, ending at 1 element before last.
3. Make a second inner for loop through the array inside first loop, starting at 1 index after first outer for loop and ending at last array
element this time. 
4. Make if statement, check whether element at current index of outer for loop + current index of inner for loop equals the input integer. 
If so, push those two integers into the twoSumArr array
5. Return twoSumArr
 */
// const integerPairs = (arr, sumInt) => {
//   let len = arr.length;
//   let twoSumArr = [];

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] + arr[j] == sumInt) {
//         twoSumArr.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return twoSumArr;
// };

// Another solution with hash table approach using forEach instead
/* Pseudocode:
1. Initialize an empty object, call it hashTable.
2. Initialize an empty array, call it twoSumArr
3. Loop through the input array with forEach method, first parameter in callback function of forEach method will be the current element
in the array at the current index, and the second parameter will be the current index.
4. Inside the forEach method, make if statement to check if difference between input integer from main function and current element integer 
in the array exists in hashTable as a key. If so, push the current elment and that difference into the twoSumArr array. 
5. Else, set the current element as a key in the hashTable and set it's value to current index + 1
6. Return twoSumArr 
 */
const integerPairs = (arr, inputSum) => {
    let hashTable = {};
    let twoSumArr = [];

    arr.forEach((eachElement, index) => {
        if (hashTable[inputSum - eachElement]) {
            twoSumArr.push([eachElement, inputSum - eachElement]);
        } else {
            hashTable[eachElement] = index + 1;
        }
    });
    return twoSumArr;
}

console.log(integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // '6 5', '7 4', '8 3', '9 2', '10 1'
console.log(integerPairs([5, 5, 4], 12));  
console.log(integerPairs([99, 45, 38, 1, 68, 78], 100));
