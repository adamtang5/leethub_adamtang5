# @param {String[]} words
# @return {String[]}
def remove_anagrams(words)
    ans = []
    currCounts = {}
    words.each do |word|
        counts = Hash.new(0)
        word.each_char do |ch|
            counts[ch] += 1
        end
        if counts != currCounts
            ans << word
            currCounts = counts
        end
    end
    return ans
end