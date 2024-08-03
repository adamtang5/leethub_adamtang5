func multiply(num1 string, num2 string) string {
  if num1 == "0" || num2 == "0" {
    return "0"
  }
  products := make([]int, len(num1)+len(num2))
  p1, p2, prod, place := 0, 0, 0, 0
  for i:=len(num1)-1;i>=0;i-- {
    p1 = len(num1)-i-1
    for j:=len(num2)-1;j>=0;j-- {
      p2 = len(num2)-j-1
      place = p1+p2
      mult1, err1 := strconv.Atoi(num1[i:i+1])
      mult2, err2 := strconv.Atoi(num2[j:j+1])
      if err1 == nil && err2 == nil {
        prod = mult1*mult2
      }
      products[place] += prod%10
      products[place+1] += prod/10
    }
  }
  for i:=0;i<len(products)-1;i++ {
    if products[i] > 9 {
      products[i+1] += products[i]/10
      products[i]%=10
    }
  }
  ans := ""
  for i:=0;i<len(products);i++ {
    if i == len(products)-1 && products[i] == 0 {
      break
    }
    ans = strconv.Itoa(products[i])+ans
  }
  return ans
}