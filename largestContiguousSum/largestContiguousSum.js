/* Pseudocode for solution
1) Initialize a variable let's call it maxSum and set it equal to a very large negative number or to -Infinity
2) Initialize a variable to equal 0 let's call it currentSum to get a sum
3) Loop through the array w/ for loop and sum up each array item integer at current index with currentSum
4) Update max sum in for loop: make an if statement to if currentSum is more than maxSum, set maxSum equal to currentSum
5) Set current sum to 0 if we encounter a negative sum: make an if statement where if currentSum is less than 0 then currentSum will
equal 0 (still inside the for loop).
6) Return maxSum outside for loop
 */
  

const largestContiguousSum = arr => {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if(currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0
        }
    }
    return maxSum;
}

  console.log(largestContiguousSum([5, -9, 6, -2, 3]));           // should print 7
  console.log(largestContiguousSum([1, 23, 90, 0, -9]));          // should print 114
  console.log(largestContiguousSum([2, 3, -8, -1, 2, 4, -2, 3])); // should print 7