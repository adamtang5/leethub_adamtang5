class Solution:
  def multiply(self, num1: str, num2: str) -> str:
    if num1 == '0' or num2 == '0': return '0'
    products = [0 for i in range(len(num1)+len(num2))]
    p1 = p2 = prod = place = None
    for i in range(len(num1)-1, -1, -1):
      p1 = len(num1)-i-1
      for j in range(len(num2)-1, -1, -1):
        p2 = len(num2)-j-1
        place = p1+p2
        prod = int(num1[i])*int(num2[j])
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