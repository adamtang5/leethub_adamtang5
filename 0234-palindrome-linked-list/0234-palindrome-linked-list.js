/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const vals = [];
    let curr = head;
    while (curr) {
        vals.push(curr.val);
        curr = curr.next;
    }
    let [l, r] = [0, vals.length - 1];
    while (l < r) {
        if (vals[l] !== vals[r]) {
            return false;
        } else {
            l++;
            r--;
        }
    }
    return true;
};