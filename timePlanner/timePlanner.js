/*Pseudocode:
- Get the end time of person b from matrix, push into new array no need to sort since each array are apparently already sorted
- Get the begin time of person a from matrix no need to sort since each array are apparently already sorted
- Check if (end time for person b) - (begin time of person a) is more than or equal to duration. If so, then return in an array: 
[begin time of person b, (begin time of person b) + duration]

1. Initialize an empty array to contain begin times of person a, call it personStartA
2. Initialize an empty array to contain end times of person b, call it PersonEndB.
3. Initialize an empty object to contain begin times of person b as values with keys being the end times of that person b, call it 
beginObjB
4. Loop through first Matrix, and make an if statement check if (2nd number in array of current element) - (1st number in array of current
element) is more than or equal to duration, then push the first element from each matrix array into the personStartA array.
5. Outside previous for loop, make a another 2nd for loop (separate for loop not innner) and loop through matrix of personB and push the 
second array element from each array element in the matrix into the personEndB array and if it does not exist as key in beginObjB, then 
make this element as a key in beginObjB and set its value to its begin time from the person B matrix.
6. Make a third (separate not inner) for loop to loop throug the begin times array from personStartA array and make an inner for loop inside 
this for loop to loop through end times of array from personEndB. 
7. Make if statement if the current end time from inner loop minus current start time from outer loop and (&&) current end time from inner 
loop minus the start time value of this current element key from the beginObjB is more than or equal to duration then 
return in an array: the start time of person b from inner loop from the beginObjB value whose key is the current element, this current start
time value + duration.
 */

// My own solution but time complexity is O(2n + n^2) => ~O(n^2 + n) which is highly inefficient.

// const timePlanner = (matrixA, matrixB, duration) => {
//   let personStartA = [];
//   let personEndB = [];
//   let beginObjB = {};

//   for (let i = 0; i < matrixA.length; i++) {
//     if (matrixA[i][1] - matrixA[i][0] >= duration) {
//       personStartA.push(matrixA[i][0]);
//     }
//   }
//   for (let i = 0; i < matrixB.length; i++) {
//     if (matrixB[i][1] - matrixB[i][0] >= duration) {
//       personEndB.push(matrixB[i][1]);
//     }

//     if (!beginObjB[matrixB[i][1]]) {
//       beginObjB[matrixB[i][1]] = matrixB[i][0];
//     }
//   }

//   for (let j = 0; j < personStartA.length; j++) {
//     for (let k = 0; k < personEndB.length; k++) {
//       if (
//         personEndB[k] - personStartA[j] >= duration &&
//         personEndB[k] - beginObjB[personEndB[k]] >= duration
//       ) {
//         return [beginObjB[personEndB[k]], beginObjB[personEndB[k]] + duration];
//       }
//     }
//   }
//   return [];
// };

// Solution 2: Keep a pointer for traversing through each array element in each matrix giving O(n) time complexity, O(1) space complexity
/*Pseudocode:
1. Initialize a variable called aCount and set it to 0, this will be the pointer for first matrix time points.
2. Initialize a variable called bCount and set it to 0, this will be the pointer for the second matrix time points
3. Make a while loop of while aCount pointer is less than first matrix or matrix a and second pointer or bCount is less than length of second
matrix or matrix b. This is so the while loop will end once we reach the end of one of the matrices or it meets our conditions to return what
we want.
4. At the current index of matrix a and matrix b, find the current element with the highest start time or latest start time in current
array between matrix a and b with Math.max method.
5. Also, at the current index of matrix a and b, find the earliest or lowest end time in the current array between matrix a and b with 
Math.min method.
6. Make an if statement, check if the difference between earliest end time minus latest start time is more than or equal to duration. If so,
return that start time and that start time + duration in an array.
7. Otherwise, if the latest start time and the earliest end time at a current array time point at current index is not enough time for the 
duration, go to the next higher or later end time.
8. Make another if statement, outside the current if statement but still inside the while loop. Check if the end time is lower or earlier 
in first matrix compared to second matrix. If so, go to the next array element in the first matrix, so, go to the array with the later
end time in that matrix that has too early an end time. 
9. Otherwise, if the end time in first matrix is higher than second matrix or second matrix end time is earlier than first matrix end time,
go to the next later end time array in the second matrix instead, to see if we can find a higer duration time there.
10. While loop and 2 first statments will keep checking if theres is a time frame between start and end in both matrices where duration can
be met and the two times can agree and if too short, that shorter end time matrix will go to the next array element to find a later higher 
end time array.
11. Outside, while loop, return an empty array if all array elements are done traversing but our condition isn't met.     
 */

const timePlanner = (matrixA, matrixB, duration) => {
  let indexA = 0;
  let indexB = 0;

  while (indexA < matrixA.length && indexB < matrixB.length) {
    let start = Math.max(matrixA[indexA][0], matrixB[indexB][0]);
    let end = Math.min(matrixA[indexA][1], matrixB[indexB][1]);

    if (end - start >= duration) {
      return [start, start + duration];
    };

    if (matrixA[indexA][1] < matrixB[indexB][1]) {
      indexA++
    } else {
      indexB++
    };
  };
  return [];
}

// Tests
console.log(
  timePlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 8)
); // should print [60, 68]

console.log(
  timePlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 72]], 12)
); // should print [60, 72]

console.log(
  timePlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 12)
); // should print []

console.log(timePlanner([[0, 5], [50, 70], [120, 125]], [[0, 50]], 8)); // should print []
