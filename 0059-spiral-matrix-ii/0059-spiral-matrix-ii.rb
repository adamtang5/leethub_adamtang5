# @param {Integer} n
# @return {Integer[][]}
class State
    attr_accessor :rlb, :rub, :clb, :cub, :curr
    
    def initialize(n)
        @rlb = 0
        @rub = n-1
        @clb = 0
        @cub = n-1
        @curr = 1
    end
end

def generate_matrix(n)
    matrix = Array.new(n) {Array.new(n, nil)}
    state = State.new(n)
    move_idx = 0
    go_right = Proc.new do |matrix, state|
        (state.clb..state.cub).each do |i|
            matrix[state.rlb][i] = state.curr
            state.curr += 1
        end
        state.rlb += 1
    end

    go_down = Proc.new do |matrix, state|
        (state.rlb..state.rub).each do |i|
            matrix[i][state.cub] = state.curr
            state.curr += 1
        end
        state.cub -= 1
    end

    go_left = Proc.new do |matrix, state|
        (state.cub).downto(state.clb).each do |i|
            matrix[state.rub][i] = state.curr
            state.curr += 1
        end
        state.rub -= 1
    end

    go_up = Proc.new do |matrix, state|
        (state.rub).downto(state.rlb).each do |i|
            matrix[i][state.clb] = state.curr
            state.curr += 1
        end
        state.clb += 1
    end

    move_seq = [go_right, go_down, go_left, go_up]
    while state.curr <= n*n
        move_seq[move_idx % move_seq.length].call(matrix, state)
        move_idx += 1
    end
    return matrix
end