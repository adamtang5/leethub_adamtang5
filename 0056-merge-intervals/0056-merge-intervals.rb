# @param {Integer[][]} intervals
# @return {Integer[][]}
def merge(intervals)
    intervals.sort_by!{ |x| x[0] }
    ans = []
    curr_start, curr_end = intervals[0]
    (1...intervals.length).each do |i|
        new_start, new_end = intervals[i]
        if new_start <= curr_end
            curr_end = [curr_end, new_end].max
        else
            ans << [curr_start, curr_end]
            curr_start, curr_end = new_start, new_end
        end
    end
    ans << [curr_start, curr_end]
    return ans
end