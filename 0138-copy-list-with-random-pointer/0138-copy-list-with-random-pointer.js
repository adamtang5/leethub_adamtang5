/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *  this.val = val;
 *  this.next = next;
 *  this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return head;
  
  const orig = [];
  let curr = head;
  while (curr) {
    orig.push(curr);
    curr = curr.next;
  }
  const randoms = new Array(orig.length).fill(0);
  for (let i = 0; i < orig.length; i++) {
    randoms[i] = orig.indexOf(orig[i].random);
  }
  
  const ans = new Node(head.val);
  const ansArr = [];
  curr = ans;
  for (let i = 1; i < orig.length; i++) {
    ansArr.push(curr);
    curr.next = new Node(orig[i].val);
    curr = curr.next;
  }
  ansArr.push(curr);

  randoms.forEach((r, i) => {
    if (r >= 0) ansArr[i].random = ansArr[r];
  });
  
  return ans;
};