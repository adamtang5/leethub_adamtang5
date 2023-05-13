class Solution {
  public String digitToRoman(int val) {
    if (val == 0) return "";
    
    Map lookup = new HashMap();
    lookup.put(1, "I");
    lookup.put(5, "V");
    lookup.put(10, "X");
    lookup.put(50, "L");
    lookup.put(100, "C");
    lookup.put(500, "D");
    lookup.put(1000, "M");

    String ans = "";
    int sig;
    if (val < 10) {
      sig = val;
    } else if (val < 100) {
      sig = val / 10;
    } else if (val < 1000) {
      sig = val / 100;
    } else {
      sig = val / 1000;
    }
    
    int mult = val / sig;
    
    switch (sig % 5) {
      case 4:
        if (sig > 5) {
          ans = ans + lookup.get(mult) + lookup.get(mult * 10);
        } else {
          ans = ans + lookup.get(mult) + lookup.get(5 * mult);
        }
        break;
      default:
        if (sig >= 5) {
          ans += lookup.get(5 * mult);
        }
        ans += lookup.get(mult).toString().repeat(sig % 5);
    }
    return ans;
  }
  
  public String intToRoman(int num) {
    ArrayList<Integer> digits = new ArrayList<Integer>();
    int base = 10;
    while (num > 0) {
      digits.add(num % base);
      num -= num % base;
      base *= 10;
    }
    
    String ans = "";
    for (int digit : digits) {
      ans = digitToRoman(digit) + ans;
    }
    return ans;
  }
}