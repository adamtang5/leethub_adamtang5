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
# @return {Integer}
def count_nodes(root)
  return 0 if !root
  left = right = root
  l_ht = r_ht = 1
  while left.left
    left = left.left
    l_ht += 1
  end
  while right.right
    right = right.right
    r_ht += 1
  end
  return (1<<l_ht)-1 if l_ht == r_ht
  1+count_nodes(root.left)+count_nodes(root.right)
end