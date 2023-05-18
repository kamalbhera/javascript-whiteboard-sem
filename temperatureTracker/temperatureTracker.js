// My own solutions:
/* Pseudocode:
1. Create TempTracker class, constructor won't take in any input values.
2. Instantiate an empty array (to insert the temp values in) call it, this.tempArr
3. Instantiate a variable called this.count and initialize it to 0

insert method:
1. Takes in an input called temp as an argument.
2. Set the value of this.tempArr array at the current position of this.count to the input, temp value & increment this.count by 1

mean method: (No way to do this without O(n)?)
1. Initialize a variable called sum and set it equal to 0
2. Make a for loop, starting at index i of 0 and ending at less than this.tempArr array length , incrementing i 
and add each current element from current index from this.tempArr array to the sum integer.
3. Outside for loop, return the sum divided by this.tempArr array length.

getMin method:
1. Initialize a variable called minVal and set it equal to Infinity.
2. Make a for loop starting at index i of 0 and ending at index less than this.tempArr array length and incrementing i.
3. Make an if statement inside for loop, check if current array element at current index is less than minVal then reset minVal to that current 
array element.
4. Outside for loop, return minVal

getMax method:
1. Initialize a variable called maxVal and set it equal to -Infinity.
2. Make a for loop starting at index i of 0, ending at less than this.tempArr array length and incrementing.
3. Inside for loop make an if statement, check if maxVal is more than current array element at current index, if so then reset maxVal to that
current array element at current index.
4. Outside for loop, return maxVal.

getMode method:
1. Initialize an empty object call it countHash.
2. Initialize a variable called maxCount and set it equal to 0, initialize a variable called modeTemp and set it to 0
2. Make a for loop, starting at index i of 0, ending at index i less than this.tempArr array length and increment i.
3. Inside for loop, make an if statment of if current array element at current index does not exist in countHash object as a key then set it as a
key in the countHash object with a value of 1.
4. Else (if current element at current array index already exists as a key in the countHash object then increment the value of that element key by
1).
5. Make a for in loop for the countHash object to loop through each key/value pair, name each key in the countHash object temp in the for in loop
6. Inside the countHash for in loop, make an if statement of if the value of the current key temperature in the countHash object is more than 
maxCount then reset maxCount to that new value of the current temp key.
7. Still inside if statement, reset modeTemp to current temp key, turning the key into an integer too using the parseInt method.
7. Outside for in loop, return  modeTemp
 */

// class TempTracker {
//     constructor() {
//         this.tempArr = [];
//         this.count = 0;
//     }
//     insert(temp) {
//         this.tempArr[this.count] = temp;
//         this.count += 1;
//     };
//     getMean() {
//         let sum = 0;
//         for (let i = 0; i < this.tempArr.length; i++) {
//             sum += this.tempArr[i];
//         };
//         return sum / this.tempArr.length;
//     };

//     getMin() {
//         let minVal = Infinity;
//         for (let i = 0; i < this.tempArr.length; i++) {
//             if (this.tempArr[i] < minVal) {
//                 minVal = this.tempArr[i];
//             };
//         };
//         return minVal;
//     };

//     getMax() {
//         let maxVal = -Infinity;
//         for (let i = 0; i < this.tempArr.length; i++) {
//             if (this.tempArr[i] > maxVal) {
//                 maxVal = this.tempArr[i];
//             };
//         };
//         return maxVal;
//     };

//     getMode() {
//         let countHash = {};
//         let maxCount = 0;
//         let modeTemp = 0;

//         for (let i = 0; i < this.tempArr.length; i++) {
//             if (!countHash[this.tempArr[i]]) {
//                 countHash[this.tempArr[i]] = 1;
//             } else {
//                 countHash[this.tempArr[i]]++;
//             };
//         };
//         for (let temp in countHash) {
//             if (countHash[temp] > maxCount) {
//                 maxCount = countHash[temp];
//                 modeTemp = parseInt(temp);
//             };
//         };
//         return modeTemp;
//     }
// }

