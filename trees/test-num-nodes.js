const BinarySearchTree = require('./BinarySearchTree');

let tree = new BinarySearchTree();

tree.insert(7);
tree.insert(5);
tree.insert(2);
tree.insert(8);
tree.insert(9);
tree.insert(3);
tree.insert(4);
tree.insert(10);
tree.insert(11);

console.log(tree.getNumNodes())
