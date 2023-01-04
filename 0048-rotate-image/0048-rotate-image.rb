# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def reassign(m, w, c)
    lb, ub = c, c+w-1
    (0...w-1).each do |i|
        m[lb][lb+i],
        m[lb+i][ub],
        m[ub][ub-i],
        m[ub-i][lb] =
        m[ub-i][lb],
        m[lb][lb+i],
        m[lb+i][ub],
        m[ub][ub-i]
    end
end

def rotate(matrix)
    matrix.length.step(2, -2).each{ |w| reassign(matrix, w, (matrix.length-w) / 2) }
end