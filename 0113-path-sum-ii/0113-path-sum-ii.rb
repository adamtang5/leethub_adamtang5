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
# @param {Integer} target_sum
# @return {Integer[][]}
def path_sum(root, target_sum)
  ans, running_sum = [], 0
  stack1 = root ? [root] : []
  stack2 = []
  curr = nil
  while stack1 != []
    curr = stack1.pop
    stack2 << curr
    running_sum += curr.val
    stack1 << curr.right if curr.right
    stack1 << curr.left if curr.left
    if !stack2[-1].left && !stack2[-1].right
      ans << stack2.map{ |node| node.val } if running_sum == target_sum
      while stack1 != [] && stack2 != [] && stack1[-1] != stack2[-1].right
        curr = stack2.pop
        running_sum -= curr.val
      end
    end
  end
  ans
end