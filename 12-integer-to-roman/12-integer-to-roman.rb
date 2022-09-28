# @param {Integer} num
# @return {String}

def digit_to_roman(val, p)
    lookup = [
        {
            1 => 'I',
            5 => 'V',
        },
        {
            1 => 'X',
            5 => 'L',
        },
        {
            1 => 'C',
            5 => 'D',
        },
        {
            1 => 'M',
        },
    ]
    
    if val == 0
        return ''
    elsif val <= 3
        return lookup[p][1] * val
    elsif val <= 8
        l = val < 5 ? lookup[p][1] : ''
        r = val > 5 ? lookup[p][1] * (val-5) : ''
        return l + lookup[p][5] + r
    elsif val == 9
        return lookup[p][1] + lookup[p+1][1]
    end
end

def int_to_roman(num)
    pow_10 = Math.log10(num).floor
    places = [0] * (pow_10+1)
    
    while num > 0
        places[pow_10] = (num / (10 ** pow_10)).floor
        num %= (10 ** pow_10)
        if num > 0
            pow_10 = Math.log10(num).floor
        end
    end
    
    places = places.map.with_index { |val, p| digit_to_roman(val, p) }
    places.reverse!
    return places.join('')
end