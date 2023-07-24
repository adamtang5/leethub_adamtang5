# @param {Integer} n
# @param {Integer} k
# @return {String}
def fact(n)
  return 1 if n == 0
  return n*fact(n-1)
end

def dfs(q, s, ans='')
  return ans if s.length == 0
  
  sub_size = fact(s.length-1)
  sub_idx = q/sub_size
  ext = s.delete_at(sub_idx)
  dfs(q%sub_size, s, ans+ext)
end

def get_permutation(n, k)
  seq = (1..n).to_a.map{ |d| d.to_s }
  dfs(k-1, seq)
end