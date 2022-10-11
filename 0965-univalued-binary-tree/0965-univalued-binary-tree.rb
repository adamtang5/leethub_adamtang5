# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Boolean}
def is_unival_tree(root, root_val=nil)
    root_val = root_val != nil ? root_val : root.val
    # base case
    return false if root.val != root_val
    return true if root.left == nil && root.right == nil
    
    # recursive step
    return (root.left == nil || is_unival_tree(root.left, root_val)) && (root.right == nil || is_unival_tree(root.right, root_val))
end