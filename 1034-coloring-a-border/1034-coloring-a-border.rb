# @param {Integer[][]} grid
# @param {Integer} row
# @param {Integer} col
# @param {Integer} color
# @return {Integer[][]}

def in_bounds(r, c, grid)
    return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length
end

def on_edge(r, c, grid)
    return r == 0 || r+1 == grid.length || c == 0 || c+1 == grid[0].length
end

def color_edge(r, c, grid, dirs, scolor)
    dirs.each do |dr, dc|
        new_r, new_c = r+dr, c+dc
        if in_bounds(r, c, grid) && grid[new_r][new_c] != scolor
            return true
        end
    end
    return false
end

def is_border(r, c, grid, dirs, scolor)
    return on_edge(r, c, grid) || color_edge(r, c, grid, dirs, scolor)
end

def valid(r, c, grid, scolor, visited)
    return in_bounds(r, c, grid) && !visited.include?([r, c]) && grid[r][c] == scolor
end

def dfs(r, c, grid, dirs, scolor, visited, border_cells)
    if !visited.include?([r, c]) && in_bounds(r, c, grid)
        visited.add([r, c])
        if is_border(r, c, grid, dirs, scolor)
            border_cells << [r, c]
        end
        dirs.each do |dr, dc|
            new_r, new_c = r+dr, c+dc
            if valid(new_r, new_c, grid, scolor, visited)
                dfs(new_r, new_c, grid, dirs, scolor, visited, border_cells)
            end
        end
    end
end

def color_border(grid, row, col, color)
    scolor = grid[row][col]
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    visited = Set.new
    border_cells = Array.new
    
    dfs(row, col, grid, dirs, scolor, visited, border_cells)
    border_cells.each { |r, c| grid[r][c] = color }
    return grid
end