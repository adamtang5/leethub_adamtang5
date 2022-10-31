# @param {Character[][]} maze
# @param {Integer[]} entrance
# @return {Integer}
def distance(coord1, coord2)
    r1, c1 = coord1
    r2, c2 = coord2
    return (r1-r2).abs + (c1-c2).abs
end

def valid(r, c, maze, visited)
    return r >= 0 && r < maze.length && c >= 0 && c < maze[0].length && !visited.include?([r, c]) && maze[r][c] != '+'
end

def is_exit(r, c, maze, entrance)
    return (r == 0 || r == maze.length-1 || c == 0 || c == maze[0].length-1) && [r, c] != entrance && maze[r][c] == '.'
end

def nearest_exit(maze, entrance)
    steps = Array.new(maze.length) { [1 / 0.0] * maze[0].length }
    steps[entrance[0]][entrance[1]] = 0
    visited = Set.new
    visited.add(entrance)
    exits = Set.new
    maze.each_with_index do |row, r|
        row.each_with_index do |col, c|
            if is_exit(r, c, maze, entrance)
                exits.add([r, c])
            end
        end
    end
    return -1 if exits.size == 0
    queue = [entrance]
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    while queue.length > 0
        r, c = queue.shift
        dirs.each do |rd, cd|
            nr, nc = r+rd, c+cd
            if valid(nr, nc, maze, visited)
                steps[nr][nc] = steps[r][c]+1
                return steps[nr][nc] if exits.include?([nr, nc])
                visited.add([nr, nc])
                queue << [nr, nc]
            end
        end
    end
    return -1
end