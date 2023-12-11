/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *  this.val = val === undefined ? 0 : val;
 *  this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const newGraph = {};
  if (!node) return null;
  const visited = new Set();
  
  const dfs = node => {
    visited.add(node.val);
    newGraph[node.val] ||= new Node(node.val);
    node.neighbors.forEach(nb => {
      newGraph[nb.val] ||= new Node(nb.val);
      if (!newGraph[node.val].neighbors.includes(newGraph[nb.val])) {
        newGraph[node.val].neighbors.push(newGraph[nb.val]);
      }
      if (!visited.has(nb.val)) dfs(nb);
    });
  };
  
  dfs(node);
  return newGraph[1];
};