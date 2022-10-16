# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
    dummyHead = ListNode.new
    c1, c2, cdh = list1, list2, dummyHead
    while c1 and c2
        if c1.val <= c2.val
            cdh.next = c1
            c1 = c1.next
        else
            cdh.next = c2
            c2 = c2.next
        end
        cdh = cdh.next
    end
    cdh.next = c1 ? c1 : c2
    return dummyHead.next
end