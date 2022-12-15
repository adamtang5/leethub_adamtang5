# @param {Integer} n
# @return {String[]}

def valid(o, c)
    return o <= c && o >= 0 && c >= 0
end

def dfs(o, c, dp)
    return dp[[o, c]] if dp.include?([o, c])
    
    ans = []
    if valid(o-1, c)
        ans += dfs(o-1, c, dp).map { |seq| '(' + seq }
    end
    if valid(o, c-1)
        ans += dfs(o, c-1, dp).map { |seq| ')' + seq }
    end
    dp[[o, c]] = ans
    return ans
end

def generate_parenthesis(n)
    dp = Hash.new
    dp[[0, 0]] = ['']
    dp[[0, 1]] = [')']
    
    return dfs(n, n, dp)
end