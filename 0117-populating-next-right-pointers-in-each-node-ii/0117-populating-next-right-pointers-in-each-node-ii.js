/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *  this.val = val === undefined ? null : val;
 *  this.left = left === undefined ? null : left;
 *  this.right = right === undefined ? null : right;
 *  this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  const isLeaf = node => !node.left && !node.right;
  const nextChild = node => !node ? null : (node.left ? node.left : node.right);
  const lastChild = node => !node ? null : (node.right ? node.right : node.left);
  
  let thisCur = root;
  let thisNxt = null;
  let nxtLvl = nextChild(thisCur);
  
  while (thisCur && nxtLvl) {
    if (thisCur.left && thisCur.right) {
      thisCur.left.next = thisCur.right;
    }
    if (lastChild(thisCur) && thisNxt) {
      while (thisNxt && isLeaf(thisNxt)) thisNxt = thisNxt.next;
      lastChild(thisCur).next = nextChild(thisNxt);
    }
    thisCur = thisNxt;
    if (thisNxt) thisNxt = thisNxt.next;
    if (!thisCur) {
      thisCur = nxtLvl;
      thisNxt = thisCur;
      while (thisNxt && isLeaf(thisNxt)) thisNxt = thisNxt.next;
      nxtLvl = !thisNxt || isLeaf(thisNxt) ? null : nextChild(thisNxt);
      thisNxt = thisCur.next;
    }
  }
  return root;
};