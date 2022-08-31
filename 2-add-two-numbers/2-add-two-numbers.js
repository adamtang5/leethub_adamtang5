/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
create new linked list (dummyHead) -- return dummyHead.next
keep track of length1 and length2
*/

var addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode();       // representation of 0
    
    let [curr1, curr2, currDH] = [l1, l2, dummyHead];
    
    while (curr1 && curr2) {
        currDH.next = new ListNode(curr1.val + curr2.val);
        currDH = currDH.next;
        curr1 = curr1.next;
        curr2 = curr2.next;        
    }
    
    currDH.next = curr1 ? curr1 : curr2;
    
    let carry = 0;
    currDH = dummyHead;
    while (currDH) {
        currDH.val += carry;
        carry = Math.floor(currDH.val / 10);
        currDH.val %= 10;
        // console.log(carry, currDH.val);
        if (!currDH.next && carry) {
            currDH.next = new ListNode(carry);
            carry = 0;
        }
        currDH = currDH.next;
    }
        
    return dummyHead.next;
};