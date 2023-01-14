class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        i, lb, length = 0, float('-inf'), 0
        while i < len(intervals):
            if newInterval[1] < intervals[i][0]:
                lb = i
                break
            elif newInterval[0] <= intervals[i][1]:
                lb = i
                newInterval[0] = min(intervals[i][0], newInterval[0])
                newInterval[1] = max(intervals[i][1], newInterval[1])
                length += 1
                i += 1
                while i < len(intervals) and newInterval[1] >= intervals[i][0]:
                    newInterval[1] = max(intervals[i][1], newInterval[1])
                    length += 1
                    i += 1
                break
            i += 1
        if lb < 0:
            lb = i
        intervals[lb:lb+length] = [newInterval]
        return intervals