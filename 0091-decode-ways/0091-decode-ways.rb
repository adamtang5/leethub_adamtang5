# @param {String} s
# @return {Integer}
def valid(seg)
  return seg != '0' if seg.length == 1
  if seg.length == 2
    if seg[0] == '1'
      return true
    elsif seg[0] == '2'
      return seg[1] <= '6'
    else
      return false
    end
  end
  true
end

def partition(str)
  ans = []
  curr, l_bit, r_bit, double, l = str[0], str[0], str[1], str[0...2], 0
  while l+1 < str.length
    if !valid(double)
      ans << curr
      curr = r_bit
    elsif !valid(r_bit)
      curr = curr[0...-1]
      ans << curr if curr != ''
      curr = double
    else
      curr += r_bit
    end
    l += 1
    l_bit = str[l]
    if l+1 < str.length
      r_bit = str[l+1]
      double = str[l...l+2]
    end
  end
  ans << curr
  ans
end

def fib(n)
  return 1 if n < 2
  l, r = 1, 1
  while n > 1
    l, r = r, l+r
    n -= 1
  end
  r
end

def num_decodings(s)
  return valid(s) ? 1 : 0 if s.length == 1
  segments = partition(s)
  return 0 if segments.any?{ |seg| !valid(seg) }
  prod = 1
  segments.each do |seg|
    prod *= fib(seg.length) if !seg.include?('0')
  end
  prod
end