/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
  const [start1, end1] = event1;
  const [start2, end2] = event2;
  return start1 >= start2 && start1 <= end2 ||
    end1 >= start2 && end1 <= end2 ||
    start1 <= start2 && end1 >= end2;
};