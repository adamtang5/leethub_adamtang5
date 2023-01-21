/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        if (tx > ty) {
            if (ty === sy) {
                return (tx - sx) % sy === 0;
            } else {
                tx %= ty;
            }            
        } else if (ty > tx) {
            if (tx === sx) {
                return (ty - sy) % sx === 0;
            } else {
                ty %= tx;
            }
        } else {
            break;
        }
    }
    
    return (sx === tx && sy === ty);
};