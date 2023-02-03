# @param {Integer[][]} matrix
# @param {Integer} target
# @return {Boolean}
def search_matrix(matrix, target)
    rlb, rub, clb, cub = 0, matrix.length-1, 0, matrix[0].length-1
    (0...matrix[0].length).each do |i|
        if target < matrix[0][i]
            cub = i-1
            break
        end
    end
    (0...matrix.length).each do |i|
        if target < matrix[i][0]
            rub = i-1
            break
        end
    end
    rub.downto(0).each do |i|
        if target > matrix[i][cub]
            rlb = i+1
            break
        end
    end
    cub.downto(0).each do |i|
        if target > matrix[rub][i]
            clb = i+1
            break
        end
    end
    
    left = right = pivot = nil
    (rlb..rub).each do |r|
        if target >= matrix[r][clb] && target <= matrix[r][cub]
            left, right = clb, cub
            while left <= right
                pivot = (left+right) / 2
                if target == matrix[r][pivot]
                    return true
                elsif target < matrix[r][pivot]
                    right = pivot-1
                elsif target > matrix[r][pivot]
                    left = pivot+1
                end
            end
        end
    end
    return false
end