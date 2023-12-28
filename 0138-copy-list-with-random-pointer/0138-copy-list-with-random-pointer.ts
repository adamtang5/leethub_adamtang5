/**
 * Definition for Node.
 * class Node {
 *   val: number
 *   next: Node | null
 *   random: Node | null
 *   constructor(val?: number, next?: Node, random?: Node) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 *     this.random = (random===undefined ? null : random)
 *   }
 * }
 */
function copyRandomList(head: Node | null): Node | null {
  if (!head) return head
  
  const orig: Node[] = []
  let curr: Node | null = head
  while (curr) {
    orig.push(curr)
    curr = curr.next
  }
  const randoms: number[] = new Array(orig.length).fill(0)
  for (let i = 0; i < orig.length; i++) {
    randoms[i] = orig.indexOf(orig[i].random)
  }
  
  const ans: Node = new Node(head.val)
  const ansArr: Node[] = []
  curr = ans
  for (let i = 1; i < orig.length; i++) {
    ansArr.push(curr)
    curr.next = new Node(orig[i].val)
    curr = curr.next
  }
  ansArr.push(curr)
  
  randoms.forEach((r, i) => {
    if (r >= 0) ansArr[i].random = ansArr[r]
  })
  
  return ans
}