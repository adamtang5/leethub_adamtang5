# @param {String} s
# @return {String[]}
def valid_octet(s)
  return false if s.length < 1 || s.length > 3
  return false if s.length > 1 && s[0] == '0'
  return false if s.to_i > 255
  return true
end

def dfs(s, ans, oct_idx=3, addr='')
  if valid_octet(s) && oct_idx == 0
    ans << s+addr
    return
  end
  
  if s.length > 0 && s.length <= (oct_idx+1)*3 && (oct_idx > 0 || valid_octet(s))
    (1..[s.length, 3].min).each do |digits|
      oct = s[-digits..-1]
      if valid_octet(oct)
        dfs(s[0...-digits], ans, oct_idx-1, ".#{oct}#{addr}")
      end
    end
  end
end

def restore_ip_addresses(s)
  ans = []
  return ans if s.length < 4 || s.length > 12
  if s.length == 4
    ans << s.split("").join(".")
    return ans
  end
  
  dfs(s, ans)
  return ans
end