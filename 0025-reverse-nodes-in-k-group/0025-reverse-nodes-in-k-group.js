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
var reverseKGroup = function(head, k) {
    let [curr, prev, rev, len, i] = [head, head, null, 0, 0];
    let remain, newPrev, j;
    while (curr) {
        curr = curr.next;
        len++;
    }
    curr = head;
    
    while (len - i >= k) {
        j = 0;
        rev = null;
        while (j < k) {
            remain = curr.next;
            curr.next = rev;
            rev = curr;
            curr = remain;
            j++;
        }
        if (i === 0) {
            prev.next = remain;
            head = rev;
        } else {
            prev.next.next = remain;
            newPrev = prev.next;
            prev.next = rev;
            prev = newPrev;
        }
        i += k;
    }
    
    return head;
};