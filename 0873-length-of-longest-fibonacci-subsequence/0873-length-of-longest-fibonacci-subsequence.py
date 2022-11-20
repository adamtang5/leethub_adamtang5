from collections import defaultdict

class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
        dp = defaultdict(dict)
        for i in range(len(arr)-1):
            for j in range(i+1, len(arr)):
                dp[arr[i]][arr[j]] = 2
        for j in range(len(arr)):
            for k in range(j+1, len(arr)):
                diff = arr[k]-arr[j]
                if diff < arr[j] and diff in dp:
                    dp[arr[j]][arr[k]] = dp[diff][arr[j]]+1
        ans = 0
        for outerKey in dp:
            for innerKey in dp[outerKey]:
                innerVal = dp[outerKey][innerKey]
                if innerVal > 2:
                    ans = max(ans, innerVal)
        return ans