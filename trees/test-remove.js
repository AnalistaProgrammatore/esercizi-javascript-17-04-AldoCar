const BinarySearchTree = require('./BinarySearchTree')

let tree = new BinarySearchTree()

tree.insert(8)
tree.insert(18)
tree.insert(20)
tree.insert(45)
tree.insert(5)
tree.insert(1)
tree.insert(3)
tree.insert(7)
tree.insert(65)
tree.insert(75)

console.log(tree.getRoot())

tree.remove(8)
tree.remove(18)
tree.remove(5)
tree.remove(3)
console.log(tree.getRoot())
