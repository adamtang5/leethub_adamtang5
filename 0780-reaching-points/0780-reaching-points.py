class Solution:
    def reachingPoints(self, sx: int, sy: int, tx: int, ty: int) -> bool:
        while tx >= sx and ty >= sy:
            if tx == ty:
                break
            elif tx > ty:
                if ty == sy:
                    return (tx-sx) % sy == 0
                else:
                    tx %= ty
            elif ty > tx:
                if tx == sx:
                    return (ty-sy) % sx == 0
                else:
                    ty %= tx
        
        return sx == tx and sy == ty