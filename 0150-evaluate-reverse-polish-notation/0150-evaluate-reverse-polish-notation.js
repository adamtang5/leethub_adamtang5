/**
 * @param {string[]} tokens
 * @return {number}
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? "" : val)
  this.left = (val===undefined ? null : left)
  this.right = (val===undefined ? null : right)
}

var evalRPN = function(tokens) {
  const ops = '+-*/';
  const stack = [];
  let first, second, result;
  for (const token of tokens) {
    if (ops.includes(token)) {
      second = stack.pop();
      first = stack.pop();
      switch (token) {
        case '+':
          result = first + second;
          break;
        case '-':
          result = first - second;
          break;
        case '*':
          result = first * second;
          break;
        case '/':
          let sign = 1;
          if (first / second < 0) sign = -1;
          result = Math.floor(Math.abs(first) / Math.abs(second)) * sign;
          break;
        default:
          break;
      }
      stack.push(result);
    } else {
      stack.push(parseInt(token, 10));
    }
  }
  return stack[0];
};