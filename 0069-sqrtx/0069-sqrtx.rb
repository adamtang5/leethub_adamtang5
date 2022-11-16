# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
    return x if x < 2
    l, r = 0, x
    pivot = (l+r) / 2
    while l < r
        if pivot * pivot <= x && (pivot+1) * (pivot+1) > x
            return pivot
        elsif pivot * pivot > x
            r = pivot
        else
            l = pivot
        end
        pivot = (l+r) / 2
    end
end