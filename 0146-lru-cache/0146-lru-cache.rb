class Node
  attr_accessor :key, :val, :prev, :next
  
=begin
  :type key: Integer
  :type val: Integer
=end
  def initialize(key, val)
    @key = key
    @val = val
    @prev = @next = nil
  end
  
end

class LRUCache

=begin
  :type capacity: Integer
=end
  def initialize(capacity)
    @capacity = capacity
    @cache = Hash.new
    @left, @right = Node.new(0, 0), Node.new(0, 0)
    @left.next = @right
    @right.prev = @left
  end

  
=begin
  :type node: Node
  :rtype: Void
=end
  def remove(node)
    prev, nxt = node.prev, node.next
    prev.next, nxt.prev = nxt, prev
  end

  
=begin
  :type node: Node
  :rtype: Void
=end
  def insert(node)
    prev, nxt = @right.prev, @right
    prev.next = nxt.prev = node
    node.next, node.prev = nxt, prev
  end

  
=begin
  :type key: Integer
  :rtype: Integer
=end
  def get(key)
    if @cache.include?(key)
      remove(@cache[key])
      insert(@cache[key])
      return @cache[key].val
    end
    -1
  end


=begin
  :type key: Integer
  :type value: Integer
  :rtype: Void
=end
  def put(key, value)
    remove(@cache[key]) if @cache.include?(key)
    @cache[key] = Node.new(key, value)
    insert(@cache[key])
    
    if @cache.length > @capacity
      lru = @left.next
      remove(lru)
      @cache.delete(lru.key)
    end
  end


end

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache.new(capacity)
# param_1 = obj.get(key)
# obj.put(key, value)