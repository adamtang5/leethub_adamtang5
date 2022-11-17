# @param {Integer} num
# @return {Boolean}

def is_perfect_square(num)
    l, r = 1, num
    pivot = (l+r) / 2
    while l <= r
        return true if pivot*pivot == num
        if pivot*pivot < num
            l = pivot+1
        else
            r = pivot-1
        end
        pivot = (l+r) / 2
    end
    return false
end
