# @param {Integer} n
# @return {Boolean}

def dfs(arr, target)
    return true if target == 0
    return false if target < 0 || arr == []
    ele = arr.pop
    return dfs(arr, target-ele) || dfs(arr, target)
end

def check_powers_of_three(n)
    powers_of_3 = []
    i = 0
    while 3 ** i <= n
        powers_of_3 << 3 ** i
        i += 1
    end
    
    return dfs(powers_of_3, n)
end