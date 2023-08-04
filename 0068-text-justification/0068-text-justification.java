class Solution {
  public String leftJustify(String[] words, int maxWidth) {
    String ans = String.join(" ", words);
    String tail = " ".repeat(maxWidth - ans.length());
    return ans + tail;
  }
  
  public String justifyLine(String[] words, int maxWidth) {
    if (words.length == 1) return leftJustify(words, maxWidth);
    int wordsLen = Arrays.stream(words).mapToInt(String::length).sum();
    int spaces = maxWidth - wordsLen;
    int wordsCount = words.length;
    String ans = "";
    int base;
    int leftover;
    for (int i = 0; i < wordsCount - 1; i++) {
      ans += words[i];
      base = spaces / (wordsCount - 1);
      leftover = i < spaces % (wordsCount - 1) ? 1 : 0;
      ans += " ".repeat(base + leftover);
    }
    ans += words[words.length - 1];
    return ans;
  }
  
  public List<String> fullJustify(String[] words, int maxWidth) {
    List<String> lines = new ArrayList<String>();
    int l = 0;
    int r = 0;
    int minWidth = words[0].length();
    while (l < words.length) {
      if (minWidth == maxWidth) {
        lines.add(String.join(" ", Arrays.copyOfRange(words, l, r + 1)));
        l = r + 1;
        r = l;
        minWidth = l < words.length ? words[l].length() : 0;
      } else if (minWidth > maxWidth) {
        minWidth -= words[r].length();
        minWidth--;
        r--;
        lines.add(justifyLine(Arrays.copyOfRange(words, l, r + 1), maxWidth));
        l = r + 1;
        r = l;
        minWidth = l < words.length ? words[l].length() : 0;
      } else {
        r++;
        if (r < words.length) {
          minWidth += words[r].length();
          minWidth++;
        } else {
          lines.add(leftJustify(Arrays.copyOfRange(words, l, words.length), maxWidth));
          break;
        }
      }
    }
    return lines;
  }
}