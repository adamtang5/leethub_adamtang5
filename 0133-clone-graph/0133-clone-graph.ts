/**
 * Definition for Node.
 * class Node {
 *   val: number
 *   neighbors: Node[]
 *   constructor(val?: number, neighbors?: Node[]) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.neighbors = (neighbors===undefined ? [] : neighbors)
 *   }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
  const newGraph = {}
  if (!node) return null
  const visited: Set<number> = new Set()
  
  function dfs(node: Node | null): void {
    visited.add(node.val)
    newGraph[node.val] ||= new Node(node.val)
    node.neighbors.forEach(nb => {
      newGraph[nb.val] ||= new Node(nb.val)
      if (!newGraph[node.val].neighbors.includes(newGraph[nb.val])) {
        newGraph[node.val].neighbors.push(newGraph[nb.val])
      }
      if (!visited.has(nb.val)) dfs(nb)
    })
  }

  dfs(node)
  return newGraph[1]
}