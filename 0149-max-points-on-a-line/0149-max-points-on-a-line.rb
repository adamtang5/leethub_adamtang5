# @param {Integer[][]} points
# @return {Integer}
def group(point_a, point_b, groups)
  slope = point_b[0] == point_a[0] ? 1/0.0 : 1.0*(point_b[1]-point_a[1])/(point_b[0]-point_a[0])
  inv_slope = point_b[1] == point_a[1] ? 1/0.0 : 1.0*(point_b[0]-point_a[0])/(point_b[1]-point_a[1])
  y_int = inv_slope == 0 ? 1/0.0 : point_a[1]-slope*point_a[0]
  x_int = slope == 0 ? 1/0.0 : point_a[0]-inv_slope*point_a[1]
  key = [slope, x_int, y_int]
  groups[key] << point_a
  groups[key] << point_b
end

def max_points(points)
  return points.length if points.length < 3
  groups = Hash.new{ |h, k| h[k] = Set.new }
  (0...points.length-1).each do |i|
    (i+1...points.length).each do |j|
      group(points[i], points[j], groups)
    end
  end
  
  ans = 0
  groups.each_key{ |key| ans = [ans, groups[key].size].max }
  ans
end