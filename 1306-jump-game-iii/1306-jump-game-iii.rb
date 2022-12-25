# @param {Integer[]} arr
# @param {Integer} start
# @return {Boolean}
def valid(i, arr, visited)
    return i >= 0 && i < arr.length && !visited.include?(i)
end

def can_reach(arr, start)
    visited = Set.new
    queue = [start]
    curr = nil
    while queue.length > 0
        curr = queue.shift
        return true if arr[curr] == 0
        if valid(curr, arr, visited)
            visited.add(curr)
            if valid(curr-arr[curr], arr, visited)
                queue << curr-arr[curr]
            end
            if valid(curr+arr[curr], arr, visited)
                queue << curr+arr[curr]
            end
        end
    end
    return false
end