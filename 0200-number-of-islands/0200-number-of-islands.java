class Solution {
  public boolean inBounds(int row, int col, char[][] grid) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
  }
  
  public boolean valid(int row, int col, char[][] grid, Set<String> visited) {
    String key = String.valueOf(row) + "-" + String.valueOf(col);
    return inBounds(row, col, grid) && !visited.contains(key) && grid[row][col] == '1';
  }
  
  public int dfs(int row, int col, char[][] grid, Set<String> visited, int[][] dirs) {
    if (!valid(row, col, grid, visited)) return 0;
    
    String key = String.valueOf(row) + "-" + String.valueOf(col);
    visited.add(key);
    for (int i = 0; i < dirs.length; i++) {
      dfs(row + dirs[i][0], col + dirs[i][1], grid, visited, dirs);
    }
    return 1;
  }
  
  public int numIslands(char[][] grid) {
    int[][] dirs = new int[4][2];
    dirs[0][0] = 0;
    dirs[0][1] = 1;
    dirs[1][0] = 1;
    dirs[1][1] = 0;
    dirs[2][0] = 0;
    dirs[2][1] = -1;
    dirs[3][0] = -1;
    dirs[3][1] = 0;

    int ans = 0;
    Set<String> visited = new HashSet<String>();
    for (int row = 0; row < grid.length; row++) {
      for (int col = 0; col < grid[0].length; col++) {
        String key = String.valueOf(row) + "-" + String.valueOf(col);
        if (!visited.contains(key)) ans += dfs(row, col, grid, visited, dirs);
      }
    }
    return ans;
  }
}