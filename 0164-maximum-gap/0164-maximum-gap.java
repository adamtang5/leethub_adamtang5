class Solution {
  public int maximumGap(int[] nums) {
    int gMin = Arrays.stream(nums).min().getAsInt();
    int gMax = Arrays.stream(nums).max().getAsInt();
    if (nums.length < 2) return 0;
    int bucketSize = Math.max(1, (gMax - gMin) / (nums.length - 1));
    Map<Integer, int[]> buckets = new HashMap();
    for (int num : nums) {
      int key = (num - gMin) / bucketSize;
      int[] bucket = new int[2];
      if (buckets.containsKey(key)) {
        bucket[0] = Math.min(num, buckets.get(key)[0]);
        bucket[1] = Math.max(num, buckets.get(key)[1]);
      } else {
        bucket[0] = num;
        bucket[1] = num;
      }
      buckets.put(key, bucket);
    }
    int ans = 0;
    int preKey = -1;
    List<Integer> keys = buckets.keySet().stream()
      .collect(Collectors.toList());
    Collections.sort(keys);
    for (int key : keys) {
      if (preKey != -1) {
        ans = Math.max(ans, buckets.get(key)[0] - buckets.get(preKey)[1]);
      }
      preKey = key;
    }
    return ans;
  }
}