// My own Solution: Use bubble sort?
/*Pseudocode:
1. Declare a variable called isSwapped and initialize it to false.
2. Make a while loop of while not isSwapped (so while isSwapped is truthy), and inside while loop, set isSwapped to true. 
3. Still inside while loop, make a for loop starting at index i at 0 and ending at index of second to last element in the input array 
parameter to loop through the input array.
4. Make another for loop inside 1st previous for loop, declaring the index in this for loop as j and starting the j index at 1 index after
the previous index i so j = i + 1, and ending at the last element in the input array.
5. Still inside 2nd for loop, make an if statement, check if element at index i is more than element at index j then swap the 2 elements
in the array. 
6. Declare issSwapped as true
7. Outside while loop, return the sorted array 
 */

class Stack {
  constructor() {
    this.storage = [];
  }

  push(item) {
    this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  printContents() {
    this.storage.forEach(elem => console.log(elem));
  }
}

// const sortStack = aStack => {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < aStack.length; i += 1) {
//       if (aStack[i - 1] > aStack[i]) {
//         done = false;
//         var tmp = aStack[i - 1];
//         aStack[i - 1] = aStack[i];
//         aStack[i] = tmp;
//       }
//     }
//   }
//   return aStack;
// };

// Suggested Solution Pseudocode: time complexity of O(n^2)
/*
- If last element from output array is greater than that in input array then pop off from output and push it into the input array.
- If last element from output array is smaller than that in input array then keep the output but pop off the last element from input array 
and push it into output array. 
- So whichever element is greater in whichever array, you pop off the bigger element from that array and put it as last element into the
other array. 


1. Declare an empty stack array let's call it outStack and set it equal to a new Stack();
2. Make a while loop of while the input stack array is not empty by using the isEmpty stack method.
3. Inside the above while loop, declare a variable called lastInputElem and set it equal to the last popped off element from the input
stack array.
4. Still inside the previous while loop, make another while loop of while outStack array is not empty using the isEmpty stack method, and
while the last element from the outStack array using peek method is more than lastInputElem (last element popped off from input stack
array), pop the last element from the outStack array and push it into the input stack array.
5. Outside the inner while loop (if the last element from the outStack array is smaller than the last popped off element from the input
stack) then push that last popped off element (lastInputElem) from the input stack into the outStack array.  
6. Outside the 1st while loop, return the outStack array.
 */

const sortStack = inpStack => {
  let outStack = new Stack();

  while (!inpStack.isEmpty()) {
    let lastInputElem = inpStack.pop();

    while (!outStack.isEmpty() && outStack.peek() > lastInputElem) {
      inpStack.push(outStack.pop());
    };
    outStack.push(lastInputElem);
  };
  return outStack;
}

/* Some console.log tests */
const s = new Stack();
  s.push(10);
  s.push(4);

  let sortedStack = sortStack(s); // sortedStack is also a Stack instance
  sortedStack.printContents();    // should print 4, 10

// print a newline
  console.log();

  s.push(8);
  s.push(5);
  s.push(1);
  s.push(6);
  s.push(19);
  s.push(4);

// s.push(4);
// s.push(10);
// s.push(8);
// s.push(5);
// s.push(1);
// s.push(6);

sortedStack = sortStack(s);
sortedStack.printContents();  // should print 1, 4, 5, 6, 8, 19
