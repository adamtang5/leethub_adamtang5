# data structures:
# curr_sub to keep track of current longest substring that ends on index

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if s == '':
            return 0
        curr_sub, maxCount = '', 0
        
        for i in range(len(s)):
            if s[i] in curr_sub:
                curr_sub = curr_sub[curr_sub.index(s[i])+1:] + s[i]
            else:
                curr_sub += s[i]
            if len(curr_sub) > maxCount:
                maxCount = len(curr_sub)
            
        return maxCount