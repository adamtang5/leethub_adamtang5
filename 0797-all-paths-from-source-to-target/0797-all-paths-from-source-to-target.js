/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

/*
depth first search
stack vs. recursion
paths = []

dfs:
if node === n - 1 ==> paths.push(path)
if !graph[node].length ==> return

for each nextNode in graph[node],
dfs(nextNode, path)
*/
var allPathsSourceTarget = function(graph) {
    const paths = [];
    
    const dfs = (node, path) => {
        if (node === graph.length - 1) {
            paths.push([...path, node]);
            return;
        }
        if (!graph[node].length) return;
        
        graph[node].forEach(nextNode => {
            dfs(nextNode, [...path, node]);
        });
    };
    
    dfs(0, []);
    return paths;
};