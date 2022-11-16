/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;
    let [l, r] = [0, x];
    let pivot = Math.floor((l + r) / 2);
    while (l < r) {
        if (pivot * pivot === x) {
            return pivot;
        } else if (pivot * pivot < x && (pivot + 1) * (pivot + 1) > x) {
            return pivot;
        } else if (pivot * pivot > x) {
            r = pivot;
        } else {
            l = pivot;
        }
        pivot = Math.floor((l + r) / 2);
    }
};