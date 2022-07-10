/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/*
// 1. sort intervals by start value
// 2. create output array (ans) with first interval as element
// 3. iterate through intervals (starting with 2nd interval)
// 4. if start is greater than the end of last interval in ans, push interval into ans
// 5. otherwise, update the end of last interval to be the max between that and the end of interval
// 6. return ans
*/

var merge = function(intervals) {
    // 1. sort intervals by start value
    intervals.sort((a, b) => a[0] - b[0]);
    
    // 2. create output array (ans) with first interval as element
    const ans = [intervals[0]];
    
    // 3. iterate through intervals (starting with 2nd interval)
    for (i = 1; i < intervals.length; i++) {
        let endOfLast = ans[ans.length - 1][1];
        let [start, end] = intervals[i];
        
        // 4. if start is greater than the end of last interval in ans, push interval into ans
        if (start > endOfLast) {
            ans.push([start, end]);
            
        // 5. otherwise, update the end of last interval to be the max between that and the end of interval
        } else {
            ans[ans.length - 1][1] = (end > endOfLast) ? end : endOfLast;
        }
    }
    
    // 6. return ans
    return ans;
};