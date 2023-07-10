class Solution {
  public List<List<String>> groupAnagrams(String[] strs) {
    Map groups = new HashMap();
    String keyStr;
    for (String s : strs) {
      String[] chs = s.split("");
      List<String> chList = Arrays.asList(chs);
      Collections.sort(chList);
      keyStr = chList.toString();
      if (!groups.containsKey(keyStr)) groups.put(keyStr, new ArrayList<String>());
      List<String> group = (List<String>) groups.get(keyStr);
      group.add(s);
    }
    return new ArrayList(groups.values());
  }
}