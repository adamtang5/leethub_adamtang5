# @param {Character[][]} matrix
# @return {Integer}
def maximal_rectangle(matrix)
  h = matrix.map{ |row| row.map(&:to_i)}
  v = matrix.map{ |row| row.map(&:to_i)}
  (0...matrix.length).each do |r|
    (0...matrix[0].length-1).reverse_each do |c|
      h[r][c] = h[r][c+1]+1 if h[r][c] > 0
    end
  end
  (0...matrix[0].length).each do |c|
    (0...matrix.length-1).reverse_each do |r|
      v[r][c] = v[r+1][c]+1 if v[r][c] > 0
    end
  end
  ans = ht = wd = 0
  th_set = Set.new
  (0...matrix.length).each do |r|
    (0...matrix[0].length).each do |c|
      th_set.clear
      if h[r][c] > 0
        (0...h[r][c]).each{ |j| th_set.add(v[r][c+j]) }
        th_set.each do |th|
          wd = 0
          wd += 1 while wd < h[r][c] && v[r][c+wd] >= th
          ans = [ans, wd*th].max
        end
        th_set.clear
        (0...v[r][c]).each{ |i| th_set.add(h[r+i][c]) }
        th_set.each do |th|
          ht = 0
          ht += 1 while ht < v[r][c] && h[r+ht][c] >= th
          ans = [ans, ht*th].max
        end
        th_set.clear
      end
    end
  end
  ans
end