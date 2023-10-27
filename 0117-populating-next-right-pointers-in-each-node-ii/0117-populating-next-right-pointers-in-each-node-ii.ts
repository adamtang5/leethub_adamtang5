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
  function isLeaf(node: Node): boolean {
    return !node.left && !node.right
  }
  
  function nextChild(node: Node | null): Node | null {
    return !node ? null : (node.left ? node.left : node.right)
  }
  
  function lastChild(node: Node | null): Node | null {
    return !node ? null : (node.right ? node.right : node.left)
  }
  
  let thisCur: Node | null = root
  let thisNxt: Node | null
  let nxtLvl: Node | null = nextChild(thisCur)
  
  while (thisCur && nxtLvl) {
    if (thisCur.left && thisCur.right) thisCur.left.next = thisCur.right
    if (lastChild(thisCur) && thisNxt) {
      while (thisNxt && isLeaf(thisNxt)) thisNxt = thisNxt.next
      lastChild(thisCur).next = nextChild(thisNxt)
    }
    thisCur = thisNxt
    if (thisNxt) thisNxt = thisNxt.next
    if (!thisCur) {
      thisCur = nxtLvl
      thisNxt = thisCur
      while (thisNxt && isLeaf(thisNxt)) thisNxt = thisNxt.next
      nxtLvl = !thisNxt || isLeaf(thisNxt) ? null : nextChild(thisNxt)
      thisNxt = thisCur.next
    }
  }
  return root
}