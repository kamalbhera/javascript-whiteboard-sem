/* Pseudocode
1. Initialize an empty array call it zeroArr, initialize a second empty array call it nonZeroArr
2. Loop through the array and make if statement to check if array element at current index is equal to 0. If so, push into zeroArr
3. If array element at current index is not equal to 0, push into nonZeroArr.
4. get the length of nonZeroArr and set it to a variable called nonZeroNums
5. Concat nonZeroArr to zeroArr array so that the nonZero numbers appear first.
6. Return nonZeroNums to get how many non-zero numbers there are.
 */

const zerosToTheRight = arr => {
    let zeroArr = [];
    let nonZeroArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr.push(arr[i]);
        } else {
            nonZeroArr.push(arr[i]);
        }
    }
    let nonZeroNums = nonZeroArr.length;
    let zerosToRightArr = nonZeroArr.concat(zeroArr);
    console.log(zerosToRightArr);
    return nonZeroNums;
}

/* Pseudocode for in place re-arrangement of 0s to mutate the original array.
1. Initialize an empty array, call it nonZeroArr.
2. Loop through the input array and make an if statement to check if current array element at current index does not equal zero. If so,
get that element by storing in a variable called nonZeroNum and push nonZeroNum into nonZeroArr at every iteration.
3. Outside for loop, get the number of non-0 numbers by getting length of nonZeroArr array and set it to variable called nonZeroAmount
4. Loop through the nonZeroArr and unshift each element at current index into input arr.
5. console.log input arr.
6. Return nonZeroAmount
 */

// const zerosToTheRight = arr => {
//     let nonZeroArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             let nonZeroNum = arr.splice(i, 1);
//             console.log(nonZeroNum);
//             nonZeroArr.push(nonZeroNum);
//         }
//     }
//     console.log('only zeros', arr);
//     let nonZeroAmount = nonZeroArr.length;
//     for (let i = 0; i < nonZeroArr.length; i++) {
//         arr.unshift(nonZeroArr[i]);
//     }
//     console.log(arr);
//     return nonZeroAmount;
// }

console.log(zerosToTheRight([0, 3, 1, 0, -2])); // 3
console.log(zerosToTheRight([4, 2, 1, 5])); // 4