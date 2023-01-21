# @param {Integer} sx
# @param {Integer} sy
# @param {Integer} tx
# @param {Integer} ty
# @return {Boolean}
def reaching_points(sx, sy, tx, ty)
    while tx >= sx && ty >= sy
        if tx > ty
            if ty == sy
                return (tx-sx) % sy == 0
            else
                tx %= ty
            end
        elsif tx < ty
            if tx == sx
                return (ty-sy) % sx == 0
            else
                ty %= tx
            end
        else
            break
        end
    end
    return sx == tx && sy == ty
end