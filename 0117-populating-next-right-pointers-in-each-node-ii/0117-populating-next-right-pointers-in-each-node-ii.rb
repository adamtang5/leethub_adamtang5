# Definition for Node.
# class Node
#   attr_accessor :val, :left, :right, :next
#   def initialize(val)
#     @val = val
#     @left, @right, @next = nil, nil, nil
#   end
# end

# @param {Node} root
# @return {Node}
def connect(root)
  queue = root ? [[0, root]] : []
  levels = []
  while !queue.empty?
    level, node = queue.shift
    levels << [] if level > levels.length-1
    levels[level] << node
    queue << [level+1, node.left] if node.left
    queue << [level+1, node.right] if node.right
  end
  curr = nil
  while !levels.empty?
    level = levels.shift
    curr = nil
    last = nil
    while !level.empty?
      last = level.pop
      last.next = curr
      curr = last
    end
  end
  root
end