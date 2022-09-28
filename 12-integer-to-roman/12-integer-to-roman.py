import math

class Solution:
    def intToRoman(self, num: int) -> str:
        lookup = [
            {
                1: 'I',
                5: 'V',
            },
            {
                1: 'X',
                5: 'L',
            },
            {
                1: 'C',
                5: 'D',
            },
            {
                1: 'M',
            },
        ]
        
        def digit2Roman(val, p):
            if val == 0:
                return ''
            elif val <= 3:
                return lookup[p][1] * val
            elif val <= 8:
                l = lookup[p][1] if val < 5 else ''
                r = lookup[p][1] * (val-5) if val > 5 else ''
                return l + lookup[p][5] + r
            elif val == 9:
                return lookup[p][1] + lookup[p+1][1]
            
        p10 = math.floor(math.log10(num))
        places = [0] * (p10+1)
        
        while num > 0:
            places[p10] = math.floor(num / pow(10, p10))
            num %= pow(10, p10)
            if num > 0:
                p10 = math.floor(math.log10(num))
            
        return ''.join([digit2Roman(val, p) for p, val in enumerate(places)][::-1])