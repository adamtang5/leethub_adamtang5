class Solution {
  public String digitToRoman(int val, int mult) {
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
    int sig = val / mult;
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
    String ans = "";
    int base = 10;
    while (num > 0) {
      ans = digitToRoman(num % base, base / 10) + ans;
      num -= num % base;
      base *= 10;
    }
    return ans;
  }
}