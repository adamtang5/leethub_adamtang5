# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val = 0, _next = nil)
#     @val = val
#     @next = _next
#   end
# end
# @param {ListNode[]} lists
# @return {ListNode}
def merge_2_lists(list1, list2)
  dh = ListNode.new
  curr1, curr2, curr_dh = list1, list2, dh
  while curr1 && curr2
    if curr1.val <= curr2.val
      curr_dh.next = curr1
      curr1 = curr1.next
    else
      curr_dh.next = curr2
      curr2 = curr2.next
    end
    curr_dh = curr_dh.next
  end
  curr_dh.next = curr1 ? curr1 : curr2
  dh.next
end

def merge_k_lists(lists)
  return nil if lists.length == 0
  first = second = nil
  while lists.length > 1
    first = lists.shift
    second = lists.shift
    lists << merge_2_lists(first, second)
  end
  lists[0]
end