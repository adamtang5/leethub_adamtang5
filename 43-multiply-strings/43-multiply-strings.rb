# @param {String} num1
# @param {String} num2
# @return {String}
def multiply(num1, num2)
    if num1 == '0' || num2 == '0'
        return '0'
    end
    num1, num2 = num1.split('').reverse, num2.split('').reverse
    products = Array.new(num1.length + num2.length, 0)
    num1.each_with_index do |digit1, place1|
        num2.each_with_index do |digit2, place2|
            place = place1 + place2
            prod = digit1.to_i * digit2.to_i
            products[place] += prod % 10
            products[place+1] += (prod / 10).floor
        end
    end
    (0...products.length-1).each do |i|
        if products[i] > 9
            products[i+1] += (products[i] / 10).floor
            products[i] %= 10
        end
    end
    if products[-1] == 0
        products.pop
    end
    return products.reverse.map { |n| n.to_s }.join('')
end