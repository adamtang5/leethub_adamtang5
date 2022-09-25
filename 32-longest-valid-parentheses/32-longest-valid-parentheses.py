class Solution:
    def longestValidParentheses(self, s: str) -> int:
        # trim leading ')' and trailing '('
        s = s.lstrip(')').rstrip('(')
        if s == '':
            return len(s)
        
        mirrored = ''.join(['(' if paren == ')' else ')' for paren in s[::-1]])
        print(s, mirrored)
        
        def parse(s):
            ans = stackHeight = validLen = 0
            for paren in s:
                if paren == '(':
                    stackHeight += 1
                    validLen += 1
                else:
                    stackHeight -= 1
                    if stackHeight < 0:
                        validLen = stackHeight = 0
                    else:
                        validLen += 1
                    if stackHeight == 0:
                        ans = max(ans, validLen)
            return ans
        
        return max(parse(s), parse(mirrored))