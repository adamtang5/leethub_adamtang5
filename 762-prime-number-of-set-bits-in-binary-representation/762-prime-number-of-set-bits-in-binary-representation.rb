# @param {Integer} left
# @param {Integer} right
# @return {Integer}
require 'prime'
def count_prime_set_bits(left, right)
    (left..right).count{|x| x.to_s(2).count(?1).prime?}
end