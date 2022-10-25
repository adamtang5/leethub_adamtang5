class Solution:
    def computeArea(self, ax1: int, ay1: int, ax2: int, ay2: int, bx1: int, by1: int, bx2: int, by2: int) -> int:
        total = (ax2-ax1) * (ay2-ay1) + (bx2-bx1) * (by2-by1)
        overlapX, overlapY = 0, 0
        if ax1 <= bx1 and ax2 > bx1:
            overlapX = min(ax2, bx2) - bx1
        if bx1 <= ax1 and bx2 > ax1:
            overlapX = min(ax2, bx2) - ax1
        if ay1 <= by1 and ay2 > by1:
            overlapY = min(ay2, by2) - by1
        if by1 <= ay1 and by2 > ay1:
            overlapY = min(ay2, by2) - ay1
        
        if overlapX and overlapY:
            total -= overlapX * overlapY
        return total