# @param {Integer[][]} grid
# @param {Integer} k
# @return {Integer[][]}
def shift_grid(grid, k)
    cols = grid[0].length
    grid_1d = grid.flatten
    shifted_1d = [0] * grid_1d.length
    (0...grid_1d.length).each { |i| shifted_1d[(i+k) % grid_1d.length] = grid_1d[i] }
    (0...shifted_1d.length).each do |i|
        row = i / cols
        col = i % cols
        grid[row][col] = shifted_1d[i]
    end
    return grid
end