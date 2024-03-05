class Solution:
  def reverseWords(self, s: str) -> str:
    ans = curr = ""
    for ch in s:
      if ch == " ":
        if ans != "" and curr != "":
          ans = curr+" "+ans
        elif curr != "":
          ans = curr
        curr = ""
      else:
        curr += ch
    if ans != "" and curr != "":
      ans = curr+" "+ans
    elif curr != "":
      ans = curr
    return ans