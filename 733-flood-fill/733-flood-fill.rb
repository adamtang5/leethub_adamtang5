# @param {Integer[][]} image
# @param {Integer} sr
# @param {Integer} sc
# @param {Integer} color
# @return {Integer[][]}

def in_bounds(r, c, image)
    return r >= 0 && r < image.length && c >= 0 && c < image[0].length
end

def valid(r, c, image, visited, scolor)
    return in_bounds(r, c, image) && !visited.include?([r, c]) && image[r][c] == scolor
end

def dfs(r, c, image, visited, color)
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    scolor = image[r][c]
    image[r][c] = color
    visited.add([r, c])
    dirs.each do |dr, dc|
        new_row, new_col = r + dr, c + dc
        if valid(new_row, new_col, image, visited, scolor)
            dfs(new_row, new_col, image, visited, color)
        end
    end
end

def flood_fill(image, sr, sc, color)
    visited = Set.new
    dfs(sr, sc, image, visited, color)
    return image
end