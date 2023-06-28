# @param {String} num1
# @param {String} num2
# @return {String}
def multiply(num1, num2)
  return '0' if num1 == '0' || num2 == '0'
  rev1, rev2 = num1.split('').reverse, num2.split('').reverse
  products = Array.new(rev1.length+rev2.length, 0)
  rev1.each_with_index do |digit1, place1|
    rev2.each_with_index do |digit2, place2|
      place = place1+place2
      prod = digit1.to_i*digit2.to_i
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
  products.pop if products[-1] == 0
  products.reverse.map { |n| n.to_s }.join('')
end