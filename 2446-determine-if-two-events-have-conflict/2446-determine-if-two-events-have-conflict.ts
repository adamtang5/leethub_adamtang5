function haveConflict(event1: string[], event2: string[]): boolean {
  const [start1, end1] = event1
  const [start2, end2] = event2
  return start1 >= start2 && start1 <= end2 ||
    end1 >= start2 && end1 <= end2 ||
    start1 <= start2 && end1 >= end2
}