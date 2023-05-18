// My own solution:
// Have an object to store the counts of each different bracket opening will receive 1 count, closing receives a decremented count
// Also count the number of indexes it takes to go to the closing bracket after the opening bracket
/*Pseudocode:
1. Make an object call it bracketHolder and give it the keys of all the opening brackets with value of an array, first element in that array 
will be the count of the number of a certain bracket first intialized to 0, the 2nd element in the value array will be the count it takes to 
go from opening bracket to closing bracket, also initialized to 0.
2. Declare a variable called curlyCounter and initialize it to 0, declare variables called straightCounter and parenCounter and also initialize
them to 0 (these will hold the number of elments between opening and closing bracket and each variable holds the count for each bracket type)
3. Make a for loop to iterate through the input bracket string starting at index i of 0, ending at less than input str length, increment i
4. Inside for loop make an if statement of if an element in input string is empty space just continue (this'll skip the space)
5. Increment each of the three counters, curlyCounter, straightCounter and parenCounter by 1 so each will increment each time it comes accross
a bracket element unless something perturbs it.
6. Make a separate if statement of if current string character at current index is an opening curly bracket then increment the value of opening
curly bracket in bracketHolder object at 1st index of the value array to 1, then re-set curlyCounter to 0.
7. Outise previous if statement, make another if statement of if current character from input string at current index is a closing curly 
bracket then decrement by 1 the value of the opening curly bracket key from bracketHolder object at 1st array index, then set the value at the
2nd array index to the current curlyCounter count then re-set curlyCounter count back to 0.
8. Outside previous if statment, repeat the above 2 steps but this time for straightBracket and parenthesis and replace the curlyCounter with 
the respective counter for the specific brackets.
7. Outside previous for loop, make a for in loop to loop through the bracketHolder object, naming each key bracket
8. Inside previous for in loop, make an if statement of if the value of bracket key in the bracketHolder object does not have a value of 0 
for the first array element or has an even number as the second array element by modulo of 2 equaling 0 then return false. 
9. Otherwise (if value of each bracket in bracketHolder object has a value of 0 as the first array element and odd number as the 
2nd array element) outside the for in loop return true  
 */

const balancedBrackets = str => {
  let bracketHolder = {
    "{": [0, 0],
    "(": [0, 0],
    "[": [0, 0]
  };
  let curlyCounter = 0;
  let straightCounter = 0;
  let parenCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        continue;
    };
    curlyCounter++;
    straightCounter++;
    parenCounter++;

    if (str[i] === "{") {
      bracketHolder[str[i]][0]++;
      curlyCounter = 0;
      // console.log('{ counter set to 0: ', bracketHolder)
    }
    if (str[i] === "}") {
      bracketHolder["{"][0]--;
      bracketHolder["{"][1] = curlyCounter;
      curlyCounter = 0;
    }

    if (str[i] === "[") {
      bracketHolder[str[i]][0]++;
      straightCounter = 0;
    }
    if (str[i] === "]") {
      bracketHolder["["][0]--;
      bracketHolder["["][1] = straightCounter;
      straightCounter = 0;
    }

    if (str[i] === "(") {
      bracketHolder[str[i]][0]++;
      parenCounter = 0;
    }
    if (str[i] === ")") {
      bracketHolder["("][0]--;
      bracketHolder["("][1] = parenCounter;
      parenCounter = 0;
    }
  }
  for (let bracket in bracketHolder) {
    if (bracketHolder[bracket][1] % 2 === 0 || bracketHolder[bracket][0] !== 0) {
        return false;
      }; 
  }
  return true;

//   console.log(bracketHolder);
};

/* Some console.log tests */
console.log(balancedBrackets("{}[]()")); // should print true
console.log(balancedBrackets('{(([]))}'));      // should print true
console.log(balancedBrackets('{ [ ] ( ) }'));   // should print true
console.log(balancedBrackets("{ [ ( ] ) }")); // should print false
console.log(balancedBrackets('('));             // should print false
console.log(balancedBrackets('{[}'));           // should print false
