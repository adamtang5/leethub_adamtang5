class Solution:
  def multiply(self, num1: str, num2: str) -> str:
    if num1 == '0' or num2 == '0': return '0'
    rev1, rev2 = list(num1), list(num2)
    rev1.reverse()
    rev2.reverse()
    products = [0 for i in range(len(rev1)+len(rev2))]
    for place1, digit1 in enumerate(rev1):
      for place2, digit2 in enumerate(rev2):
        place = place1+place2
        prod = int(digit1)*int(digit2)
        products[place] += prod%10
        products[place+1] += floor(prod/10)
    for i in range(len(products)-1):
      if products[i] > 9:
        products[i+1] += floor(products[i]/10)
        products[i] %= 10
    if products[-1] == 0:
        products.pop(-1)
    products.reverse()
    return ''.join([str(n) for n in products])