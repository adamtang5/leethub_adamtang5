# @param {Integer[][]} mat
# @return {Integer}
def diagonal_sum(mat)
    ans, n = 0, mat.length
    (0...n).each do |i|
        ans += mat[i][i]
        ans += mat[n-i-1][i]
    end
    if n % 2 > 0
        ans -= mat[(n-1)/2][(n-1)/2]
    end
    return ans
end