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
# @return {Boolean}
def dfs(left, right)
  return true if !left && !right
  return false if !left || !right
  return false if left.val != right.val
  return dfs(left.left, right.right) && dfs(left.right, right.left)
end
def is_symmetric(root)
  return dfs(root.left, root.right)
end