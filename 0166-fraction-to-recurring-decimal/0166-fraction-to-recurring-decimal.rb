# @param {Integer} numerator
# @param {Integer} denominator
# @return {String}
class Node
  attr_accessor :val, :prev
  
=begin
  :type val: String
  :type prev: Integer
=end
  def initialize(val, prev)
    @val = val
    @prev = prev
  end
  
end

def fraction_to_decimal(numerator, denominator)
  pre = post = ""
  num, denom, prev, dp = numerator.abs, denominator.abs, nil, Hash.new
  d = num/denom
  pre = d.to_s
  num -= d*denom
  while num != 0
    num *= 10
    if dp.has_key?(num)
      post = dp[prev].val if prev
      i, curr = 1, prev
      while curr != num
        curr = dp[curr].prev
        i += 1
      end
      first, second = post[0...-i], post[-i..-1]
      post = "#{first}(#{second})"
      return numerator == 0 || numerator > 0 && denominator > 0 || numerator < 0 && denominator < 0 ? "#{pre}.#{post}" : "-#{pre}.#{post}"
    end
    d = num/denom
    post += d.to_s
    if !dp.has_key?(num)
      dp[num] = Node.new(
        prev ? dp[prev].val+d.to_s : d.to_s,
        prev
      )
    end
    prev = num
    num -= d*denom
  end
  ans = pre + (post != "" ? "."+post : "")
  numerator == 0 || numerator > 0 && denominator > 0 || numerator < 0 && denominator < 0 ? ans : "-"+ans
end