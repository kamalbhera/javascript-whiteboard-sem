// My solution (does not work for input numbers 3 or above) with time complexity O(n^2)
/*Pseudocode:
1. Initialize an array, call it contents and give it the string elements: ['rock', 'paper', 'scissors']. 
2. Initialize an empty array call it finalMatrix.
3. Make a for loop of starting at index called i at 0 and ending i at less than or equal to input parameter n.
4. Make another inner for loop inside the previous outer for loop this time call index j and start j at 0 and end j at less than or equal to 
input parameter n.
5. push elements from contents array at index i and at index j set inside an array into the finalMatrix array.
6. Outside all the for loops, return the finalMatrix array.  
 */

// const rockPaperScissors = n => {
//     let contents = ['rock', 'paper', 'scissors'];
//     let finalMatrix = [];

//     for (let i = 0; i <= n; i++) {
//         for (let j = 0; j <=n; j++) {
//             finalMatrix.push([contents[i], contents[j]]);
//         };
//     };
//     return finalMatrix;
// };

// Given solution: time complexity O(n * n^n):
/*Pseudocode:
1. Initialize an empty array call it outcomes
2. Iniitialize an array, call it plays and put the strings 'rock', 'paper', and 'scissors' into the plays array as elements.
3. Make an inner helper function inside the main function, call this inner helper function "outcomeGenerator", it'll take in 2 parameters, 
called 'roundsLeft' (which will be the number of rounds from parent function's input round number) and 2nd parameter will be called 
result which will be an empty array when we call this inner function.
4. Inside the inner "outcomeGenerator" function, make a base case of if 'roundsLeft' parameter is equal to 0, then push the contents of result 
parameter into the outcomes array. And then do an empty return so the function can end.
5. Outside the if statement base case, Loop through with forEach array method to visit each element string in the plays array, the forEach
method will take a callback function where the parameter will be called 'play' to refer to each string element inside the 'plays' array 
6. Inside the forEach method, recursively call the "outcomeGenerator" inner function but with the 'roundsLeft' parameter minus 1 and
for the 2nd result parameter, concat the 'play' (refers to each element visited in the 'plays' array at each iteration) onto the result 
parameter array.
7. outside the 'outcomeGenerator' inner function, call this function passing in the input number of rounds from the parent function's parameter
as this inner function's first parameter and pass in an empty array as the second parameter.
8. Finally, return the outcomes array.
 */

const rockPaperScissors = n => {
  let outcomes = [];
  let plays = ['rock', 'paper', 'scissors'];

  const outcomeGenerator = (roundsLeft, result) => {
    // base case
    if (roundsLeft === 0) {
      outcomes.push(result);
      return;
    };
    plays.forEach(play => {
      outcomeGenerator(roundsLeft - 1, result.concat(play));
    });
  };
  outcomeGenerator(n, []);
  return outcomes;
}


// console.log(rockPaperScissors(2));
// [[rock, rock], [rock, paper], [rock, scissors],
//  [paper, rock], [paper, paper], [paper, scissors], [scissors, rock],
//  [scissors, paper], [scissors, scissors]]

const rps2 = rockPaperScissors(2);
console.log(rps2.length); // 9

const rps3 = rockPaperScissors(3);
console.log(rps3.length); // 27
console.log(rockPaperScissors(3));

const rps4 = rockPaperScissors(4);
console.log(rps4.length); // 81

const rps5 = rockPaperScissors(5);
console.log(rps5.length); // 243

