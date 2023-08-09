class Solution {
  public int divide(int dividend, int divisor) {
    if (dividend == 0) return dividend;
    if (dividend == divisor) return 1;
    if (dividend == Integer.MIN_VALUE && divisor == -1) return Integer.MAX_VALUE;
    if (divisor == Integer.MAX_VALUE) {
      return dividend <= 0 - Integer.MAX_VALUE ? -1 : 0;
    } else if (divisor == 0 - Integer.MAX_VALUE) {
      if (dividend == Integer.MAX_VALUE) {
        return -1;
      } else if (dividend <= divisor) {
        return 1;
      } else {
        return 0;
      }
    } else if (divisor == Integer.MIN_VALUE) {
      return dividend == Integer.MIN_VALUE ? 1 : 0;
    }
    int d = 0 - Math.abs(dividend);
    int dv = Math.abs(divisor);
    
    System.out.println(d);
    System.out.println(dv);
    
    int output = 0;
    int temp;
    int mul;
    while (d <= 0 - dv) {
      temp = dv;
      mul = 1;
      while (d <= 0 - temp) {
        d += temp;
        output -= mul;
        if (temp + temp > 0) {
          temp += temp;
          mul += mul;
        }
      }
    }
    if (dividend < 0 && divisor < 0 || dividend >= 0 && divisor >= 0) {
      output = 0 - output;
    }
    return output;
  }
}