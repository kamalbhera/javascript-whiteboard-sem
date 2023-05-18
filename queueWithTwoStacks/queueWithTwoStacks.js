// My own enque method solution:
/*Pseudocode:
Think we're only allowed to use pop and push array methods? 
1. For enque, it'll take an input parameter as an argument in the function, let's call it item and we will push it into the this.inArray
array.
 */

// Suggested solution dequeue method: Remove the first element that was put into the array (FIFO)
/*Pseudocode:
1. Declare a class called Queue and have an empty constructor inside it. Inside constructor, initialize two empty arrays, call them 
this.inArray and this.outArray.
2. Declare a dequeue method outside the constructor(){}. In the deque method, check if outArray is empty by checking that it's length is 0.
If so, then inside if statement, make a while loop of while this.inArray array is not empty (length is more than 0) then pop the last
element from the this.inArray array and push it into the this.outArray array so that the order of elements in outArray array is reverse
or opposite of the order of elements in the inArray array.
3. Once all the elements from the inArray array is transferred to the outArray array then outside if statement just return the last element
from the outArray array using pop method which will be the first element from the inArray array for that first in first out removal.  
 */

// Suggested solution peek method: Return the first element that is in the array? (FIFO).
/*Pseudocode:
1. Declare a peek method and make an if statement, check if outArray is empty with length 0, if so, inside the if statement, make a while
loop of while inArray has elements in it (this.inArray length is more than 0) then push the last element from the inArray array using pop 
method into the outArray array. This will return the reverse order with which the elements were put in into the inArray array to have that
first in first out order. 
2. Return the last element from the outArray array using the this.outArray[this.outArray.length - 1] method.  
 */

class Queue {
    constructor() {
        this.inArray = [];
        this.outArray = [];
    };

    enqueue(item) {
        this.inArray.push(item);
    };

    dequeue() {
        if (this.outArray.length === 0) {
            while (this.inArray.length > 0) {
                this.outArray.push(this.inArray.pop());
            };
        };
        // first element from inArray is the last element in outArray. So we're returning that last outArray element which is the earliest
        // element from inArray
        return this.outArray.pop()
    };

    peek() {
        if (this.outArray.length === 0) {
            while (this.inArray.length > 0) {
                this.outArray.push(this.inArray.pop());
            };
        };
        return this.outArray[this.outArray.length - 1];
    };
};


const q = new Queue();
console.log(q.peek());   // should print undefined

q.enqueue(10);
console.log(q.peek());   // should print 10

q.enqueue(9);
q.enqueue(8);

console.log(q.dequeue());   // should print 10
console.log(q.peek()); // should return 9
console.log(q.dequeue());   // should print 9
console.log(q.dequeue());   // should print 8