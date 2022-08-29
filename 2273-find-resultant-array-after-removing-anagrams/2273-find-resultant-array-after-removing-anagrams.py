class Solution:
    def removeAnagrams(self, words: List[str]) -> List[str]:
        ans = []
        currCounts = {}
        for word in words:
            counts = {}
            for i in range(len(word)):
                counts[word[i]] = counts.get(word[i], 0) + 1
            if counts != currCounts:
                ans.append(word)
                currCounts = counts
        return ans