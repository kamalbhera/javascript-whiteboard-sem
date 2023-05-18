// My own solution: O(2n) --> ~ O(n) time complexity O(n) space complexity
/*Pseudocode: Takes in linked list head as an argument input.  
1. Declare a variable called current and set it equal to the input head which will serve as the pointer to each linked list node.
2. Initialize an empty array called nodeValStore
3. Make a while loop of while current exists and is not equal to null
4. Inside while loop, push the value of current (current.value) into the nodeValStore array.
5. Still inside while loop, set current to current.next to traverse through the linked list. While loop will continue until we've reached
the last node in the linked list.
6. Outside while loop make a for loop to loop through the nodeValStore array but starting at index 0 but ending at middle of nodeValStore
7. Inside for loop, make an if statement of if current array element at current array index is not equal to the array element at the index
of array length minus 1 minus current index then return false and break.
8. Outside for loop return true.
 */

// const isLinkedListPalindrome = sllHead => {
//   let current = sllHead;
//   let nodeValStore = [];

//   while (current) {
//     nodeValStore.push(current.value);
//     current = current.next;
//   }

//   for (let i = 0; i < nodeValStore.length / 2; i++) {
//     if (nodeValStore[i] !== nodeValStore[nodeValStore.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

// Instructor solution: O(2n) --> ~ O(n) time complexity O(n) space complexity
/*Pseudocode:
1. Initialize a fast and slow variables and set them equal to the input head. They will serve as pointers on the linked list node, slow
will traverse the node 1 at a time, fast will traverse the node 2 at a time so it traverses at twice the speed as slow pointer.
2. Initialize an empty array, call it nodeValStore (it'll store the values of node at slow pointer)
3. Make a while loop of while fast is not null and fast.next is not null (so that fast pointer will stop at the last node if there are
odd number of nodes and stop after the last node if there are even number of nodes).
4. Inside while loop, push the value of node at slow pointer into the nodeValStore array.
5. Still inside while loop, increment slow pointer by 1 node by setting slow equal to slow.next
6. Still inside while loop, increment fast pointer by 2 nodes by setting fast equal to fast.next.next. While loop will continue till fast
is at last node or right after last node.
7. if there're odd number of nodes in linked list, fast will stop at last node so make a while loop of while fast is not null, increment
slow pointer by 1 node by setting slow equal to slow.next so that we can skip the middle node which is always equal on left and right side
in a palindrome anyway.
8. Outside while loop, make another while loop of while slow is not null, make a variable called top and set it equal to the last value
in the nodeValStore by popping the last value from nodeValStore using pop method. 
9. Inside the above while loop, make an if statement, check if top variable does not equal the value of node where slow pointer is
currently at then return false.
10. Ouside if statement, traverse the slow pointer through the rest (2nd half) of linked list by setting slow equal to slow.next. While 
loop with if statement will continue until a non-palindrome is found or if all are palindromes and the first half is mirror image of 2nd
half then while loop continues till slow pointer traverses the last node in linked list.
11. Outside while loop return true.

 */
const isLinkedListPalindrome = sllHead => {
    let slow = sllHead;
    let fast = sllHead;
    let nodeValStore = [];

    while (fast && fast.next) {
        nodeValStore.push(slow.value);
        slow = slow.next;
        fast = fast.next.next;
    };

    if(fast) {
        slow = slow.next;
    };

    while (slow) {
        let top = nodeValStore.pop();

        if (top !== slow.value) {
            return false;
        };
        slow = slow.next;
    };
    return true;
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a1 = new ListNode(1);
let b1 = new ListNode(2);
let c1 = new ListNode(3);
let d1 = new ListNode(2);
let e1 = new ListNode(1);

a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;

const w = new ListNode(10);
const x = new ListNode(11);
const y = new ListNode(11);
const z = new ListNode(10);

w.next = x;
x.next = y;
y.next = z;

console.log(isLinkedListPalindrome(a1)); // should print true
console.log(isLinkedListPalindrome(b1)); // should print false since now the 'a' node is not included in the linked list

console.log(isLinkedListPalindrome(w)); // should print true
