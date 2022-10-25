/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
/*
calculate area of rectangle 1: (ax2 - ax1) * (ay2 - ay1)
calculate area of rectangle 2: (bx2 - bx1) * (by2 - by1)
see if there is overlap
ax1 < bx1 && ax2 > bx1 --> overlapping: min(ax2, bx2) - bx1
bx1 < ax1 && bx2 > ax1 --> overlapping: min(ax2, bx2) - ax1
ay1 < by1 && ay2 > by1 --> overlapping: min(ay2, by2) - by1
by1 < ay1 && by2 > ay1 --> overlapping: min(ay2, by2) - ay1
*/
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let total = (ax2 - ax1) * (ay2 - ay1);
    total += (bx2 - bx1) * (by2 - by1);
    
    let overlapX, overlapY;
    
    if (ax1 <= bx1 && ax2 > bx1) overlapX = Math.min(ax2, bx2) - bx1;
    if (bx1 <= ax1 && bx2 > ax1) overlapX = Math.min(ax2, bx2) - ax1;

    if (ay1 <= by1 && ay2 > by1) overlapY = Math.min(ay2, by2) - by1;
    if (by1 <= ay1 && by2 > ay1) overlapY = Math.min(ay2, by2) - ay1;
    
    if (overlapX && overlapY) total -= overlapX * overlapY;
    
    return total;
};