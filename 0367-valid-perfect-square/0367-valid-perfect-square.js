/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let [l, r] = [1, num];
    let pivot = Math.floor((l + r) / 2);
    while (l <= r) {
        if (pivot * pivot === num) {
            return true;
        } else if (pivot * pivot < num) {
            l = pivot + 1;
        } else {
            r = pivot - 1;
        }
        pivot = Math.floor((l + r) / 2);
    }
    return false;
};