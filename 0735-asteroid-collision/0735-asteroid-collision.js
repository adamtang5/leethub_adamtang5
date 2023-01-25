/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    let top, curr;
    
    for (let i = 0; i < asteroids.length; i++) {
        curr = asteroids[i];
        if (!stack.length || stack[stack.length - 1] < 0) {
            stack.push(curr);
        } else {
            while (true) {
                top = stack.pop();
                if (top * curr > 0) {
                    stack.push(top);
                    stack.push(curr);
                    break;
                } else if (top + curr > 0) {
                    stack.push(top);
                    break;
                } else if (top + curr === 0) {
                    break;
                } else if (top + curr < 0) {
                    if (!stack.length) {
                        stack.push(curr);
                        break;
                    }
                }
            }
        }
    }
    return stack;
};