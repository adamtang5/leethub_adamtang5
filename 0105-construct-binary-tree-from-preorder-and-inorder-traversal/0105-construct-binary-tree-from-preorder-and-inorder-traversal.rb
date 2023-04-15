# Definition for a binary tree node.
# class TreeNode
#   attr_accessor :val, :left, :right
#   def initialize(val = 0, left = nil, right = nil)
#     @val = val
#     @left = left
#     @right = right
#   end
# end
# @param {Integer[]} preorder
# @param {Integer[]} inorder
# @return {TreeNode}
def helper(pre_vals, in_idx)
  return nil if pre_vals == []
  return TreeNode.new(pre_vals[0]) if pre_vals.length == 1
  
  root_val = pre_vals[0]
  left_vals, right_vals = [], []
  (1...pre_vals.length).each do |i|
    if in_idx[pre_vals[i]] < in_idx[root_val]
      left_vals << pre_vals[i]
    else
      right_vals << pre_vals[i]
    end
  end
  return TreeNode.new(root_val, helper(left_vals, in_idx), helper(right_vals, in_idx))
end

def build_tree(preorder, inorder)
  in_idx = Hash.new
  inorder.each_with_index{ |el, i| in_idx[el] = i }
  p in_idx
  return helper(preorder, in_idx)
end