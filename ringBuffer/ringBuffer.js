// My own solution:
/*Pseudocode:
RingBuffer class will take in an argument called capacity which will be the size of the ring buffer array.
1. Make the ring buffer class with properties of this.capacity which is also an input parameter, this.storage which will be an empty array and 
this.count which will keep track of how many items are in the this.storage array.

append method:
1. Outside the constructor, make a method called append which takes in an input parameter called val which is the value to push into the 
this.storage array.
2. Make an if statement of if this.count is less than or equal to this.capacity minus 1, then put the input value, val into the storage array in
the position that the count is currently at.
3. Increment this.count by 1.
4. Else (if this.count is more than this.capacity minus 1), then reset this.count to 0, insert the input value, val into the storage array in the
position of the newly reset count, then increment this.count by 1 again  

allValues method:
1. Just return the this.storage array
 */

// class RingBuffer {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.storage = [];
//     this.count = 0;
//   }
//   append(val) {
//     if (this.count <= this.capacity - 1) {
//       this.storage[this.count] = val;
//       this.count += 1;
//     } else {
//       this.count = 0;
//       this.storage[this.count] = val;
//       this.count += 1;
//     }
//   }

//   allValues() {
//     return this.storage;
//   }
// }

// Suggested Solution: Only fewer lines of code
/*Pseudocode:
1. Make the RingBuffer class with constructor of size of array called capacity (this will be the only input parameter for class)
2. Give the RingBuffer class, 2 additional properties, this.storage will be an array that contains the values appended to it and this.count will
keep track of the position of where to insert the next element in the storage array

append method:
1. Takes in an input called val which will be the value to insert into the storage array.
2. insert the input value val, into the storage array at the position of this.count++ by setting the value to that count++ position. This way it 
will put the value at the current this.count position in the storage array and then increment this.count by 1 at the same time
3. Make an if statement, check if this.count is equal to this.capacity then reset the this.count to 0.

allValues method:
1. Just return the this.storage array
 */

class RingBuffer {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.count = 0;
    }
    append(val) {
        this.storage[this.count++] = val;
        if (this.count === this.capacity) {
            this.count = 0;
        };
    };

    allValues() {
        return this.storage;
    };
}

// /* Some console.log tests */
const buffer = new RingBuffer(5);

buffer.append('a');
buffer.append('b');
buffer.append('c');
buffer.append('d');
console.log(buffer.allValues());  // should print ['a', 'b', 'c', 'd']

buffer.append('e');
console.log(buffer.allValues());  // should print ['a', 'b', 'c', 'd', 'e']

buffer.append('f');
console.log(buffer.allValues());  // should print ['f', 'b', 'c', 'd', 'e']

buffer.append('g');
buffer.append('h');
buffer.append('i');
console.log(buffer.allValues());  // should print ['f', 'g', 'h', 'i', 'e']

// const buffer2 = new RingBuffer(3);

// buffer2.append("a");
// buffer2.append("b");
// buffer2.append("c");

// console.log(buffer2.allValues()); // should return ['a', 'b', 'c']

// buffer2.append("d");

// console.log(buffer2.allValues()); // should return ['d', 'b', 'c']

// buffer2.append("e");
// buffer2.append("f");

// console.log(buffer2.allValues()); // should return ['d', 'e', 'f']


