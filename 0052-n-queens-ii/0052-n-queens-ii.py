class Solution:
  def totalNQueens(self, n: int) -> int:
    seqs = []
    
    def dfs(seq: List[int]) -> None:
      if len(seq) == n:
        seqs.append(seq)
        return
      
      redSet = set(seq)
      for r, c in enumerate(seq):
        if c+len(seq)-r in range(n):
          redSet.add(c+len(seq)-r)
        if c-len(seq)+r in range(n):
          redSet.add(c-len(seq)+r)
      for i in range(n):
        if i not in redSet:
          dfs(seq+[i])
    
    for i in range(n):
      dfs([i])
    return len(seqs)