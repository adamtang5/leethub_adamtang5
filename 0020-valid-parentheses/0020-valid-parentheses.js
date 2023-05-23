/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const open = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (let p of s) {
    if ('([{'.includes(p)) {
      stack.push(p);
    } else if (stack.pop() !== open[p]) {
      return false;
    }
  }

  return !stack.length;
};