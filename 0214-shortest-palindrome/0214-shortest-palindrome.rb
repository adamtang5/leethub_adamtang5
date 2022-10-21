# @param {String} s
# @return {String}
def shortest_palindrome(s)
    return s if s.length < 2
    rev_s = s.reverse
    pre, post = s, rev_s
    while pre != post
        pre = pre[0...-1]
        post = post[1..-1]
    end
    return rev_s[0...(rev_s.length - pre.length)] + s
end