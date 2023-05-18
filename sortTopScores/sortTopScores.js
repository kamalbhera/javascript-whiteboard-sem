// Counting sort solution: time complexity --> O(n + k)
/*Pseudocode: Doesn't have to be in place sort
1. First have an if conditional of if input array length is less than 2 then just return the input array.
2. Initialize a variable called maxValue and set it equal to the first input array element.
3. Initialize an empty array call it resultsArray.
4. To find the maximum value from the array, make a for loop to loop through the array, starting at index 1 (because index 0 is already set to 
maxValue)
5. Inside the previous for loop, make an if statment, check if each input array element at current index is more than maxValue then re-set 
maxValue to the input array Element at that current index. Once loop ends, we'll end up with the maximum value from the input array.
6. Set an array called countingArray and set it to a length of maxValue + 1 to take 0 index into consideration and highest index should be the
maximum value from the input array.
7. Make a for of loop to loop through inputArray but this loop will get the value of each element from the inputArray. 
8. Inside above for loop, make an if statement check if countingArray at index of inputArray's value is not defined then set the value of 
countingArray at index of value equal to 0 and outside the if statement, increment the number by 1 in the countingArray at index of value from 
inputArray.
9. Outside previous for loop, make a for loop, starting at index i of countingArray length, ending at more than or equal to 0 and decrementing with
 i--. 
10. Inside for loop, have a while loop of while countingArray at index of i is more than 0.
11. Inside above while loop, push i into the resultsArray and then decrement the value by 1 in countingArray at index i (countingArray[i]--).
12. Outside the for loop, return resultsArray  

 */

const sortTopScores = (inputArr, highestPossibleScore) => {
    if (inputArr.length < 2) {
        return inputArr;
    };

    let resultsArray = [];
    let countingArray = new Array(highestPossibleScore + 1);

    for (let value of inputArr) {
        if (!countingArray[value]) {
            countingArray[value] = 0;
        };
        countingArray[value]++;
    };
    // console.log('countingArray', countingArray);

    for (let i = countingArray.length - 1; i >= 0; i--) {
        while(countingArray[i] > 0) {
            resultsArray.push(i);
            countingArray[i]--;
        };
    };
    return resultsArray;
}


// sortTopScores([1, 4, 1, 2, 7, 5, 2], 7);
console.log(sortTopScores([1, 4, 1, 2, 7, 5, 2], 1, 7));