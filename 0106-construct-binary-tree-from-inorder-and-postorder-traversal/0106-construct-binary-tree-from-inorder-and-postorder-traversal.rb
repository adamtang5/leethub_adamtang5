# Definition for a binary tree node.
# class TreeNode
#   attr_accessor :val, :left, :right
#   def initialize(val = 0, left = nil, right = nil)
#     @val = val
#     @left = left
#     @right = right
#   end
# end
# @param {Integer[]} inorder
# @param {Integer[]} postorder
# @return {TreeNode}
def helper(post_lb, post_ub, inorder, postorder, in_idx)
  return nil if post_lb == post_ub
  root_in_idx = in_idx[postorder[post_ub-1]]
  return TreeNode.new(inorder[root_in_idx]) if post_ub-post_lb == 1
  l, r = post_lb, post_ub-2
  if in_idx[postorder[r]] < root_in_idx
    return TreeNode.new(
      inorder[root_in_idx],
      helper(post_lb, post_ub-1, inorder, postorder, in_idx),
      nil
    )
  elsif in_idx[postorder[l]] > root_in_idx
    return TreeNode.new(
      inorder[root_in_idx],
      nil,
      helper(post_lb, post_ub-1, inorder, postorder, in_idx)
    )
  end
  mid = nil
  while l <= r
    mid = (l+r)/2
    if in_idx[postorder[mid]] < root_in_idx && in_idx[postorder[mid+1]] > root_in_idx
      break
    elsif in_idx[postorder[mid]] < root_in_idx
      l = mid+1
    else
      r = mid-1
    end
  end
    return TreeNode.new(
      inorder[root_in_idx],
      helper(post_lb, mid+1, inorder, postorder, in_idx),
      helper(mid+1, post_ub-1, inorder, postorder, in_idx)
    )
end

def build_tree(inorder, postorder)
  in_idx = Hash.new
  inorder.each_with_index{ |el, i| in_idx[el] = i }
  return helper(0, postorder.length, inorder, postorder, in_idx)
end