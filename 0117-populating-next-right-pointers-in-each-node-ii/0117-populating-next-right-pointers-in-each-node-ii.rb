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
def is_leaf(node)
  !node.left && !node.right
end

def next_child(node)
  !node ? nil : node.left ? node.left : node.right
end

def last_child(node)
  !node ? nil : node.right ? node.right : node.left
end

def connect(root)
  this_cur, this_nxt, nxt_lvl = root, nil, next_child(root)
  while this_cur && nxt_lvl
    this_cur.left.next = this_cur.right if this_cur.left && this_cur.right
    if last_child(this_cur) && this_nxt
      this_nxt = this_nxt.next while this_nxt && is_leaf(this_nxt)
      last_child(this_cur).next = next_child(this_nxt)
    end
    this_cur = this_nxt
    this_nxt = this_nxt.next if this_nxt
    if !this_cur
      this_cur = nxt_lvl
      this_nxt = this_cur
      this_nxt = this_nxt.next while this_nxt && is_leaf(this_nxt)
      nxt_lvl = !this_nxt || is_leaf(this_nxt) ? nil : next_child(this_nxt)
      this_nxt = this_cur.next
    end
  end
  root
end