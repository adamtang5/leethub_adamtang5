# The is_bad_version API is already defined for you.
# @param {Integer} version
# @return {boolean} whether the version is bad
# def is_bad_version(version):

# @param {Integer} n
# @return {Integer}
def first_bad_version(n)
  l, r = 1, n
  return l if l == r
  mid = (l+r)/2
  while l < r
    if is_bad_version(mid)
      r = mid
    else
      l = mid+1
    end
    mid = (l+r)/2
  end
  mid
end