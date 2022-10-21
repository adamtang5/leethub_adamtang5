# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
    return !haystack.include?(needle) ? -1 : haystack.index(needle)
end