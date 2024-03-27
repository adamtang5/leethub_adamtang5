# @param {String} version1
# @param {String} version2
# @return {Integer}
def compare_version(version1, version2)
  subs1 = version1.split(".").map(&:to_i)
  subs2 = version2.split(".").map(&:to_i)
  i = 0
  while i < subs1.length && i < subs2.length
    return -1 if subs1[i] < subs2[i]
    return 1 if subs1[i] > subs2[i]
    i += 1
  end
  while i < subs1.length
    return 1 if subs1[i] > 0
    i += 1
  end
  while i < subs2.length
    return -1 if subs2[i] > 0
    i += 1
  end
  0
end