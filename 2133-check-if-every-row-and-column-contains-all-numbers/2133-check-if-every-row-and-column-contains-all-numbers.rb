# @param {Integer[][]} matrix
# @return {Boolean}
def check_single(row)
    tally = [0] * row.length
    (0...row.length).each do |i|
        if tally[row[i]-1] > 0
            return false
        else
            tally[row[i]-1] += 1
        end
    end
    return true
end

def check_valid(matrix)
    (0...matrix.length).each do |r|
        return false if !check_single(matrix[r])
    end
    
    (0...matrix.length).each do |c|
        return false if !check_single(matrix.map{ |r| r[c] })
    end
    return true
end