# @param {String} s
# @return {String[][]}
def pali?(st, l, r)
  while l < r
    return false if st[l] != st[r]
    l += 1
    r -= 1
  end
  true
end

def dfs(i, s, ans, part)
  if i >= s.length
    ans << part.clone
    return
  end
  (i...s.length).each do |j|
    if pali?(s, i, j)
      part << s[i..j]
      dfs(j+1, s, ans, part)
      part.pop
    end
  end
  nil
end

def partition(s)
  ans, part = [], []
  dfs(0, s, ans, part)
  ans
end