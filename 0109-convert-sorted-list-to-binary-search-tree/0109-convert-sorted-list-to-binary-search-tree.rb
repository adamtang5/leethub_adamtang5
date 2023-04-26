# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val = 0, _next = nil)
#     @val = val
#     @next = _next
#   end
# end
# Definition for a binary tree node.
# class TreeNode
#   attr_accessor :val, :left, :right
#   def initialize(val = 0, left = nil, right = nil)
#     @val = val
#     @left = left
#     @right = right
#   end
# end
# @param {ListNode} head
# @return {TreeNode}
def helper(lb, ub, lst)
  return nil if lb == ub
  mid = (lb+ub) / 2
  return TreeNode.new(lst[mid].val, helper(lb, mid, lst), helper(mid+1, ub, lst))
end

def sorted_list_to_bst(head)
  lst, curr = [], head
  while curr
    lst << curr
    curr = curr.next
  end
  
  return helper(0, lst.length, lst)
end