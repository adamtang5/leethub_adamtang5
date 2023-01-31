# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def set_zeroes(matrix)
    rows, cols = Set.new, Set.new
    matrix.each_with_index do |row, r|
        row.each_with_index do |cell, c|
            if cell == 0
                rows.add(r)
                cols.add(c)
            end
        end
    end
    rows.each do |r|
        (0...matrix[0].length).each do |c|
            matrix[r][c] = 0
        end
    end
    cols.each do |c|
        (0...matrix.length).each do |r|
            matrix[r][c] = 0
        end
    end
end