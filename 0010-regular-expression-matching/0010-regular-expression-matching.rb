# @param {String} s
# @param {String} p
# @return {Boolean}
def char_match(ch1, ch2)
  return ch2 == '.' || ch2 == ch1
end

def dfs(s, parsed, dp)
  key = [s, parsed]
  
  if s.length > 0 && parsed.length == 0
    dp[key] = false
    return dp[key]
  end
  if s.length == 0 && parsed.length == 0
    dp[key] = true
    return dp[key]
  end
  if s.length == 0 && parsed.length > 0
    dp[key] = parsed.all?{ |el| el.length == 2 }
    return dp[key]
  end

  first = parsed.shift
  if first.length == 1
    dp[key] = char_match(s[0], first) && dfs(s[1..-1], parsed, dp)
    return dp[key]
  else
    if !char_match(s[0], first[0])
      dp[key] = dfs(s, parsed, dp)
      return dp[key]
    else
      if dp.has_key?(key)
        return dp[key]
      else
        len = 1
        while len < s.length && (first[0] == '.' || s[len] == s[0])
          len += 1
        end
        ans = false
        (0..len).each do |i|
          copy = parsed.dup
          ans ||= dfs(s[i..-1], copy, dp)
        end
        dp[key] = ans
        return ans
      end
    end
  end  
end

def is_match(s, p)
  parsed = []
  i = 0
  while i < p.length
    if i+1 < p.length && p[i+1] == '*'
      parsed << p[i]+p[i+1]
      i += 2
    else
      parsed << p[i]
      i += 1
    end
  end
  
  return dfs(s, parsed, {})
end