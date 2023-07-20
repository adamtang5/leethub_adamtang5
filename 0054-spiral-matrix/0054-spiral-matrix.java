public class MatrixState {
  protected int rlb;
  protected int rub;
  protected int clb;
  protected int cub;
  protected List<Integer> order;
  
  public MatrixState(int m, int n) {
    this.rlb = 0;
    this.rub = m - 1;
    this.clb = 0;
    this.cub = n - 1;
    this.order = new ArrayList();
  }
  
  public void goRight(int[][] matrix) {
    for (int i = this.clb; i <= this.cub; i++) {
      this.order.add(matrix[this.rlb][i]);
    }
    this.rlb += 1;
  }
  public void goDown(int[][] matrix) {
    for (int i = this.rlb; i <= this.rub; i++) {
      this.order.add(matrix[i][this.cub]);
    }
    this.cub -= 1;
  }
  public void goLeft(int[][] matrix) {
    for (int i = this.cub; i >= this.clb; i--) {
      this.order.add(matrix[this.rub][i]);
    }
    this.rub -= 1;
  }
  public void goUp(int[][] matrix) {
    for (int i = this.rub; i >= this.rlb; i--) {
      this.order.add(matrix[i][this.clb]);
    }
    this.clb += 1;
  }
  public void walk(int[][] matrix) {
    List<Consumer<int[][]>> moveSeq = new ArrayList<>();
    moveSeq.add(m -> goRight(m));
    moveSeq.add(m -> goDown(m));
    moveSeq.add(m -> goLeft(m));
    moveSeq.add(m -> goUp(m));
    int moveIdx = 0;
    Consumer move;
    while (this.rub >= this.rlb && this.cub >= this.clb) {
      move = (Consumer) moveSeq.get(moveIdx % moveSeq.size());
      move.accept(matrix);
      moveIdx++;
    }
  }
}

class Solution {
  public List<Integer> spiralOrder(int[][] matrix) {
    MatrixState state = new MatrixState(matrix.length, matrix[0].length);
    state.walk(matrix);
    return state.order;
  }
}