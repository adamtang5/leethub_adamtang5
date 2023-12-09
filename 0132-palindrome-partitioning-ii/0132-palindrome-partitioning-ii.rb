# @param {String} s
# @return {Integer}
def min_cut(s)
  adj = Hash.new{ |h, k| h[k] = Set.new }
  (0...s.length).each do |i|
    (i..i+1).each do |j|
      l, r = i, j
      while (0...s.length).include?(l) && (0...s.length).include?(r) && s[l] == s[r]
        adj[l] << r+1
        l, r = l-1, r+1
      end
    end
  end
  
  path_q, visited = [[0]], [0].to_set
  while !path_q.empty?
    curr_path = path_q.shift
    curr_node = curr_path[-1]
    return curr_path.length-2 if curr_node == s.length
    adj[curr_node].each do |nb|
      if !visited.include?(nb)
        visited << nb
        path_q << curr_path+[nb]
      end
    end
  end
end