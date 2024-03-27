class Solution {
  public int compareVersion(String version1, String version2) {
    List<Integer> subs1 = Arrays.asList(version1.split("[.]")).stream()
      .map(Integer::valueOf)
      .collect(Collectors.toList());
    List<Integer> subs2 = Arrays.asList(version2.split("[.]")).stream()
      .map(Integer::valueOf)
      .collect(Collectors.toList());
    int i = 0;
    while (i < subs1.size() && i < subs2.size()) {
      if (subs1.get(i) < subs2.get(i)) return -1;
      if (subs1.get(i) > subs2.get(i)) return 1;
      i++;
    }
    while (i < subs1.size()) {
      if (subs1.get(i) > 0) return 1;
      i++;
    }
    while (i < subs2.size()) {
      if (subs2.get(i) > 0) return -1;
      i++;
    }
    return 0;
  }
}