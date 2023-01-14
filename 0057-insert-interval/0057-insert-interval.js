/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let [newStart, newEnd] = newInterval;
    let idx, currStart, currEnd;
    let [i, len] = [0, 0];
    while (i < intervals.length) {
        [currStart, currEnd] = intervals[i];
        console.log(`curr: ${intervals[i]}`);
        console.log(`new: ${[newStart, newEnd]}`);
        if (newEnd < currStart) {
            idx = i;
            break;
        } else if (newStart <= currEnd) {
            idx = i;
            newStart = Math.min(currStart, newStart);
            newEnd = Math.max(currEnd, newEnd);
            len++;
            i++;
            while (i < intervals.length && newEnd >= intervals[i][0]) {
                newEnd = Math.max(intervals[i][1], newEnd);
                len++;
                i++;
            }
            break;
        }
        i++;
    }
    if (idx === undefined) idx = i;
    console.log(`idx: ${idx}, len: ${len}, new: ${[newStart, newEnd]}`);
    intervals.splice(idx, len, [newStart, newEnd]);
    return intervals;
};