# @param {String} s
# @param {Integer} num_rows
# @return {String}
def convert(s, num_rows)
    return s if num_rows == 1
    
    rows = Array.new(num_rows, '')
    new_base = (num_rows - 1) * 2
    
    new_idx_mods = Array.new(new_base, 0)
    (0...new_base).each do |i|
        new_idx_mods[i] = i <= new_base / 2 ? i : new_base - i
    end
    
    s.each_char.with_index do |ch, i|
        i_mod = i % new_base
        rows[new_idx_mods[i_mod]] += ch
    end
    return rows.join('')
end