// Suggested Solution: O(1) time complexity
/*Pseudocode:
1. Create a TempTracker class. Constructor won't take in any input parameters.
2. Instantiate an array called this.tempArray and set it equal to an array with the Array() constructor giving it a size of 140 slots and filling 
all intial slots with 0 using the array fill method and passing in 0 as the parameter into the fill
3. Instantiate a variable called this.maxTemp which will hold the maximum temperature value and initialize it to 0 for now
4. Instantiate a variable called this.minTemp which will hold the minimum temperature value and initialize it to 0 for now
5. Instantiate a variable called this.modeTemp which will hold the temperature value that appears the most often and set it equal to null.
6. Instantiate a variable called this.maxOccurrences which will hold the count of the number of times a temperature value appears the most often
7. Instantiate a variable called this.getSum which will hold the sum of all temperature values and set it equal to 0.
8. Instantiate a variable called this.mean which will hold the average temperature value and set it equal to null.
9. Instantiate a variable called this.count which will hold the number of temperature values inserted and set it equal to 0.

insert method:
1. Takes in a temperature value called tempVal as an input parameter.
2. Insert into the tempArray array, a value incrementing by 1 at the input tempVal position.
3. To find maximum value make an if statement, check if input tempVal is more than this.maxTemp or if this.maxTemp is equal to null then reset 
this.maxTemp to the tempVal.
4. For mode number and mode temperature value, make an if statement, check if the value this.maxOccurences at the input tempVal position in the 
tempArray array is more than the current this.maxOccurrences value and if so, then reset the current this.maxOccurences to the count value from the
tempArray array at the tempVal position.
5. Still inside the previous if statement for mode, reset modeTemp to that tempVal input temperature value which will contain the temperature 
value that appears most often.
6. For mean, add to the this.sum variable the input temperature value, inputVal.
7. Still for mean, increment this.count by 1
8. Still for mean, set this.mean to this.getSum value divided by this.count value. 
9. For getMean method, return the this.mean variable
10. For getMax method, return the this.maxTemp variable
11. For getMin method, return the this.minTemp variable
12. For getMode method, return the this.modeTemp variable
 */

class TempTracker {
  constructor() {
    this.tempArray = Array(140).fill(0);

    // for Maximum and minimum temps
    this.maxTemp = null;
    this.minTemp = null;

    // for mode:
    this.modeTemp = null;
    this.maxOccurences = 0;

    // for mean:
    this.getSum = 0;
    this.mean = null;
    this.count = 0;
  }
  insert(tempVal) {
    this.tempArray[tempVal]++;

    // for mode:
    if (this.tempArray[tempVal] > this.maxOccurences) {
      this.maxOccurences = this.tempArray[tempVal];
      this.modeTemp = tempVal;
    }

    // for maximum value:
    if (this.maxTemp === null || tempVal > this.maxTemp) {
      this.maxTemp = tempVal;
    }

    // for minimum value:
    if (this.minTemp === null || tempVal < this.minTemp) {
      this.minTemp = tempVal;
    }

    // for mean:
    this.getSum += tempVal;
    this.count++;
    this.mean = this.getSum / this.count;
  }
  getMean() {
    return this.mean;
  }

  getMax() {
    return this.maxTemp;
  }

  getMin() {
    return this.minTemp;
  }

  getMode() {
    return this.modeTemp;
  }
}

// /* Some console.log tests */
const tracker = new TempTracker();
tracker.insert(32);

console.log("mean: ", tracker.getMean()); // should print 32
console.log("min: ", tracker.getMin()); // should print 32
console.log("max: ", tracker.getMax()); // should print 32
console.log("mode: ", tracker.getMode()); // should print 32

tracker.insert(135);

console.log("mean: ", tracker.getMean()); // should print 83.5
console.log("min: ", tracker.getMin()); // should print 32
console.log("max: ", tracker.getMax()); // should print 135

tracker.insert(135);

console.log("mean: ", tracker.getMean()); // should print 100.66666666666667
console.log("min: ", tracker.getMin()); // should print 32
console.log("max: ", tracker.getMax()); // should print 135
console.log("mode: ", tracker.getMode()); // should print 135

// let temp1 = Array(5).fill(0);
// let temp2 = 135;
// let avg = (32 + 135 + 135) / 3;
// console.log(temp1)
