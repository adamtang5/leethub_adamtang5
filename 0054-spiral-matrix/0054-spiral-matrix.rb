# @param {Integer[][]} matrix
# @return {Integer[]}
class State
    attr_accessor :rlb, :rub, :clb, :cub, :order
    
    def initialize(m, n)
        @rlb = 0
        @rub = m-1
        @clb = 0
        @cub = n-1
        @order = []
    end
    
    def walk(matrix)
        go_right = Proc.new do |matrix|
            (@clb..@cub).each { |i| @order << matrix[@rlb][i] }
            @rlb += 1
        end

        go_down = Proc.new do |matrix|
            (@rlb..@rub).each { |i| @order << matrix[i][@cub] }
            @cub -= 1
        end

        go_left = Proc.new do |matrix|
            (@cub).downto(@clb).each { |i| @order << matrix[@rub][i] }
            @rub -= 1
        end

        go_up = Proc.new do |matrix|
            (@rub).downto(@rlb).each { |i| @order << matrix[i][@clb] }
            @clb += 1
        end

        move_seq = [go_right, go_down, go_left, go_up]
        move_idx = 0
        while @rub >= @rlb && @cub >= @clb
            move_seq[move_idx % move_seq.length].call(matrix)
            move_idx += 1
        end
    end
end

def spiral_order(matrix)
    state = State.new(matrix.length, matrix[0].length)
    state.walk(matrix)
    return state.order
end