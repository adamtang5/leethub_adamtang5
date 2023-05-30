/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const merge2Lists = (list1, list2) => {
    const dh = new ListNode();
    let [curr1, curr2, currDH] = [list1, list2, dh];
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
    return dh.next; 
  };

  if (!lists.length) return null;
  let first, second;
  while (lists.length > 1) {
    first = lists.shift();
    second = lists.shift();
    lists.push(merge2Lists(first, second));
  }
  return lists[0];
};