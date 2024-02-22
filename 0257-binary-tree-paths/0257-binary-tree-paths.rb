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
# @return {String[]}
def binary_tree_paths(root)
  return [root.val.to_s] if !root.left && !root.right
  ans = []
  if root.left
    ans += binary_tree_paths(root.left).map{ |path| "#{root.val.to_s}->#{path}" }
  end
  if root.right
    ans += binary_tree_paths(root.right).map{ |path| "#{root.val.to_s}->#{path}" }
  end
  ans
end