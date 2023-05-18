class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length) {
      return this.items.pop();
    }
    return null;
  }

  peek() {
    if (this.items.length) {
      return this.items[this.items.length - 1];
    }
    return null;
  }
}

// My own solution: Not sure if getMax method is in O(1) time, since array sort is O(n log n) time complexity
/*Pseudocode:
1. Use the extends method from Stack to make the MaxStack child class whose parent is Stack.
2. In the getMax method, make an if statement check if there are any elements in the this.items array by checking for length more than 0.
If so, then sort the this.items array descending using the array sort method and return the last elmeent of the this.items array.
3. Outside if statement, return null for if there are no items in the this.items array. 
 */

// class MaxStack extends Stack {
//     constructor() {
//         super();
//     }
//     getMax() {
//         if (this.items.length) {
//             this.items.sort((a, b) => a - b);
//             return this.items[this.items.length - 1];
//         };
//         return null;
//     }
// };

// Optimized solution: with O(1) time complexity O(n) space complexity makes use of just push and pop
/*Pseudocode:
1. Use the extends method from Stack to make the MaxStack child class whose parent is Stack.
2. Initialize another array called this.maxItems in MaxStack child class and set it equal to an empty array. This will store only new
max values
2. Make new push method in the child class and call this method pushMax. For pushMax, push the input item into the this.items array from
the parent class. But make an if statement, check if the maxItems last value is not there using parent classe's peek method or the input 
item is more than or equal to the last element from maxItems then push the item into the maxItems array.  
3. Make a new pop method in the child class and call this method popMax. For popMax, pop the last element from the this.items array from
parent class and set it equal to a variable called item.
4. Still in popMax method, make an if statement, check if item variable from above is equal to the last element in the maxStack array then
pop the last element from the maxStack array. Outside if statement, return the item variable.
5. Inside the MaxStack child class, make a getMax method where you return the last element from the maxItems array using the peek method
from the Stack parent class. 
 */

class MaxStack extends Stack {
  constructor() {
    super();
    // additional array to put in and store only max values
    this.maxItems = new Stack();
  };
  pushMax(item) {
    this.items.push(item);

    if (!this.maxItems.peek() || item >= this.maxItems.peek()) {
      this.maxItems.push(item);
    }
  };

  popMax() {
    const item = this.items.pop();

    if (item === this.maxItems.peek()) {
      this.maxItems.pop();
    }
    return item;
  };

  getMax() {
    return this.maxItems.peek();
  };
}

const maxStack = new MaxStack();
console.log(maxStack.getMax()); // should print `null`

maxStack.pushMax(1);
console.log(maxStack.getMax()); // should print 1

maxStack.pushMax(100);
console.log(maxStack.getMax()); // should print 100

maxStack.popMax();
console.log(maxStack.getMax()); // should print 1
