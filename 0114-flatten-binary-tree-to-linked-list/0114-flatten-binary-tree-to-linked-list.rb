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
# @return {Void} Do not return anything, modify root in-place instead.
def flatten(root)
  stack = root ? [root] : []
  ans = TreeNode.new
  curr = nil
  res_curr = ans
  while !stack.empty?
    curr = stack.pop
    res_curr.left = nil
    res_curr.right = curr
    res_curr = res_curr.right
    stack << curr.right if curr.right
    stack << curr.left if curr.left
  end
  nil
end