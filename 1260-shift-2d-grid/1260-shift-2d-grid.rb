# @param {Integer[][]} grid
# @param {Integer} k
# @return {Integer[][]}
def shift_grid(grid, k)
    cols = grid[0].length
    return grid.flatten!.rotate!(-k).each_slice(cols).to_a
end