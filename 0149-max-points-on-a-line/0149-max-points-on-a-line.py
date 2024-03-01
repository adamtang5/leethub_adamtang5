class Solution:
  def maxPoints(self, points: List[List[int]]) -> int:
    if len(points) < 3:
      return len(points)
    
    groups = collections.defaultdict(set)
    def group(pointA: List[int], pointB: List[int]) -> None:
      slope = float('inf') if pointB[0] == pointA[0] else (pointB[1]-pointA[1])/(pointB[0]-pointA[0])
      invSlope = float('inf') if pointB[1] == pointA[1] else (pointB[0]-pointA[0])/(pointB[1]-pointA[1])
      yInt = float('inf') if invSlope == 0 else pointA[1]-slope*pointA[0]
      xInt = float('inf') if slope == 0 else pointA[0]-invSlope*pointA[1]
      key = (slope, xInt, yInt)
      groups[key].add(tuple(pointA))
      groups[key].add(tuple(pointB))
      
    for i in range(len(points)-1):
      for j in range(i+1, len(points)):
        group(points[i], points[j])
        
    ans = 0
    for key in groups:
      ans = max(ans, len(groups[key]))
    return ans