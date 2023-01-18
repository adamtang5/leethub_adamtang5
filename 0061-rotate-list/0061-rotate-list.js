/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return head;
    let [curr, len, i] = [head, 0, 0];
    while (curr) {
        len++;
        curr = curr.next;
    }
    const headIdx = (len - (k % len)) % len;
    if (headIdx === 0) return head;
    curr = head;
    while (i < headIdx - 1) {
        curr = curr.next;
        i++;
    }
    const last = curr;
    const newHead = curr.next;
    last.next = null;
    curr = newHead;
    while (curr.next) {
        curr = curr.next;
    }
    curr.next = head;
    return newHead;
};