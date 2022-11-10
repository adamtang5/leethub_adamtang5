# @param {Integer[][]} graph
# @return {Integer[][]}
def dfs(node, path, graph, paths)
    if node == graph.length-1
        paths << path+[node]
        return
    end
    return if graph[node].length == 0

    graph[node].each{ |next_node| dfs(next_node, path+[node], graph, paths) }
end
def all_paths_source_target(graph)
    paths = []
    dfs(0, [], graph, paths)
    return paths
end