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
    let curr, nextPair;
    if (!head) return head;
    curr = next.next ? next.next : null;
    
    while (next.next) {
        nextPair = curr.next;
        prev.next = curr;
        curr.next = next;
        next.next = nextPair;
        if (!nextPair) return dummyHead.next;
        prev = next;
        next = nextPair;
        curr = next.next ? next.next : null;
    }
    return dummyHead.next;
};