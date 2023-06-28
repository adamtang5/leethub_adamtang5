# @param {String} num1
# @param {String} num2
# @return {String}
def multiply(num1, num2)
  return '0' if num1 == '0' || num2 == '0'
  products = Array.new(num1.length + num2.length, 0)
  p1 = p2 = prod = place = nil
  (0...num1.length).reverse_each do |i|
    p1 = num1.length-i-1
    (0...num2.length).reverse_each do |j|
      p2 = num2.length-j-1
      place = p1 + p2
      prod = num1[i].to_i*num2[j].to_i
      products[place] += prod%10
      products[place+1] += (prod/10).floor
    end
  end
  (0...products.length-1).each do |i|
    if products[i] > 9
      products[i+1] += (products[i]/10).floor
      products[i] %= 10
    end
  end
  ans = ""
  products.each_with_index do |n, i|
    break if i == products.length-1 && n == 0
    ans = n.to_s+ans
  end
  ans
end