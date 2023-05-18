/* Pseudo code:
1) Initialize a variable for number of rows, call it numRows and set it to the length of the matrix. 
2) Initialize a variable for number of columns, call it numCols and set it to length of the first array in matrix (number of elements
    in matrix).
3) Initialize a variable for first top row in matrix, call it topRow and set it to 0.
4) Initialize a variable for bottom row, call it bottomRow and initialize it to numRows - 1 (length of matrix - 1)
5) Initialize a variable for left column, call it leftCol & initialize it to 0 (we're starting from 0th index, from left).
6) Initialize a variable for right colunn, call it rightCol & initialize it to numCols - 1 (last column from length of first array
    in matrix minus 1).
7) Initialize an empty array, call it results
8) Make a while loop, while topRow is less than or equal to bottomRow and leftCol is less than or equal to rightCol. 
9) Make a for loop to iterate through first row, left to right with i starting at leftCol, i less than or equal to rightCol, i++, and
from matrix, get matrix[topRow][i] and push it into results array
10) Increment top row with topRow++ so we move on to next row as the next top row. 
11) Make a second for loop to iterate through last column top to bottom, start i at topRow, i less than or equal to bottom row, i++, 
and from matrix now get matrix[i][rightCol] and push it into results array.
12) Decrement right column with rightCol-- b/c we're done with rightmost column, move one column to the left for next rightmost column
13) We have to make an if statement where if topRow is less than or equal to bottomRow otherwise while loop will run one itertion 
before stopping. So, inside the if statement write the third for loop to get the bottom row values right to left.
14) Make third for loop to get the bottom row values right to left with i starting at rightCol, i more than or equal to leftCol, i--, 
and from matrix now get matrix[bottomRow][i] and push it into results array.
15) Increment bottom row with bottomRow++ (outside for loop) since we are done with bottom most row so next bottom most row has to be
a row above the previous bottom most row.
16) Make another if statement to check that if left column is still less than or equal to right column, otherwise while loop will still
run one iteration before stopping. 
17) Make the fourth and last for loop inside the if statement where i starts at bottomRow, i more than or equal to top row, i--,
and from matrix now get matrix[i][leftCol] and push it into resuls array.
18) Increment left column with leftCol++ b/c we're done with the leftmost column so the next column right of the leftmost column will
be the new leftmost column. 
19) The while loop will repeat itself for the inner parts of the arrays in matrix until top row becomes more than bottom row and left
column becomes more than right column.
 */

const matrixSpiralCopy = inputMatrix => {
  let numRows = inputMatrix.length;
  let numCols = inputMatrix[0].length;

  let topRow = 0;
  let bottomRow = numRows - 1;
  let leftCol = 0;
  let rightCol = numCols - 1;

  let results = [];

  while (topRow <= bottomRow && leftCol <= rightCol) {
    for (let i = leftCol; i <= rightCol; i++) {
      results.push(inputMatrix[topRow][i]);
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      results.push(inputMatrix[i][rightCol]);
    }
    rightCol--;

    if (topRow <= bottomRow) {
      for (let i = rightCol; i >= leftCol; i--) {
        results.push(inputMatrix[bottomRow][i]);
      }
      bottomRow--;
    }

    if (leftCol <= rightCol) {
        for (let i = bottomRow; i >= topRow; i--) {
            results.push(inputMatrix[i][leftCol]);
        }
        leftCol++;
    }
  }
  return results;
};

console.log(matrixSpiralCopy(
    [[1]]
  ));   // should print [1]
  
  console.log(matrixSpiralCopy(
    [[1], [2]]
  ));   // should print [1, 2]
  
  console.log(matrixSpiralCopy(
    [[1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]]
  ));   // should print [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
  console.log(matrixSpiralCopy(
    [[1, 2]]
  )); // should print [1, 2];
