# @param {String[]} event1
# @param {String[]} event2
# @return {Boolean}
def have_conflict(event1, event2)
  start1, end1 = event1
  start2, end2 = event2
  return start1 >= start2 && start1 <= end2 ||
    end1 >= start2 && end1 <= end2 ||
    start1 <= start2 && end1 >= end2
end