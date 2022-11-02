# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}

def dfs(c, t, ans, suffix=[])
    if t == 0
        ans.unshift(suffix)
    elsif t > 0 && c.length > 0
        (t / c[0]).downto(0).each do |i|
            dfs(c[1..-1], t-i*c[0], ans, [c[0]] * i + suffix)
        end
    end
end

def combination_sum(candidates, target)
    candidates.select! { |n| n <= target }
    return [] if candidates == []
    candidates.sort!.reverse!
    ans = []
    dfs(candidates, target, ans)
    return ans
end