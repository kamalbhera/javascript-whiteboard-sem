/*Pseudocode:
1. Initialize a variable called index and set it to 0 
2. Initialize a variable called count and set it to 0.
3. Make a while loop of while index is less than the length of the array.
4. Make if statement, check if next element at index of the sum of array element at index (0 for first round for first element) + index
is not equal to 0 then set index to that next element and set element to array element at that next index. Increment count by 1
5. Else if, (if element at array index + index is equal to 0) then set index
 */


// My own solution: Time complexity O(n);
const minJumps = arr => {
  let index = 0;
  let count = 0;

  while (index <= arr.length - 1) {
    if (arr[index + arr[index]] === 0) {
      if (index !== 0) {
        index--;
        index = arr[index + arr[index]];
      } else {
        return "infinity";
      }
    } else if (arr[index + arr[index]] !== 0) {
      index = arr[index + arr[index]];
      // count++;
    }

    count++;
  }
  return count + 1;
};

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])); // should print 3
console.log(minJumps([1, 3, 6, 1, 0, 9])); // should print 3
console.log(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1])); // should print Infinity
console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5])); // should print 4

// minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1]);
