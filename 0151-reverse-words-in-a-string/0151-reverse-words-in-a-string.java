class Solution {
  public String reverseWords(String s) {
    String ans = "";
    String curr = "";
    for (int i = 0; i < s.length(); i++) {
      String ch = Character.toString(s.charAt(i));
      if (ch.equals(" ")) {
        if (!ans.equals("") && !curr.equals("")) {
          ans = curr + " " + ans;
        } else if (!curr.equals("")) {
          ans = curr;
        }
        curr = "";
      } else {
        curr += ch;
      }
    }
    if (!ans.equals("") && !curr.equals("")) {
      ans = curr + " " + ans;
    } else if (!curr.equals("")) {
      ans = curr;
    }
    return ans;
  }
}