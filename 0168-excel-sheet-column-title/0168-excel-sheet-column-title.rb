# @param {Integer} column_number
# @return {String}
def convert_to_title(column_number)
  ans, code = '', nil
  while column_number > 0
    if column_number % 26 > 0
      code = column_number % 26
      column_number /= 26
    else
      code = 26
      column_number -= code
      column_number /= code
    end
    ans = ('A'.ord+code-1).chr+ans
  end
  ans
end