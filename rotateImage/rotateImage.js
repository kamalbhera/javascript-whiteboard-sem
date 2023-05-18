/* Pseudocode for rotating matrix counter-clockwise
1. loop through the matrix (perhaps with forEach) and reverse the arrangement of the elements in each of the arrays in the matrix 
with .reverse() array method
2. Make another for loop (outside the previous one), loop through the now reversed matrix, starting at 0, ending at last array in 
matrix with i < matrix.length
3. Make a second for loop starting at 0 and this time ending at 1 less than the index from the outer for loop (j < i). This will start
the inner loop at 0 but the outer loop can't start at 0 anymore it has to start at 1 since the inner loop will always be less than 
outer loop and it has to start at 0. 
4. Array destructure to swap [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]. This will swap diagonally bottom left to 
top right but leave the diagonal element top left to bottom right. 
5. Return matrix outside for loops. 
 */

 // Rotating matrix counter-clockwise
const rotateImageCounterClockwise = matrix => {
  matrix.forEach(eachRowArr => eachRowArr.reverse());
  // console.log(matrix);

  for (let i = 0; i< matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
}

matrix1 = [
    [1, 2],
    [3, 4]
  ];

matrix2 = [
    [1, 1, 5, 9, 9],
    [2, 2, 6, 0, 0],
    [3, 3, 7, 1, 1],
    [4, 4, 8, 2, 2],
    [5, 5, 9, 3, 3]
  ]

console.log(rotateImageCounterClockwise(matrix1)); // should return 
/* [ 
  [2, 4],
  [1, 3]
] */
console.log(rotateImageCounterClockwise(matrix2)); // should return
/*[ 
    [ 9, 0, 1, 2, 3 ],
    [ 9, 0, 1, 2, 3 ],
    [ 5, 6, 7, 8, 9 ],
    [ 1, 2, 3, 4, 5 ],
    [ 1, 2, 3, 4, 5 ]
  ]*/

matrix3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotateImageCounterClockwise(matrix3)); // should return 
/*matrix3 = [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7]
] */

/* Pseudocode for rotating matrix clockwise
1. Reverse the arrangement of the arrays in the matrix (not the elements within each matrix but the whole arrays themselves)
2. Loop through the matrix with for loop.
3. Make a second inner for loop inside the previous first for loop, starting at 0 and ending at less than index in outer first for 
loop (j < i).
4. Array destructure to swap [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
5. Return matrix.
 */

const rotateImageClockwise = matrix => {
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
}

console.log(rotateImageClockwise(matrix1)); // should return 
/* [ 
  [3, 1],
  [4, 2]
] */

console.log(rotateImageClockwise(matrix2)); // should return 
/*[
  [5, 4, 3, 2, 1],
  [5, 4, 3, 2, 1],
  [9, 8, 7, 6, 5],
  [3, 2, 1, 0, 9],
  [3, 2, 1, 0, 9]
] */

console.log(rotateImageClockwise(matrix3)); // should return
/*[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
] */