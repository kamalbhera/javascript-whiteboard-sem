// Suggested Solution:
/*Pseudocode:
Create the class:
1. Create a calss called SetOfStack with capacity passed into constructor.
2. Create a this.capacity will equal capacity.
3. Create a storage called this.storage and it'll be a matrix (an array that contains an array. The inner array will be the stacks of a uniform
    capacity size every time the previous array comes up to capacity, a new array will be created).
4. Create a variable called this.currentStackIndex and initialize it to 0.

G length method:
1. create a method called length and have it as a get method so, get getLength and return the currentStackIndex + 1.

Push method:
1. The method will take in a parameter called item.
2. Make an if statement of if length of this.stacks at currentStackIndex is more than or equal to this.capacity then push a new empty array into 
the this.stacks storage and increment currentStackIndex by 1 then push the input parameter item into the this.stacks at currentStackIndex.
3. Else (if this.stacks inner array at currentStackIndex is not more than capacity then just push the input item parameter into the this.stacks
    storage at the currentStackIndex).

Pop method:
1. Check if length of this.stacks storage at currentStackIndex index is 0 then take out that empty inner array by using JS splice method on the
this.stacks array at the currentStackIndex index and decrement currentStackIndex by 1.
2. set a variable called lastItem and set it equal to this.stacks at currentStackIndex index with the pop method attached to that inner array
at the currentStackIndex index.
3. return lastItem.

popAt method:
1. This function will take the specified index as an input parameter
1. Return the last item from the this.stacks inner array at the input parameter index by attaching pop() method to that inner array.

popAtWithRollOver method:
This will return the first item from the inner array at the currentStackIndex index in the this.stacks matrix.
1. This function will take in a specified index as an input paramter 
2. return another method called shiftIndex which will also take in specified index as a parameter so pass in the input parameter of index from 
this popAt method into the shiftIndex method's parameter. 

shiftIndex method:
1. Set a variable called firstItem and set it equal to the inner array from this.stacks matrix at the input index from parameter, and attach the 
JS shift() method to it to take out the first item from the inner array so firstItem will equal the first array element from the inner array at the
specified input parameter index. 
2. Make a base case of if the inner array from this.stacks matrix at the input parameter index is empty with length of 0 then splice it out
by using the splice function at input parameter index in the this.stacks matrix. 
3. Otherwise (if inner array from this.stacks matrix at the input parameter index is not empty) then recursively call the shiftIndex method, 
but with the parameter of index + 1 so it'll take out the first element from the next inner array stack and set it equal to a variable called
firstItemFromNextStack. 
4. Push the firstItemFromNextStack element into the inner array of this.stacks matrix at the input parameter index. This will keep taking out the 
first item from the next inner array stack until we go beyond the last inner array stack then it'll stop the if statement and return the original
first item from the inner array at the input parameter index.
 */

class SetOfStacks {
    constructor(capacity) {
        this.capacity = capacity;
        this.stacks = [[]];
        this.currentStackIndex = 0;
    }

    get length() {
        return this.currentStackIndex + 1;
    };

    push(item) {
        if(this.stacks[this.currentStackIndex].length >= this.capacity) {
            this.stacks.push([]);
            this.currentStackIndex++;
            this.stacks[this.currentStackIndex].push(item);
        } else {
            this.stacks[this.currentStackIndex].push(item);
        }        
    };

    pop() {
        if (this.stacks[this.currentStackIndex].length === 0) {
            this.stacks.splice(this.currentStackIndex, 1);
            this.currentStackIndex--;
        }
        let lastItem = this.stacks[this.currentStackIndex].pop();
        return lastItem;
    };

    popAT(index) {
        return this.stacks[index].pop();
    };

    popAtWithRollOver(index) {
        return this._shiftIndex(index);
    };

    _shiftIndex(index) {
        let firstItem = this.stacks[index].shift();

        if (this.stacks[index].length === 0) {
            this.stacks.splice(index, 1);
            this.currentStackIndex--;
        } else if (this.stacks.length > index + 1) {
            let firstItemFromNextStack = this._shiftIndex(index + 1);
            this.stacks[index].push(firstItemFromNextStack);
        };
        return firstItem;
    };
};

/* Some console.log tests */
// const stacks = new SetOfStacks(3);
// stacks.push(6);
// stacks.push(8);
// stacks.push(3);
// console.log(stacks.length);   // should print 1

// stacks.push(4);
// console.log(stacks.length);   // should print 2

// console.log(stacks.popAT(0)); // should print 3

// console.log(stacks.pop());    // should print 4
// console.log(stacks.pop());    // should print 8
// console.log(stacks.length);   // should print 1


const stacks = new SetOfStacks(3);
stacks.push(1);
stacks.push(2);
stacks.push(3);
console.log(stacks.length);   // should print 1

stacks.push(4);
stacks.push(5);
stacks.push(6);

stacks.push(7);
stacks.push(8);
stacks.push(9);

stacks.push(10);
stacks.push(11);
stacks.push(12);

stacks.push(13);
stacks.push(14);
stacks.push(15);

console.log(stacks.length);   // should print 5
// console.log(stacks.stacks[0]);

console.log(stacks.popAtWithRollOver(2)); // should print 7
// console.log(stacks.stacks[0].length); // 3
// console.log(stacks.stacks[1].length); // 3
// console.log(stacks.stacks[2].length); // 3
// console.log(stacks.stacks[3].length); // 3
// console.log(stacks.stacks[4].length); // 2

console.log(stacks.stacks[0]); // 3
console.log(stacks.stacks[1]); // 3
console.log(stacks.stacks[2]); // 3
console.log(stacks.stacks[3]); // 3
console.log(stacks.stacks[4]); // 2


// console.log(stacks.popAT(2)); // should print 9