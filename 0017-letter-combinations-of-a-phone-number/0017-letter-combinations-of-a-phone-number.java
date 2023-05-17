class Solution {
  public List<String> letterCombinations(String digits) {
    Map lookup = new HashMap();
    lookup.put("2", "abc");
    lookup.put("3", "def");
    lookup.put("4", "ghi");
    lookup.put("5", "jkl");
    lookup.put("6", "mno");
    lookup.put("7", "pqrs");
    lookup.put("8", "tuv");
    lookup.put("9", "wxyz");

    if (digits.length() == 0) return Arrays.asList();
    if (digits.length() == 1) {
      String letters = lookup.get(digits).toString();
      return Arrays.asList(letters.split(""));
    }
    
    List<String> leadLetters = letterCombinations(digits.substring(0, 1));
    List<List<String>> toBeFlattened = leadLetters.stream()
      .map(ch -> letterCombinations(digits.substring(1)).stream()
          .map(combo -> ch + combo)
          .collect(Collectors.toList()))
      .collect(Collectors.toList());
    return toBeFlattened.stream()
      .flatMap(List::stream)
      .collect(Collectors.toList());
  }
}