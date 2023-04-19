# Definition for a binary tree node.
# class TreeNode
#   attr_accessor :val, :left, :right
#   def initialize(val = 0, left = nil, right = nil)
#     @val = val
#     @left = left
#     @right = right
#   end
# end
# @param {Integer[]} nums
# @return {TreeNode}
def helper(lb, ub, nums)
  return nil if lb == ub
  mid = (lb+ub)/2
  return TreeNode.new(nums[mid], helper(lb, mid, nums), helper(mid+1, ub, nums))
end

def sorted_array_to_bst(nums)
  return helper(0, nums.length, nums)
end