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
};

// My own solution: Doesn't work properly
/*Pseudocode:
Takes in startNode as an argument.
1. Make an if conditional to see if startNode.left and startNode.right does not exist then return true. This can be a base case
2. Make another if condition to see if startNode.left exists but not startNode.right and vice versa (or startNode.left doesn't exist but
startNode.right does exist) then return false
3. Make a 3rd if statement of if startNode.left and startNode.right exists then recursively call the checkBalanced function on the left side 
of startNode (startNode.left) and then also recursively call the checkBalanced function on the right side of startNode (startNode.right)
 */

// const checkBalanced = (startNode) => {
//     // 1st base case to return true
//     if ((startNode.left == null && startNode.right == null)) {
//         return true;
//     }
//     // 2nd base case that returns false
//     else if ((startNode.left && startNode.right == null) || (startNode.left == null && startNode.right)) {
//         return false;
//     } else if (startNode.left && startNode.right) {
//         checkBalanced(startNode.left);
//         checkBalanced(startNode.right);
//         return true;
//     } 
// };

// Suggested Solution: O(n) time complexity?
/*Pseudocode:
Takes in startNode as a parameter
1. Make an if statement, check if startNode does not exist then return true (if binary tree is non-existent it's even so return true)
2. Make a helper function, call it minDepth which takes in parameter of node.
3. In minDepth helper function, make the base case of if node is non-existent return 0. Otherwise, using Math.min method, recursively call 1 plus
the minDepth function on left side of node (node.left) and right side of node (node.right) and find the minimum between the recursive calls of the 
left vs. right side of node binary tree and return
4. Make a second helper function, (outside previous helper function) call it maxDepth which also takes node as a parameter.
5. Inside maxDepth helper function, make the base case of if node doesn't exist return 0. Otherwise, using Math.max method, recursively call 1 plus
the maxDepth function on the left side of input node and on the right side of input node and find the maximum and return  
6. Now outside the helper function return that maxDepth call of the startNode minus minDepth helper function call of the startNode is equal to 
0. It'll return true if the difference between maxDepth and minDepth between left and right sides is 0 otherwise if the difference is more more 
than 0 then it'll return false.  
 */ 

const checkBalanced = (startNode) => {
  if (!startNode) return true;

  const minDepth = (node) => {
    if (!node) return 0;

    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
  };

  const maxDepth = (node) => {
    if (!node) return 0;

    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
  };
  // console.log('maxDepth left', maxDepth(startNode.left));
  // console.log('maxDepth right', maxDepth(startNode.right));
  // console.log('minDepth left', minDepth(startNode.left));
  // console.log('minDepth right', minDepth(startNode.right));

  return (maxDepth(startNode) - minDepth(startNode)) === 0;
};

// console log tests

// const root = new BinaryTreeNode(5);
// console.log(checkBalanced(root)); // should print true

// root.insertLeft(10);
// console.log(checkBalanced(root)); // should print false

// root.insertRight(11);
// console.log(checkBalanced(root)); // should print true;

const root = new BinaryTreeNode(6);
console.log(checkBalanced(root)); // should print true

root.insertLeft(10);
console.log(checkBalanced(root)); // should print false

root.insertRight(18);
console.log(checkBalanced(root)); // should print true

root.left.insertLeft(9);
console.log(checkBalanced(root)); // should print false

root.right.insertRight(89);
console.log(checkBalanced(root)); // should print false

root.left.insertRight(15);
root.right.insertLeft(0);
console.log(checkBalanced(root)); // should print true

