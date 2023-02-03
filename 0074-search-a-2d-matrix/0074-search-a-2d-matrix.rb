# @param {Integer[][]} matrix
# @param {Integer} target
# @return {Boolean}
def search_matrix(matrix, target)
    r = 0
    while r < matrix.length-1
        if target >= matrix[r+1][0]
            r += 1
        else
            break
        end
    end
    return false if r == matrix.length
    (0...matrix[r].length).each do |c|
        if target == matrix[r][c]
            return true
        elsif target < matrix[r][c]
            return false
        end
    end
    return false if target > matrix[r][-1]
end