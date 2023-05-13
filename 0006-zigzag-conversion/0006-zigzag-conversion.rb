# @param {String} s
# @param {Integer} num_rows
# @return {String}
def convert(s, num_rows)
  return s if num_rows == 1
  rows = ['']*num_rows
  new_base = (num_rows-1)*2
  
  s.each_char.with_index do |ch, i|
    i_mod = i % new_base
    new_i_mod = i_mod <= new_base/2 ? i_mod : new_base-i_mod
    rows[new_i_mod] += ch
  end
  rows.join('')
end