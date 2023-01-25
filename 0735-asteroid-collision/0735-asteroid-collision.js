/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    let top, curr;
    
    for (let i = 0; i < asteroids.length; i++) {
        if (!stack.length || stack.at(-1) < 0) {
            stack.push(asteroids[i]);
        } else {
            while (true) {
                [top, curr] = [stack.at(-1), asteroids[i]];
                if (top * curr > 0) {
                    stack.push(curr);
                    break;
                } else if (top + curr > 0) {
                    break;
                } else if (top + curr === 0) {
                    stack.pop();
                    break;
                } else if (top + curr < 0) {
                    stack.pop();
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