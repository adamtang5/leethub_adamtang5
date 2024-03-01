class Solution {
  public void group(int[] pointA, int[] pointB, Map<String, Set<String>> groups) {
    Double slope = pointB[0] == pointA[0] ? Double.POSITIVE_INFINITY : 1.0 * (pointB[1] - pointA[1]) / (pointB[0] - pointA[0]);
    Double invSlope = pointB[1] == pointA[1] ? Double.POSITIVE_INFINITY : 1.0 * (pointB[0] - pointA[0]) / (pointB[1] - pointA[1]);
    Double yInt = invSlope == 0 ? Double.POSITIVE_INFINITY : 1.0 * pointA[1] - slope * pointA[0];
    Double xInt = slope == 0 ? Double.POSITIVE_INFINITY : 1.0 * pointA[0] - invSlope * pointA[1];
    String key = slope.toString() + "," + xInt.toString() + "," + yInt.toString();
    if (!groups.containsKey(key)) groups.put(key, new HashSet<String>());
    groups.get(key).add(pointA.toString());
    groups.get(key).add(pointB.toString());
  }
  
  public int maxPoints(int[][] points) {
    if (points.length < 3) return points.length;
    Map<String, Set<String>> groups = new HashMap<String, Set<String>>();
    
    for (int i = 0; i < points.length - 1; i++) {
      for (int j = i + 1; j < points.length; j++) {
        group(points[i], points[j], groups);
      }
    }
    
    int ans = 0;
    for (Set<String> set : groups.values()) {
      ans = Math.max(ans, set.size());
    }
    return ans;
  }
}