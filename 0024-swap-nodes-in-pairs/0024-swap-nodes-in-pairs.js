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
var swapPairs = function(head) {
    const dummyHead = new ListNode();
    dummyHead.next = head;
    
    let prev = dummyHead;
    let next = prev.next;
    let curr;
    if (!head) return head;
    curr = next.next ? next.next : null;
    
    while (next.next) {
        prev.next = curr;
        next.next = curr.next;
        curr.next = next;
        if (!next.next) return dummyHead.next;
        prev = next;
        next = next.next;
        curr = next.next ? next.next : null;
    }
    return dummyHead.next;
};