class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

/* recursiveDepthFirstForEach Pseudocode: Prints node values in depth first search manner recursively
1. Will take in starting node as an input parameter, call it starting_node and callback as a 2nd parameter that'll be the callback function that
calls each node
2. Call the callback function and pass in the value of starting node (starting_node.value) as it's input parameter
3. Recursively call the function but pass in left side of the starting_node for the starting node (starting_node.left)
4. Recursively call the function but pass in right side of the starting_node for the starting node (starting_node.right)
 */

const recursiveDepthFirstForEach = (starting_node, callback) => {
  callback(starting_node.value);

  if (starting_node.left) {
    recursiveDepthFirstForEach(starting_node.left, callback);
  };
  if (starting_node.right) {
    recursiveDepthFirstForEach(starting_node.right, callback);
  };
};

/* iterativeDepthFirstForEach Pseudocode: Prints node values in depth first search manner iteratively
1. Will take in starting node as an input parameter, call it starting_node and callback as a 2nd parameter that'll be the callback functio that 
calls each node
2. Initialize an empty array, call it stack
3. push the input starting_node into the back of the stack
4. Make a while loop of while stack is not empty (length of stack is more than 0)
5. Pop the last node element from back of stack and set it to a variable called get_node
6. Call the callback input function passing it value of get_node (get_node.value) into the callback as a parameter
7. Make an if statement of if nodes right of get_node exists then push the rigth node of get_node (get_node.right) onto back of stack. 
8. Make an if statement of if nodes left of get_node exists then push the left node of get_node (get_node.left) onto the back of the stack. While
loop will repeat itself until all nodes have been called by callback. 
 */

const iterativeDepthFirstForEach = (starting_node, callback) => {
  let stack = [];
  stack.push(starting_node);

  while (stack.length > 0) {
    let get_node = stack.pop();

    callback(get_node.value);

    if (get_node.right) {
      stack.push(get_node.right);
    };
    if (get_node.left) {
      stack.push(get_node.left);
    };
  };
};

/* Some console.log tests */
const root = new BinaryTreeNode(6);
root.insertLeft(10);
root.insertRight(18);
root.left.insertLeft(9);
root.right.insertRight(89);

const cb = x => console.log(x);

recursiveDepthFirstForEach(root, cb); // should print 6 10 9 18 89
console.log();
iterativeDepthFirstForEach(root, cb); // should print 6 10 9 18 89
console.log();

root.left.insertRight(15);
root.right.insertLeft(0);

recursiveDepthFirstForEach(root, cb); // should print 6 10 9 15 18 0 89
console.log();
iterativeDepthFirstForEach(root, cb); // should print 6 10 9 15 18 0 89
console.log();
