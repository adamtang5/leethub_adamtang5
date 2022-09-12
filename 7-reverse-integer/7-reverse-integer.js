/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return -0;
    if (x === -0) return 0;
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    const xLog10 = Math.ceil(Math.log10(x));
    const places = new Array(Math.round(Math.log10(x)) === Math.log10(x) ? xLog10 + 1: xLog10).fill(0);
    
    for (let i = 0; i < places.length; i++) {
        const place = 10 ** (places.length - 1 - i);
        places[i] = Math.floor(x / place);
        x %= place;
    }
    // console.log(places);
    
    let ans = sign * places.reduce((sum, n, i) => sum + n * (10 ** i), 0);
    // console.log(ans);
    
    return ans < -1 * (2 ** 31) || ans >= 2 ** 31 ? 0 : ans;
};