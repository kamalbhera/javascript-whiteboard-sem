/* Pseudocode
1. Loop through the matrix to get each array with i being index.
2. Make a second inner for loop inside previous for loop to loop through each element in each array with j being the index this time
3. if input parameter is equal to current element at current index, return ([i , j]);
 */

// Solution with O(n^2) time complexity:
// const searchInSortedMatrix = (inputMatrix, num) => {
//     let matrixLen = inputMatrix.length;
    
//     for (let i = 0; i < matrixLen; i++) {
//         for (j = 0; j < inputMatrix[i].length; j++) {
//             if (inputMatrix[i][j] === num) {
//                 return [i, j];
//             }
//         }
//     }
//     return [-1, -1];
// }

// Solution with O(n + m) time complexity:
// -start at northeast corner and if current element is bigger than input target element, we'll go left in the column.
// - otherwise, if the current element is smaller than input target element, we'll go down to the next row at the higher index
/* Pseudocode:
1. start at the northeast corner which contains the higest value from the first row but the lowest value from the last column. 
2. Declare a variable called row and set it to 0 since we'll start at the first row.
3. Declare a variable called column and set it to inputMatrix[0].length - 1 since we'll start from the last row. 
4. To go left a column or down a row, do a while loop of while row is less than inputMatrix.length and column is greater than or equal to 0.
5. make if statement, where if current element at inputMatrix[row][column] is larger than input target element go left a column with column--.
6. Otherwise, else if current element at inputMatrix[row][column] is smaller than input target element go down a row with row+= 1.
7. Otherwise, else (if inputMatrix[row][column] == input target element) return row and column with [row, column].
8. Outside while loop, return [-1, -1] if the target element is not found. 
 */
const searchInSortedMatrix = (inputMatrix, num) => {
    let row = 0;
    let col = inputMatrix[0].length - 1;

    while (row < inputMatrix.length && col >= 0) {
        if (inputMatrix[row][col] > num) {
            col--;
        }
        else if (inputMatrix[row][col] < num) {
            row++;
        } else {
            return [row, col];
        }
    }
    return [-1, -1];
} 


const matrix1 = [
    [1, 4, 7, 12, 15, 997, 999],
    [2, 5, 19, 32, 35, 1001, 1007],
    [4, 8, 24, 34, 36, 1008, 1015],
    [40, 41, 42, 44, 45, 1018, 1020],
    [98, 99, 101, 104, 190, 1021, 1025],
]

const matrix2 = [ 
    [1, 4, 7, 12, 15, 999], 
    [2, 5, 19, 32, 35, 1001], 
    [4, 8, 24, 34, 36, 1002], 
    [40, 41, 42, 44, 45, 1003], 
    [98, 99, 101, 104, 190, 1009], 
];

console.log(searchInSortedMatrix(matrix1, 45)); // [3, 4]
console.log(searchInSortedMatrix(matrix2, 1));    // should print [0, 0]
console.log(searchInSortedMatrix(matrix2, 7));    // should print [0, 2]
console.log(searchInSortedMatrix(matrix2, 999));  // should print [0, 5]
console.log(searchInSortedMatrix(matrix2, 1001)); // should print [1, 5]
console.log(searchInSortedMatrix(matrix2, 104));  // should print [4, 3]
console.log(searchInSortedMatrix(matrix2, 1010)); // should print [-1, -1]
