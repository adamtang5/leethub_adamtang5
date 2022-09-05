class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}
        for s in strs:
            key = [0] * 26
            for ch in s:
                key[ord(ch) - ord('a')] += 1
            key = str(key)

            groups[key] = groups.get(key, [])
            groups[key].append(s)
        return groups.values()