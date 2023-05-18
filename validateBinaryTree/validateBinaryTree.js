// My adapted solution:
/*Pseudocode:
Takes in root node (rootNode) as an input parameter
1. Initialize an empty array, call it stack
2. Push the rootNode into the stack in an object, setting key of node to rootNode, setting key of lowerBound to -Infinity and setting key of
upperBound to Infinity
3. Make a while loop of while stack is not empty (stack.length is more than 0), pop the last item from the stack (the last object) and set it to a
variable called nodeAndBounds
4. Initialize a variable called node and set it equal to the node from nodeAndBounds (nodeAndBounds.node)
5. Initialize a variable called lowerBound and set it equal to the lowerBound from nodeAndBounds (nodeAndBounds.lowerBound)
6. Initialize a variable called upperBound and set it equal to the upperBound from nodeAndBounds (nodeAndBounds.upperBound)
7. Make an if statement, check if value of node is less than or equal to lowerBound or value of node is more than or equal to upperBound then return
false
8. Otherwise (value of root node is more than lowerBound and less than upperBound), if left side of node exists, then insert into stack as an 
object, the left side of node with key of node, the lowerBound key with value of lowerBound and the uppderBound key with value of this root 
node value.
9. Outside, previous if statement, check if right side of node exists, then insert into back of stack as an object, the right of node with key of
node, the lowerBound key with value of this root node value, and the upperBound key with value of upperBound.
10. Outside while loop return true. So that once the stack is empty, but the lowerBound (parent node value) of right child node is not higher than
child node value and upperBound (parent node value) of left child node is not lower than this left child node value it'll return to be a true 
binary search tree
 */

const isBinarySearchTree = rootNode => {
    let stack = [];
    stack.push({node: rootNode, lowerBound: -Infinity, upperBound: Infinity});

    while (stack.length > 0) {
        nodeAndBounds = stack.pop();
        node = nodeAndBounds.node;
        lowerBound = nodeAndBounds.lowerBound;
        upperBound = nodeAndBounds.upperBound;

        if (node.value <= lowerBound || node.value >= upperBound) {
            return false;
        };
        if (node.left) {
            stack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});
        }
        if (node.right) {
            stack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
        };        
    };
    return true;
}



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

/* Some console.log tests */
const root = new BinaryTreeNode(50);
root.insertLeft(30);
root.left.insertLeft(20);
root.left.insertRight(60);
root.insertRight(80);
root.right.insertLeft(70);
root.right.insertRight(90);

console.log(isBinarySearchTree(root.left));   // should print true
console.log(isBinarySearchTree(root.right));  // should print true
console.log(isBinarySearchTree(root));        // should print false