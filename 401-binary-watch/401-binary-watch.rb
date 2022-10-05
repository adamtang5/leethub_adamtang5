# @param {Integer} turned_on
# @return {String[]}

def get_pairs(total, ub1, ub2)
    ans = []
    (0..total).each do |l|
        r = total-l
        if l >= 0 && l <= ub1 && r >= 0 && r <= ub2
            ans << [l, r]
        end
    end
    return ans
end

def valid_hours(h)
    return h.to_s(10)
end

def valid_minutes(m)
    return m < 10 ? '0' + m.to_s(10) : m.to_s(10)
end

def read_binary_watch(turned_on)
    hh_lookup = Array.new(4) { Array.new }
    mm_lookup = Array.new(6) { Array.new }
    
    (0...60).each do |n|
        ones = n.to_s(2).chars.select { |d| d == '1' }.length
        mm_lookup[ones] << n
        if n < 12
            hh_lookup[ones] << n
        end
    end
    
    hm_pairs = get_pairs(turned_on, 3, 5)
    
    ans = []
    hm_pairs.each do |h_key, m_key|
        hh_lookup[h_key].each do |h|
            mm_lookup[m_key].each do |m|
                ans << "#{valid_hours(h)}:#{valid_minutes(m)}"
            end
        end
    end
    return ans
end