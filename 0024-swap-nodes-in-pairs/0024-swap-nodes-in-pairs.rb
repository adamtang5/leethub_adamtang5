# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def swap_pairs(head)
    dh = ListNode.new
    dh.next = head
    p_node = dh
    n_node = p_node.next
    return head if head == nil
    c_node = n_node.next
    while n_node.next
        p_node.next = c_node
        n_node.next = c_node.next
        c_node.next = n_node
        return dh.next if n_node.next == nil
        p_node = n_node
        n_node = n_node.next
        c_node = n_node.next
    end
    return dh.next
end