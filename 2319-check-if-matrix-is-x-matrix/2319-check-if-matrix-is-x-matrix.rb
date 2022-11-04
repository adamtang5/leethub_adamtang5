# @param {Integer[][]} grid
# @return {Boolean}
def on_diag(r, c, n)
    return r == c || r+c+1 == n
end
def check_x_matrix(grid)
    n = grid.length
    (0...n).each do |r|
        (0...n).each do |c|
            return false if on_diag(r, c, n) && grid[r][c] == 0 || !on_diag(r, c, n) && grid[r][c] != 0
        end
    end
    return true
end