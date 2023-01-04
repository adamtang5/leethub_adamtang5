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
var deleteDuplicates = function(head) {
    if (!head) return head;
    let [curr, currVal] = [head, head.val];
    while (curr) {
        while (curr.next && curr.next.val === currVal) curr.next = curr.next.next;
        curr = curr.next;
        if (curr) currVal = curr.val;
    }
    return head;
};