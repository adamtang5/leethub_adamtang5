# @param {Integer} ax1
# @param {Integer} ay1
# @param {Integer} ax2
# @param {Integer} ay2
# @param {Integer} bx1
# @param {Integer} by1
# @param {Integer} bx2
# @param {Integer} by2
# @return {Integer}
def compute_area(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)
    total = (ax2-ax1) * (ay2-ay1) + (bx2-bx1) * (by2-by1)
    overlapX, overlapY = 0, 0
    if ax1 <= bx1 && ax2 > bx1
        overlapX = [ax2, bx2].min - bx1
    end
    if bx1 <= ax1 && bx2 > ax1
        overlapX = [ax2, bx2].min - ax1
    end
    if ay1 <= by1 && ay2 > by1
        overlapY = [ay2, by2].min - by1
    end
    if by1 <= ay1 && by2 > ay1
        overlapY = [ay2, by2].min - ay1
    end

    return total - overlapX * overlapY
end