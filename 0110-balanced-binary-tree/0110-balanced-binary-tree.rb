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
def dfs(node)
  return [true, 0] if !node
  left, right = dfs(node.left), dfs(node.right)
  bal = left[0] && right[0] && (left[1]-right[1]).abs <= 1
  return [bal, 1+[left[1], right[1]].max]
end

def is_balanced(root)
  return dfs(root)[0]
end