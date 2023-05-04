import java.util.regex.Matcher;
import java.util.regex.Pattern;

class Solution {
  public int myAtoi(String s) {
    s = s.trim();
    if (s.length() == 0) return 0;
    
    int sign = 1;
    if (s.charAt(0) == '-') sign = -1;
    if (s.charAt(0) == '-' || s.charAt(0) == '+') s = s.substring(1);
    
    Pattern digits = Pattern.compile("^\\d+");
    Matcher matcher = digits.matcher(s);
    
    List<String> list = new ArrayList<String>();
    while (matcher.find()) {
      list.add(matcher.group());
      break;
    }

    if (list.size() == 0) return 0;
    try {
      return sign * Integer.parseInt(list.get(0).toString());
    } catch (NumberFormatException e) {
      return sign < 0 ? -2147483648 : 2147483647;
    }
  }
}