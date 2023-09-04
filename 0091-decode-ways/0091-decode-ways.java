class Solution {
  public boolean valid(String segment) {
    if (segment.length() == 1) return !segment.equals("0");
    if (segment.length() == 2) {
      String first = segment.substring(0, 1);
      if (first.equals("1")) {
        return true;
      } else if (first.equals("2")) {
        return Integer.valueOf(segment.substring(1, 2)) <= 6;
      } else {
        return false;
      }
    }
    return true;
  }
  
  public List<String> partition(String str) {
    List<String> ans = new ArrayList<String>();
    String curr = str.substring(0, 1);
    String lBit = str.substring(0, 1);
    String rBit = str.substring(1, 2);
    int l = 0;
    int r = 1;
    String dub = lBit + rBit;
    while (r < str.length()) {
      if (!valid(dub)) {
        ans.add(curr);
        curr = rBit;
      } else if (!valid(rBit)) {
        curr = curr.substring(0, curr.length() - 1);
        if (curr.length() > 0) ans.add(curr);
        curr = dub;
      } else {
        curr += rBit;
      }
      l++;
      lBit = str.substring(l, l + 1);
      r++;
      if (r < str.length()) {
        rBit = str.substring(r, r + 1);
        dub = lBit + rBit;
      }
    }
    ans.add(curr);
    return ans;
  }
  
  public int fib(int n) {
    if (n < 2) return 1;
    int l = 1;
    int r = 1;
    int temp;
    while (n > 1) {
      temp = l + r;
      l = r;
      r = temp;
      n--;
    }
    return r;
  }
  
  public int numDecodings(String s) {
    if (s.length() == 1) return valid(s) ? 1 : 0;
    List<String> segments = partition(s);
    boolean someNotValid = segments.stream()
      .anyMatch(segment -> !valid(segment));
    if (someNotValid) return 0;
    int[] ans = new int[1];
    ans[0] = 1;
    segments.stream()
      .forEach(segment -> {
        if (!segment.contains("0")) ans[0] *= fib(segment.length());
      });
    return ans[0];
  }
}