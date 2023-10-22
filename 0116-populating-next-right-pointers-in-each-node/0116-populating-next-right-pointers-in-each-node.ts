/**
 * Definition for Node.
 * class Node {
 *   val: number
 *   left: Node | null
 *   right: Node | null
 *   next: Node | null
 *   constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *     this.next = (next===undefined ? null : next)
 *   }
 * }
 */
function connect(root: Node | null): Node | null {
  type AuxNode = [number, Node]
  const queue: AuxNode[] = root ? [[0, root]] : []
  const levels: Node[][] = []
  while (queue.length) {
    const [level, node] = queue.shift()
    if (level > levels.length - 1) levels.push([])
    levels[level].push(node)
    if (node.left) queue.push([level + 1, node.left])
    if (node.right) queue.push([level + 1, node.right])
  }
  let curr: Node | null
  while (levels.length) {
    const level: Node[] = levels.shift()
    curr = null
    let last: Node
    while (level.length) {
      last = level.pop()
      last.next = curr
      curr = last
    }
  }
  return root
}