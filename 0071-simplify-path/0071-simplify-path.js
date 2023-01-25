/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const names = path.split('/');
    const stack = [];
    names.forEach(name => {
        if (name === '..') {
            stack.pop();
        } else if (name !== '' && name !== '.') {
            stack.push(name);
        }
    });
    let ans = '';
    stack.forEach(name => ans += '/' + name);
    return ans || '/';
};