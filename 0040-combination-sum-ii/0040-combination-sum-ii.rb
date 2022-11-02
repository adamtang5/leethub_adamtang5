# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def dfs(c, t, ans, suffix=[])
    if t == 0
        ans.unshift(suffix)
        return
    elsif c == []
        return
    elsif t > 0
        curr_max = c[0]
        n = 1
        while n < c.length && c[n] == c[n-1]
            n += 1
        end
        ([t / curr_max, n].min).downto(0).each do |i|
            dfs(c[n..-1], t-i*curr_max, ans, [curr_max]*i + suffix)
        end
    end
end

def combination_sum2(candidates, target)
    candidates.delete_if { |n| n > target }
    candidates.sort!.reverse!
    ans = []
    dfs(candidates, target, ans)
    return ans
end