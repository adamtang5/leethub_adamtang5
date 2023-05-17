# @param {String} digits
# @return {String[]}
LOOKUP = [
  '',
  '',
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz',
]

def letter_combinations(digits)
  if digits.length == 0
    return []
  elsif digits.length == 1
    return LOOKUP[digits.to_i].split('')
  else
    d1Combos = letter_combinations(digits[0])
    return d1Combos.map{ |ch| letter_combinations(digits[1..-1]).map{ |combo| ch + combo }}.flatten
  end     
end