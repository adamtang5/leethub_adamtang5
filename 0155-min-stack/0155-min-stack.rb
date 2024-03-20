class Node
  attr_accessor :val, :min
  
=begin
  :type val: Integer
  :type min: Integer
=end
  def initialize(val)
    @val = val
    @min = nil
  end
  
end

class MinStack
  def initialize()
    @stack = []
  end


=begin
  :type val: Integer
  :rtype: Void
=end
  def push(val)
    new_node = Node.new(val)
    if @stack.empty? || get_min() > val
      new_node.min = val
    else
      new_node.min = get_min()
    end
    @stack << new_node
  end


=begin
  :rtype: Void
=end
  def pop()
    @stack.pop
    nil
  end


=begin
  :rtype: Integer
=end
  def top()
    @stack[-1].val
  end


=begin
  :rtype: Integer
=end
  def get_min()
    @stack[-1].min
  end


end

# Your MinStack object will be instantiated and called as such:
# obj = MinStack.new()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.get_min()