# Definition for Node.
# class Node
#   attr_accessor :val, :next, :random
#   def initialize(val = 0)
#     @val = val
#	    @next = nil
#	    @random = nil
#   end
# end

# @param {Node} node
# @return {Node}
def copyRandomList(head)
  return head if !head
  
  orig, curr = [], head
  while curr
    orig << curr
    curr = curr.next
  end
  
  randoms = [0]*orig.length
  (0...orig.length).each { |i| randoms[i] = orig[i].random ? orig.index(orig[i].random) : -1 }
  
  ans, ans_arr = Node.new(head.val), []
  curr = ans
  (1...orig.length).each do |i|
    ans_arr << curr
    curr.next = Node.new(orig[i].val)
    curr = curr.next
  end
  ans_arr << curr
  
  randoms.each_with_index { |r, i| ans_arr[i].random = ans_arr[r] if r >= 0 }
  ans
end