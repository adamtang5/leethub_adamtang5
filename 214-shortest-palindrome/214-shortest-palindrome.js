/**
 * @param {string} s
 * @return {string}
 */

/*
Find the longest proper prefix of s that matches a proper suffix of s.reverse()
Remove that from s.reverse(), prepend that to s
*/

var shortestPalindrome = function(s) {
    if (s.length < 2) return s;
    let revS = s.split('').reverse().join('');
    const table = new Array(2 * s.length).fill(0);
    let [pre, post] = [s, revS];
    while (pre !== post) {
        pre = pre.slice(0, pre.length - 1);
        post = post.slice(1);
    }
    return revS.slice(0, revS.length - pre.length) + s;
}