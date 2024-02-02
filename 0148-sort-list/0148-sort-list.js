/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) return head;
  let [slow, fast] = [head, head];
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev1 = head;
  let prev2 = slow.next;
  slow.next = null;
  
  prev1 = sortList(prev1);
  prev2 = sortList(prev2);

  const merge = (head1, head2) => {
    let [prev, curr1, curr2] = [new ListNode(), head1, head2];
    let curr = prev;
    while (curr1 && curr2) {
      if (curr1.val <= curr2.val) {
        curr.next = curr1;
        curr1 = curr1.next;
      } else {
        curr.next = curr2;
        curr2 = curr2.next;
      }
      curr = curr.next;
    }
    if (curr1) {
      curr.next = curr1;
    } else {
      curr.next = curr2;
    }
    return prev.next;
  };
  
  return merge(prev1, prev2);
};