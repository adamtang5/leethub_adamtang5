# Definition for a binary tree node.
# class TreeNode
#   attr_accessor :val, :left, :right
#   def initialize(val = 0, left = nil, right = nil)
#     @val = val
#     @left = left
#     @right = right
#   end
# end
# @param {TreeNode} root
# @return {Integer[]}
def postorder_traversal(root)
  ans, popped = [], nil
  stack = root ? [root] : []
  while !stack.empty?
    popped = stack.pop
    ans.unshift(popped.val)
    stack << popped.left if popped.left
    stack << popped.right if popped.right
  end
  ans
end