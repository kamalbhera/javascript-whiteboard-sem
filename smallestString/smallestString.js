// /*Pseudocode:
// 1. Declare an empty array call it results.
// 2. push the input parameters into the array.
// 3. Sort the array with sort method.
// 4. Return the first item from the sorted array.
//  */
// // my solution - Does not pass the test for inputs ('a10', 'a2');
// const smallestString = (str1, str2) => {
//   let results = [];
//   results.push(str1);
//   results.push(str2);
//   results.sort();
//   return results[0];
// };

// Solution 2: O(n) time complexity and O(n) space complexity:
/*Pseudocode:
A. Helper function isDigit: Check if a string contains numbers:
1. Takes in str as an input and return with regex match method if it contains numbers with /[0-9]/i

B. Helper function isAlpha: Check if a string contains lowercase alphabet letter:
1. Takes in str as an input and return with regex match method if it contains /[a-z]/i

C. Helper function strToNum: returns number and length of number from a string
1. Takes in str and index as input parameters
2. initialize a variable called numLength and set it to 0
3. Initialie a variable called numValue and set it to empty string with '' 
4. Make a while loop of while index is less than input string length and the output of the string character at the current index is a number
using the isDigit helper function from above.
5. Inside while loop, increment numLength by 1, add current character at current index in string to numValue, increment index by 1
6. outside while loop, return as an array, the number version of the numValue using parseInt method, and the numLength as the second value
in the array.

D. Main Function: Takes in two strings as parameter:
1. Declare two variables called strIndex1 and strIndex2 and set them both to 0 (they'll be the starting index (pointers) for the two strings).
2. Declare two variable called strLen1 and strLen2 and set them to the length of the two string parameters, respectively.
3. Make a while loop of while strIndex1 is less than strLen1 and strIndex2 is less than strLen2, so while we haven't gone beyond the end of 
the shortest string.
4. Inside while loop make an if statement, check if both current characters in the string at each current index are alphabets using isAlpha
helper method. If so, make another inner if statement, check if both current characters in both strings at current index are equal. If so,
increment both indexes of both strings by one with strIndex1++ and strIndex2++ 
5. else, if the current alphabet characters in both strings at current index are not equal, return the string that has the lower current
alphabet character at current index.
6. Make else statement for the outer if statement, inside else statement, make an inner if statement, check if current character at current
indexe of both strings are numbers this time with the isDigit helper method. If so, use the strToNum helper method to get the number and 
the length of the numbers from each string. Use array destructuring to extract out the number and number length from each string and set the
number to a variable called num1 and num2 for the first and second strings, respectively. And for the number length set them to a variable 
called numLen1 and numLen2 for the first and second strings respectively. 
7. Inside the inner if statement, make another inner if statement, check if the numbers num1 and num2 are not equal. If so, then return the
string with the lower number using ternary expression.
8. If the two numbers, num1 and num2 from the if statment are equal, increment the first and second string indexes, strIndex1 and strIndex2, 
by their respective number lengths -> strIndex1 += numLen1; strIndex2 += numLen2;
9. For the if statment that was declared, inside the else statement, make an else statement (this'll be to see if the current character
at current index are either one number and one alphabet character between the two strings).
10. Inside the previous else statement, return the string that has a current character at current index that is lower or that comes before 
the one for the other string. 
11. outside the while loop, return the string with the lower length, that is if all characters are the same when comparing a shorter and 
longer string, so we'll return the shorter string. */

const isDigit = str => {
  return str.match(/[0-9]/i);
};

const isAlpha = str => {
  return str.match(/[a-z]/i);
};

const strToNum = (str, index) => {
  numLength = 0;
  numValue = "";
  while (index < str.length && isDigit(str[index])) {
    numLength++;
    numValue += str[index];
    index++;
  }
  return [parseInt(numValue, 10), numLength];
};

const smallestString = (str1, str2) => {
  let strIndex1 = 0;
  let strIndex2 = 0;
  let strLen1 = str1.length - 1;
  let strLen2 = str2.length - 1;

  while (strIndex1 <= strLen1 && strIndex2 <= strLen2) {
    if (isAlpha(str1[strIndex1]) && isAlpha(str2[strIndex2])) {
      if (str1[strIndex1] === str2[strIndex2]) {
        strIndex1++;
        strIndex2++;
      } else {
        return str1[strIndex1] < str2[strIndex2] ? str1 : str2;
      }
    } else {
      if (isDigit(str1[strIndex1]) && isDigit(str2[strIndex2])) {
        let [num1, numLen1] = strToNum(str1, strIndex1);
        let [num2, numLen2] = strToNum(str2, strIndex2);

        if (num1 !== num2) {
          return num1 < num2 ? str1 : str2;
        } else {
          strIndex1 += numLen1;
          strIndex2 += numLen2;
        }
      } else {
        return str1[strIndex1] < str2[strIndex2] ? str1 : str2;
      }
    }
  }
  return strLen1 < strLen2 ? str1 : str2;
};


console.log(smallestString("a", "b")); // a
console.log(smallestString("a1", "a2")); // a1
console.log(smallestString("a10", "a2")); // a2
console.log(smallestString("abcd123", "abc123")); // should print "abc123"
console.log(smallestString("abc", "abcd")); // should print "abc"
console.log(smallestString("abc123a", "abc123b")); // should print "abc123a"
console.log(smallestString("9876", "987")); // should print "987"
console.log(smallestString("6a", "6b")); // should print "6a"
