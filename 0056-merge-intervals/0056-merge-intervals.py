class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])
        ans = []
        currStart, currEnd = intervals[0]
        for i in range(1, len(intervals)):
            newStart, newEnd = intervals[i]
            if newStart <= currEnd:
                currEnd = max(currEnd, newEnd)
            else:
                ans.append([currStart, currEnd])
                currStart, currEnd = newStart, newEnd
        ans.append([currStart, currEnd])
        return ans
        