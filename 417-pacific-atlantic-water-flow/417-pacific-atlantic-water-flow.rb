# @param {Integer[][]} heights
# @return {Integer[][]}

def in_bounds(r, c, heights)
    return r >= 0 && r < heights.length && c >= 0 && c < heights[0].length
end

def valid(sr, sc, dr, dc, heights, visited)
    return !visited.include?([dr, dc]) && in_bounds(dr, dc, heights) && heights[sr][sc] <= heights[dr][dc]
end

def dfs(r, c, heights, visited, ocean_set)
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    
    if !visited.include?([r, c])
        visited.add([r, c])
        dirs.each do |rd, cd|
            new_r, new_c = r+rd, c+cd
            if valid(r, c, new_r, new_c, heights, visited)
                if ocean_set.include?([r, c])
                    ocean_set.add([new_r, new_c])
                end
                dfs(new_r, new_c, heights, visited, ocean_set)
            end
        end
    end
end

def pacific_atlantic(heights)
    m, n = heights.length, heights[0].length
    pac_set = Set.new
    atl_set = Set.new
    visited = Set.new
    
    (0...heights.length).each do |r|
        pac_set.add([r, 0])
        atl_set.add([r, n-1])
    end

    (0...heights[0].length).each do |c|
        pac_set.add([0, c])
        atl_set.add([m-1, c])
    end
    
    pac_set.to_a.each { |r, c| dfs(r, c, heights, visited, pac_set) }
    visited = Set.new
    atl_set.to_a.each { |r, c| dfs(r, c, heights, visited, atl_set) }
    
    return (pac_set & atl_set).to_a
end