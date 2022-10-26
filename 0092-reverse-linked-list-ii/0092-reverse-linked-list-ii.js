/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (left === right) return head;
    
    let [i, rev, curr] = [1, null, head];
    let prev, remain;
    if (left === 1) {
        prev = new ListNode();
        prev.next = head;
    }
    while (i <= left - 1) {
        if (i === left - 1) {
            prev = curr;
        }
        curr = curr.next;
        i++;
    }
    while (i <= right) {
        remain = curr.next;
        curr.next = rev;
        rev = curr;
        curr = remain;
        i++;
    }
    prev.next.next = remain;
    prev.next = rev;
    if (left === 1) head = prev.next;
    return head;
};