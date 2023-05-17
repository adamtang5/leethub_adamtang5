# @param {String} digits
# @return {String[]}
LOOKUP = {
  '2'=>'abc',
  '3'=>'def',
  '4'=>'ghi',
  '5'=>'jkl',
  '6'=>'mno',
  '7'=>'pqrs',
  '8'=>'tuv',
  '9'=>'wxyz',
}

def letter_combinations(digits)
  return [] if digits.length == 0
  return LOOKUP[digits].split('') if digits.length == 1
    
  lead_letters = letter_combinations(digits[0])
  lead_letters.map{ |ch| letter_combinations(digits[1..-1]).map{ |combo| ch + combo }}.flatten
end