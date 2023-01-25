# @param {Integer[]} asteroids
# @return {Integer[]}
def asteroid_collision(asteroids)
    stack = []
    (0...asteroids.length).each do |i|
        if stack == [] || stack[-1] < 0
            stack << asteroids[i]
        else
            while true
                if stack[-1] * asteroids[i] > 0
                    stack << asteroids[i]
                    break
                elsif stack[-1] + asteroids[i] > 0
                    break
                elsif stack[-1] + asteroids[i] == 0
                    stack.pop()
                    break
                elsif stack[-1] + asteroids[i] < 0
                    stack.pop()
                    if stack == []
                        stack << asteroids[i]
                        break
                    end
                end
            end
        end
    end
    return stack
end