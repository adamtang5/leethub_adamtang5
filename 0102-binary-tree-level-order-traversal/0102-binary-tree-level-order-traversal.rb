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
# @return {Integer[][]}
def level_order(root)
  queue = root ? [[0, root]] : []
  ans = []
  while queue.length > 0
    level, node = queue.shift
    if level > ans.length-1
      ans << []
    end
    ans[level] << node.val
    if node.left
      queue << [level+1, node.left]
    end
    if node.right
      queue << [level+1, node.right]
    end
  end
  return ans
end