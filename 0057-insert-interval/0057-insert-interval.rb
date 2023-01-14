# @param {Integer[][]} intervals
# @param {Integer[]} new_interval
# @return {Integer[][]}
def insert(intervals, new_interval)
    i, lb, len = 0, -1, 0
    while i < intervals.length
        if new_interval[1] < intervals[i][0]
            lb = i
            break
        elsif new_interval[0] <= intervals[i][1]
            lb = i
            new_interval[0] = [intervals[i][0], new_interval[0]].min
            new_interval[1] = [intervals[i][1], new_interval[1]].max
            len += 1
            i += 1
            while i < intervals.length && new_interval[1] >= intervals[i][0]
                new_interval[1] = [intervals[i][1], new_interval[1]].max
                len += 1
                i += 1
            end
            break
        end
        i += 1
    end
    if lb < 0
        lb = i
    end
    intervals.slice!(lb, len)
    intervals.insert(lb, new_interval)
    return intervals
end