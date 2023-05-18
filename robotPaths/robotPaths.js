// Suggested Solution
/*Pseudocode:
Make a helper function makeboard() to make the n x n matrix board:
makeboard Function:

1. Function takes in size of grid called n as a parameter.
2. Initialize an empty array set it to a variable called board.
3. To make the board, make a for loop starting at index i of 0, ending at less than size of grid n and increment i.
4. In above for loop, push an empty array to the board array for each iteration of i (this'll make the matrix).
5. Inside above for loop, make another (nested) for loop, again starting at index j of 0, ending at j less than size of grid n and incrementing j
6. Inside nested for loop, push false into the board matrix at each index of i position. This will insert false n times into each inner array (
  where the inner array count is also n times).
7. Add a method called toggle to the board array where the method will take input parameters of i and j to designate x and y coordinates in the 
matrix
8. Inside toggle method, take the value at position of i then j in the board matrix and turn the value to opposite of what it was at that position
9. Outside toggle method, add another method to the board matrix called, haveBeenVisited which will also take in parameters of i and j which will
denote the x and y positions of the board matrix
10. Inside haveBeenVisited method, just return the value from board matrix at the i then j position
11. At the end return board matrix.

Actual function is robotPaths which takes in the n number of grids as a parameter
robotPaths function:

1. Call the makeboard helper function passing in the input n number of grids as a parameter to this helper function and set it to a variable called
board.
2. Make a variable called pathCount and initialize it to 0 for now
3. Inside main robotPaths function, make a helper function called traversePaths which will take in i and j parameters to denote the i and j 
positions in the board matrix (i is x axis or the array number in matrix, j is y axis or position of the value in each inner i array).
4. Inside traversePaths inner function, make an if statement of if i is eqal to n minus 1 AND j is equal to n minus 1 (so we reachd the other 
  corner rightmost and bottom most corner of the board) then increment pathCount by 1 and return to end the function.
5. Still inside traversePaths function, make another if statement, check if i or j is less than 0, or i or j is more than or equal to n grid size
then just return to end the function (this will check if we are out of bounds of the matrix)
6. Still inside traversePaths function, make another if statement, check if the board method of haveBeenVisited with i and j inputs return true 
then also just return to end the function.
7. Still inside traversePaths function, else (if we aren't at the rightmost and bottom most corner of the board matrix, if we're not out of bounds
and the value at i and j positions of the board does not return true) then toggle the board at position of i and j to true using the board toggle
method passing in i and j positions as inputs.
8. Inside, traversePaths else statement, recursively call the traversePaths function passing in parameters of i and j+1 (we're going right first).
Next linke, recursivley call the traversPaths function again passing in parameters of i+1, j (we're going down now). Next line, recursively call the
traversePaths function passing in parameter of i and j-1 (we're going left now). Next line, recursively call the traversePaths function passing in 
the parameters of i-1 and j (we're going up now). (We move in a clockwise fashion).
9. Still inside the traversePaths function else statement, toggle the value from board matrix at the position we're currently at to the opposite 
value so that we can revisit it if need be
10. Outside traversePaths function, call the traversePaths function passing in a value of 0, 0 for i and j as the starting point.
11. In the end, return the pathCount number. 
  */

const makeboard = n => {
  let board = [];

  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    };
  };

  board.toggle = (i, j) => {
    board[i][j] = !board[i][j];
  };

  board.hasBeenVisited = (i, j) => {
    return board[i][j];
  };
  return board;
};

const robotPaths = n => {
  const board = makeboard(n);
  let pathCount = 0;
  
  const traversePaths = (i, j) => {
    if (i === n-1 && j === n-1) {
      pathCount++;
      return
    };
    if (i < 0 || i >= n || j < 0 || j >= n) {
      return;
    };
    if (board.hasBeenVisited(i, j)) {
      return;
    }
    else {
      board.toggle(i, j);
      traversePaths(i, j+1);
      traversePaths(i+1, j);
      traversePaths(i, j-1);
      traversePaths(i-1, j);
      board.toggle(i, j);
    }
  };
  traversePaths(0, 0);
  return pathCount;
}

// console.log(makeboard(2));

// console.log tests
console.log(robotPaths(2))   // Should console.log 2
console.log(robotPaths(3))   // Should console.log 12
console.log(robotPaths(4))   // Should console.log 184