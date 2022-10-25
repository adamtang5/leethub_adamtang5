/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let [rev, double, remain] = [null, head, head.next];
    let currMax = -Infinity;
    while (double && double.next) {
        double = double.next.next;
        head.next = rev;
        rev = head;
        head = remain;
        remain = remain.next;
    }
    while (rev) {
        currMax = Math.max(currMax, rev.val + head.val);
        rev = rev.next;
        head = head.next;
    }
    return currMax;
};