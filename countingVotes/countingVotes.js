/*Pseudocode
1. Have a hashtable initialized to empty object let's call it hashTable. Initialize an variable called maxim, set it to -Infinity. 
And initialize an empty string, call it name.
2. Loop through the array.
3. Make if statement, check if name element in the array exists in hashTable object as a key. If so, increment value by 1 with the key
being the current name element in the array inside the hashTable object.
4. Otherwise, if current array element name doesn't exists as a key in hashTable object, initilize with a value of 1 setting current 
array element as a key in the hashTable. 
5. Sort the names (keys) in hashTable with Object.keys(hashTable).sort().reverse() to sort alphabetically descending 
(last alphabet to first). But this will only return an array of only the keys or names but not the values so set it to a variable called
sortedHashTable
6. Loop through sortedHashTable array with for loop and make if statement to check if value of current name at current sortedHashtable index
as a key in the hashTable object is more than max, if so, set max to current name key's value 
7. set name to the current element name in the current index in the sortedHashTable array, so that the name key matches max value.
8. outside for loop, return name.
 */

// My own solution with time complexity of > O(3n) and space complexity of O(n)
// const countingVotes = arr => {
//     let hashTable = {};
//     let maxim = -Infinity;
//     let name = '';

//     for (let i = 0; i < arr.length; i++) {
//         if (hashTable[arr[i]]) {
//             hashTable[arr[i]]++
//         } else {
//             hashTable[arr[i]] = 1;
//         }
//     }
//     // console.log(hashTable);
//     let sortedHashTable = Object.keys(hashTable).sort().reverse();
//     // console.log(sortedHashTable);
//     for (let i = 0; i < sortedHashTable.length; i++) {
//         if (hashTable[sortedHashTable[i]] > maxim) {
//             maxim = hashTable[sortedHashTable[i]]; 
//             name = sortedHashTable[i];           
//         }            
//     }    
//     // return sortedHashTable[sortedHashTable.length - 1];
//     return name;
// };

// Optimized solution with O(n) time complexity and O(n) space complexity:
/* Pseudocode:
- Uses forEach method and makes all conversions inside the forEach so all is done in one loop with O(n) time complexity.
1. Initialize an empty object, call it counts. Initialize maxVotes variable set it equal to 0. Initialize an empty string call it
winnerName.
2. Loop through the input array with forEach method, callback function inside forEach method takes in a parameter which refers to each
name in the input array, call it eachNameVoted.
3. Make if statement inside the forEach, if each name in the array does not exist in the counts object as a key then set it as a key in
the counts object and set its value to 0, then increment the value by 1.
4. Make another if statement check if value of eachNameVoted in the counts object is more than maxVotes, if so, set maxVotes to that value
5. Now set the winnerName to equal the eachNameVoted key from inside the counts object whose value was more than current maxVotes.
6. Make an else if statement to check if maxVotes is equal to the value of eachNameVoted from the counts object, in the event of a tie.
If so, make an if statment inside the else if to check if eachNameVoted is more than winnerName, which will check if eachNameVoted comes
after winnerName alphabetically. If so, set winnerName equal to eachNameVoted. 
7. Return winnerName outside forEach.
 */

const countingVotes = arr => {
    let counts = {};
    let maxVotes = 0;
    let winnerName = '';

    arr.forEach(eachNameVoted => {
        if (!counts[eachNameVoted]) {
            counts[eachNameVoted] = 0;
            // console.log('counts in 1st if', counts);           
        }
        counts[eachNameVoted]++;

        if (counts[eachNameVoted] > maxVotes) {
            maxVotes = counts[eachNameVoted];
            winnerName = eachNameVoted;
        } else if (maxVotes === counts[eachNameVoted]) {
            if (eachNameVoted > winnerName) {
                winnerName = eachNameVoted;
            }
        }
    });
    console.log(counts)
    return winnerName;
}

let arr1 = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];
let arr2 = ['john', 'johnny', 'jackie', 'johnny', 'john', 'jackie', 'jamie', 'jamie', 'john', 'johnny', 'jamie', 'johnny', 'john']
let arr3 = ['jack', 'jill', 'jane']
console.log(countingVotes(arr1)) // 'michael';
console.log(countingVotes(arr2)) // 'johnny';
console.log(countingVotes(arr3)) // 'jill';
// countingVotes(arr1);
// countingVotes(arr2);

