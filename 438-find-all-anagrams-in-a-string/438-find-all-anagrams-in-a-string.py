class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        if len(p) > len(s):
            return []
        pCount = [0 for i in range(26)]
        # print(pCount)
        for i in range(len(p)):
            pCount[ord(p[i]) - ord('a')] += 1
        # print(pCount)
        ans = []
        sCount = [0 for i in range(26)]
        start, end = 0, len(p)
        for i in range(start, end):
            print(s[i], ord(s[i]) - ord('a'))
            sCount[ord(s[i]) - ord('a')] += 1
        # print(sCount)
        while end <= len(s):
            if pCount == sCount:
                ans.append(start)
            sCount[ord(s[start]) - ord('a')] -= 1
            if end < len(s):
                sCount[ord(s[end]) - ord('a')] += 1
            # print(sCount)
            start += 1
            end += 1
        return ans
                