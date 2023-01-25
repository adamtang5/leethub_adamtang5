class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for i in range(len(asteroids)):
            if stack == [] or stack[-1] < 0:
                stack.append(asteroids[i])
            else:
                while True:
                    if stack[-1] * asteroids[i] > 0:
                        stack.append(asteroids[i])
                        break
                    elif stack[-1] + asteroids[i] > 0:
                        break
                    elif stack[-1] + asteroids[i] == 0:
                        stack.pop(-1)
                        break
                    elif stack[-1] + asteroids[i] < 0:
                        stack.pop(-1)
                        if stack == []:
                            stack.append(asteroids[i])
                            break
        
        return stack
    
