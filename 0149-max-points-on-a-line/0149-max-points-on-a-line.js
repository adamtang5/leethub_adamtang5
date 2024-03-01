/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length < 3) return points.length;
  
  const groups = {};
  const group = (pointA, pointB) => {
    const slope = ((pointB[1] - pointA[1]) / (pointB[0] - pointA[0]));
    const invSlope = ((pointB[0] - pointA[0]) / (pointB[1] - pointA[1]));
    const yInt = invSlope === 0 ? Infinity : pointA[1] - slope * pointA[0];
    const xInt = slope === 0 ? Infinity : pointA[0] - invSlope * pointA[1];
    const key = `${slope},${xInt},${yInt}`;
    groups[key] ||= new Set();
    groups[key].add(`${pointA[0]},${pointA[1]}`);
    groups[key].add(`${pointB[0]},${pointB[1]}`);
  };
  
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      group(points[i], points[j]);
    }
  }

  let ans = 0;
  for (const key in groups) {
    ans = Math.max(ans, groups[key].size);
  }
  
  // console.log(groups);
  return ans;
};