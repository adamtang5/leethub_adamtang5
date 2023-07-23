public class MatrixState {
  protected int rlb;
  protected int rub;
  protected int clb;
  protected int cub;
  protected int curr;
  protected int cells;
  protected int[][] matrix;
  
  public MatrixState(int n) {
    this.rlb = 0;
    this.rub = n - 1;
    this.clb = 0;
    this.cub = n - 1;
    this.curr = 1;
    this.cells = n * n;
    this.matrix = new int[n][n];
  }
  
  public void goRight() {
    for (int i = this.clb; i <= this.cub; i++) {
      this.matrix[this.rlb][i] = this.curr;
      this.curr++;
    }
    this.rlb++;
  }
  public void goDown() {
    for (int i = this.rlb; i <= this.rub; i++) {
      this.matrix[i][this.cub] = this.curr;
      this.curr++;
    }
    this.cub--;
  }
  public void goLeft() {
    for (int i = this.cub; i >= this.clb; i--) {
      this.matrix[this.rub][i] = this.curr;
      this.curr++;
    }
    this.rub--;
  }
  public void goUp() {
    for (int i = this.rub; i >= this.rlb; i--) {
      this.matrix[i][this.clb] = this.curr;
      this.curr++;
    }
    this.clb++;
  }
  public void walk() {
    List<Runnable> moveSeq = new ArrayList<>();
    moveSeq.add(() -> goRight());
    moveSeq.add(() -> goDown());
    moveSeq.add(() -> goLeft());
    moveSeq.add(() -> goUp());
    int moveIdx = 0;
    Runnable move;
    while (this.curr <= this.cells) {
      move = (Runnable) moveSeq.get(moveIdx % moveSeq.size());
      move.run();
      moveIdx++;
    }
  }
}

class Solution {
  public int[][] generateMatrix(int n) {
    MatrixState state = new MatrixState(n);
    state.walk();
    return state.matrix;
  }
}