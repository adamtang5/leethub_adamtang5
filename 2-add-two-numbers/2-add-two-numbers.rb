# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
    dummyHead = ListNode.new
    c1, c2, cdh = l1, l2, dummyHead
    while c1 && c2
        cdh.next = ListNode.new c1.val + c2.val
        cdh = cdh.next
        c1 = c1.next
        c2 = c2.next
    end
    cdh.next = c1 ? c1 : c2
    cdh, carry = dummyHead, 0
    while cdh
        cdh.val += carry
        if cdh.val >= 10
            carry = 1
            cdh.val -= 10
        else
            carry = 0
        end
        # p dummyHead
        if not cdh.next and carry > 0
            cdh.next = ListNode.new carry
            carry = 0
        end
        cdh = cdh.next
    end
    return dummyHead.next
end