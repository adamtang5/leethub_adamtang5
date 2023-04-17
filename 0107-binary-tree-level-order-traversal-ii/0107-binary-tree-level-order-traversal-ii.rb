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
def level_order_bottom(root)
  return [] if !root
  queue = root ? [[0, root]] : []
  hash = Hash.new{ |h, k| h[k] = Array.new }
  while queue.length > 0
    level, node = queue.shift
    hash[level] << node.val
    if node.left
      queue << [level+1, node.left]
    end
    if node.right
      queue << [level+1, node.right]
    end
  end
  ans = []
  hash.keys.max.downto(0).each{ |level| ans << hash[level] }
  return ans
end