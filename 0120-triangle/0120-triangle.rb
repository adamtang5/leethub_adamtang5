# @param {Integer[][]} triangle
# @return {Integer}
def minimum_total(triangle)
  level, left, right = 0, nil, nil
  while level < triangle.length-1
    level += 1
    (0..level).each do |i|
      left = i-1 < 0 ? 1/0.0 : triangle[level-1][i-1]
      right = i >= level ? 1/0.0 : triangle[level-1][i]
      triangle[level][i] += [left, right].min
    end
  end
  triangle[level].min
end