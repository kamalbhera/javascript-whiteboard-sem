/* Pseudocode:
1. Initialize an empty array, call it finalTickets.
2. Initialize an empty object call it, flightInfoObj. 
3. Loop through the matrix to get each array element and place the first string in each array element (source) as a key in the flightInfoObj 
object and the 2nd string element from the array element in each matrix element (destination) as it's value in the flightInfoObj object.
4. Make an if statment, check if the first string in array element in the matrix is null, if so, push the second string element from that 
array element into the final tickets array.
5. Intialize a variable called finalTicketsPointer and set it to 0.
6. Make a while loop of while flightInfoObj[finalTickets[finalTicketsPointer]] is not null, push the value of the string element of the key
which is at the current pointer of finalTicketsPointer in the finalTickets array. Increment the finalTicketsPointer by 1
 */

// My own solution: Time complexity = ~O(2n) --> O(n);
// const oneWayFlight = ticketMatrix => {
//   let finalTickets = [];
//   let flightInfoObj = {};
//   let finalTicketsPointer = 0;

//   for (let i = 0; i < ticketMatrix.length; i++) {
//     flightInfoObj[ticketMatrix[i][0]] = ticketMatrix[i][1];

//     if (ticketMatrix[i][0] === null) {
//       finalTickets.push(ticketMatrix[i][1]);
//     }
//   }
//   //   console.log("finalTickets", finalTickets);
//   //   console.log("flightInfoObj", flightInfoObj);
//   while (flightInfoObj[finalTickets[finalTicketsPointer]] !== null) {
//     finalTickets.push(flightInfoObj[finalTickets[finalTicketsPointer]]);
//     finalTicketsPointer++;
//   }
//   return finalTickets;
// };

// Optimized solution: time complexity still O(2n) but lower space complexity than mine with O(2n) space complexity
/*Pseudocode:
1. Initialize an empty object, call it hashTable.
2. Intialize an empty array of length 1 minus the length of the input matrix, call it finalTickets using the Array() method.
3. use forEach method to loop through the input matrix, call the name of each array element in the matrix, eachTicket which will be the 
parameter in the forEach method.
4. Inside the loop forEach function, make an if statement check if first string element inside an array element in the matrix is null and if
so, put the second string element at the second index in the array element from the input matrix as the first element in the finalTickets 
array.
5. set the firt string element in each array element from the input matrix as the key in hashTable object and set it's value to be the second
string element at second index in the array from that input matrix. 
6. Outside the forEach loop, make another for loop, this time starting at index 1 and ending before the length of the matrix minus 1 so index
will be from input matrix's second position to input matrix's 2 positions from last since we have one less position in the final array to fill
7. Now intialize each current index in the finalTickets array and set it to the value from hashTable object with key being the element from 
the finalTickets array at current index minus 1.
8. Return finalTickets array 
 */

const oneWayFlight = inputMatrix => {
    let hashTable = {};
    let finalTickets = Array(inputMatrix.length - 1);

    inputMatrix.forEach(eachTicket => {
        if (eachTicket[0] === null) {
            finalTickets[0] = eachTicket[1];
        };
        hashTable[eachTicket[0]] = eachTicket[1];        
    });

    for (let i = 1; i < inputMatrix.length - 1; i++) {
        finalTickets[i] = hashTable[finalTickets[i - 1]];
    };

    return finalTickets;
}
const tickets = [
  ["PIT", "ORD"],
  ["XNA", "CID"],
  ["SFO", "BHM"],
  ["FLG", "XNA"],
  [null, "LAX"],
  ["LAX", "SFO"],
  ["CID", "SLC"],
  ["ORD", null],
  ["SLC", "PIT"],
  ["BHM", "FLG"]
];

const shorterSet = [[null, "PDX"], ["PDX", "DCA"], ["DCA", null]];

console.log(oneWayFlight(tickets)); // ['LAX', 'SFO', 'BHM', 'FLG', 'XNA', 'CID', 'SLC', 'PIT', 'ORD']
console.log(oneWayFlight(shorterSet)); // should print [ 'PDX', 'DCA' ]
// oneWayFlight(tickets);
// oneWayFlight(shorterSet);
