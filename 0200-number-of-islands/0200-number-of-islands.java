class Solution {
  public boolean inBounds(int row, int col, char[][] grid) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
  }
  
  public boolean valid(int row, int col, char[][] grid, Set<String> visited) {
    String key = String.valueOf(row) + "-" + String.valueOf(col);
    return inBounds(row, col, grid) && !visited.contains(key) && grid[row][col] == '1';
  }
  
  public void bfs(int row, int col, char[][] grid, Set<String> visited, int[][] dirs) {
    List<List<Integer>> q = new ArrayList();
    List<Integer> init = new ArrayList<Integer>();
    init.add(row);
    init.add(col);
    q.add(init);
    
    String key = String.valueOf(row) + "-" + String.valueOf(col);
    visited.add(key);
    while (!q.isEmpty()) {
      List<Integer> first = q.remove(0);
      for (int i = 0; i < dirs.length; i++) {
        int newRow = first.get(0) + dirs[i][0];
        int newCol = first.get(1) + dirs[i][1];
        if (valid(newRow, newCol, grid, visited)) {
          List<Integer> next = new ArrayList<Integer>();
          next.add(newRow);
          next.add(newCol);
          q.add(next);
          String nextKey = String.valueOf(newRow) + "-" + String.valueOf(newCol);
          visited.add(nextKey);
        }
      }
    }
  }
  
  public int numIslands(char[][] grid) {
    if (grid.length == 0) return 0;
    
    int ans = 0;
    Set<String> visited = new HashSet<String>();
    int[][] dirs = new int[4][2];
    dirs[0][0] = 0;
    dirs[0][1] = 1;
    dirs[1][0] = 1;
    dirs[1][1] = 0;
    dirs[2][0] = 0;
    dirs[2][1] = -1;
    dirs[3][0] = -1;
    dirs[3][1] = 0;

    for (int row = 0; row < grid.length; row++) {
      for (int col = 0; col < grid[0].length; col++) {
        if (valid(row, col, grid, visited)) {
          bfs(row, col, grid, visited, dirs);
          ans++;
        }
      }
    }
    return ans;
  }
}