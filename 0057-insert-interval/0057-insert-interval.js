/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let [i, len, idx] = [0, 0, -Infinity];
    while (i < intervals.length) {
        if (newInterval[1] < intervals[i][0]) {
            idx = i;
            break;
        } else if (newInterval[0] <= intervals[i][1]) {
            idx = i;
            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
            len++;
            i++;
            while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
                newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
                len++;
                i++;
            }
            break;
        }
        i++;
    }
    if (idx < 0) idx = i;
    intervals.splice(idx, len, newInterval);
    return intervals;
};