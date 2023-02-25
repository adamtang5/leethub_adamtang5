# @param {Integer} n
# @return {Integer[]}
def bit_seq(n)
  return [0] * 2 if n == 1
  last_seq = bit_seq(n-1)
  last_seq[-1] = n-1
  return last_seq*2
end

def gray_code(n)
  seq = bit_seq(n)
  ans = [0] * (2**n)
  (0...ans.length-1).each{ |i| ans[i+1] = ans[i] ^ (1 << (n-1-seq[i])) }
  return ans
end