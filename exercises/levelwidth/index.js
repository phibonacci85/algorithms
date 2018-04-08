// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [1];
  const nodes = [root];
  while(nodes.length) {
    const node = nodes.shift();
    nodes.push(...node.children);
    arr.push(node.children.length);
  }
}

module.exports = levelWidth;
