/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    const dummyHead = new ListNode();
    let [curr1, curr2, currDH] = [list1, list2, dummyHead];
    
    while (curr1 && curr2) {
        if (curr1.val <= curr2.val) {
            currDH.next = curr1;
            curr1 = curr1.next;
        } else {
            currDH.next = curr2;
            curr2 = curr2.next;
        }
        currDH = currDH.next;
    }
    
    currDH.next = curr1 ? curr1 : curr2;
    
    return dummyHead.next;
};