# @param {String} path
# @return {String}
def simplify_path(path)
    names, stack = path.split('/'), []
    names.each do |name|
        if name == '..'
            stack.pop() if stack != []
        elsif name != '' && name != '.'
            stack << name
        end
    end
    ans = stack.map{ |name| '/' + name }.join('')
    return ans != '' ? ans : '/'
end