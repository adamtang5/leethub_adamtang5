class Solution {
  public boolean validNum(String s, String numType) {
    if (s.length() == 0) return false;
    if (numType == "dec") {
      int dotIdx = -1;
      for (int i = 0; i < s.length(); i++) {
        if (s.substring(i, i + 1).equals(".")) {
          if (dotIdx >= 0 || s.length() == 1) return false;
          dotIdx = i;
        } else if (!s.substring(i, i + 1).matches("[0-9]")) {
          return false;
        }
      }
    } else if (numType == "int") {
      for (int i = 0; i < s.length(); i++) {
        if (!s.substring(i, i + 1).matches("[0-9]")) return false;
      }
    }
    return true;
  }
  
  public boolean isNumber(String s) {
    s = s.toLowerCase();
    List<String> parts = new ArrayList<String>();
    if (!s.contains("e")) {
      parts.add(trimSign(s));
    } else {
      parts.add(trimSign(s.substring(0, s.indexOf("e"))));
      parts.add(trimSign(s.substring(s.indexOf("e") + 1)));
    }
    
    if (parts.size() == 1) {
      return validNum(parts.get(0), "dec");
    } else if (parts.size() == 2) {
      return validNum(parts.get(0), "dec") && validNum(parts.get(1), "int");
    } else {
      return false;
    }
  }

  public String trimSign(String s) {
    if (s.length() > 0 && "+-".contains(s.substring(0, 1))) {
      return s.substring(1);
    } else {
      return s;
    }
  }
}