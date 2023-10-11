# @param {Integer[]} heights
# @return {Integer}
def largest_rectangle_area(heights)
  ans = 0
  stack = [
    {
      i: 0,
      s: 0,
      h: heights[0],
    }
  ]
  popped = nil
  (1...heights.length).each do |i|
    if heights[i] <= stack[-1][:h]
      popped = stack.pop
      ans = [ans, (popped[:i]-popped[:s]+1)*popped[:h]].max
      while !stack.empty? && stack[-1][:h] >= heights[i]
        stack[-1][:i] = popped[:i]
        popped = stack.pop
        ans = [ans, (popped[:i]-popped[:s]+1)*popped[:h]].max
      end
      stack << {
        i: i,
        s: popped[:s],
        h: heights[i],
      }
    else
      stack << {
        i: i,
        s: i,
        h: heights[i],
      }
    end
  end
  while !stack.empty?
    popped = stack.pop
    ans = [ans, (popped[:i]-popped[:s]+1)*popped[:h]].max
    stack[-1][:i] = popped[:i] if !stack.empty?
  end
  ans
end