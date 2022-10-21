class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        hIdx = 0
        lenDiff = len(haystack)-len(needle)
        while hIdx <= lenDiff:
            while hIdx <= lenDiff and haystack[hIdx] != needle[0]:
                hIdx += 1
            if hIdx > lenDiff:
                return -1
            aux = 0
            while aux < len(needle):
                if haystack[hIdx+aux] != needle[aux]:
                    break
                else:
                    aux += 1
            if aux == len(needle):
                return hIdx
            else:
                hIdx += 1
        return -1