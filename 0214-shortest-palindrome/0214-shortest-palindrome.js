/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    if (s.length < 2) return s;
    let revS = s.split('').reverse().join('');
    let [pre, post] = [s, revS];
    while (pre !== post) {
        pre = pre.slice(0, pre.length - 1);
        post = post.slice(1);
    }
    return revS.slice(0, revS.length - pre.length) + s;
}