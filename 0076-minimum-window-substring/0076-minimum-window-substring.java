class Solution {
  public String minWindow(String s, String t) {
    Map tally = new HashMap();
    Map window = new HashMap();
    for (int i = 0; i < t.length(); i++) {
      String c = t.substring(i, i + 1);
      if (tally.containsKey(c)) {
        int res = (int) tally.get(c) + 1;
        tally.put(c, res);
      } else {
        tally.put(c, 1);
      }
    }

    int have = 0;
    int lb = -1;
    int ub = s.length() + 1;
    int l = 0;
    int need = tally.size();
    String rChar;
    String lChar;
    for (int r = 0; r < s.length(); r++) {
      rChar = s.substring(r, r + 1);
      if (tally.containsKey(rChar)) {
        if (window.containsKey(rChar)) {
          window.put(rChar, (int) window.get(rChar) + 1);
        } else {
          window.put(rChar, 1);
        }
        
        if ((int) window.get(rChar) == (int) tally.get(rChar)) have++;
        
        while (have == need) {
          if (r + 1 - l < ub - lb) {
            lb = l;
            ub = r + 1;
          }
          lChar = s.substring(l, l + 1);
          if (tally.containsKey(lChar)) {
            window.put(lChar, (int) window.get(lChar) - 1);
            if ((int) window.get(lChar) < (int) tally.get(lChar)) have--;
          }
          l++;
        }
      }
    }
    return lb < 0 ? "" : s.substring(lb, ub);
  }
}