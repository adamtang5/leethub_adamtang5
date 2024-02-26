/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *   ...
 * };
 */

var solution = function(isBadVersion: any) {

  return function(n: number): number {
    let l = 1
    let r = n
    if (l === r) return l
    let mid = Math.floor((r + l) / 2)
    while (l < r) {
      if (isBadVersion(mid)) {
        r = mid
      } else {
        l = mid + 1
      }
      mid = Math.floor((r + l) / 2)
    }
    return mid
  };
};