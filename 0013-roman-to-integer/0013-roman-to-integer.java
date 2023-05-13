class Solution {
  public int romanToInt(String s) {
    Map lookup = new HashMap();
    lookup.put('I', 1);
    lookup.put('V', 5);
    lookup.put('X', 10);
    lookup.put('L', 50);
    lookup.put('C', 100);
    lookup.put('D', 500);
    lookup.put('M', 1000);
    
    int ans = 0;
    int i = 0;
    while (i < s.length()) {
      if (i < s.length() - 1 && (int) lookup.get(s.charAt(i)) < (int) lookup.get(s.charAt(i + 1))) {
        ans += (int) lookup.get(s.charAt(i + 1)) - (int) lookup.get(s.charAt(i));
        i += 2;
      } else {
        ans += (int) lookup.get(s.charAt(i));
        i++;
      }
    }
    return ans;
  }
}