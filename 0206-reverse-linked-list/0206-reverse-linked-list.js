/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head;
    let [rev, curr] = [null, head];
    while (head) {
        head = curr.next;
        curr.next = rev;
        rev = curr;
        curr = head;
    }
    return rev;
};