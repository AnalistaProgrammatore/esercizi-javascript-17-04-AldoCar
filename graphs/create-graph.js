const Graph = require('./Graphs')

function createGraph(vertices, edges) {
    let graph = new Graph

    for (i = 0; i < vertices.length; i++) {
        graph.addVertex(i)
    }
    for (j = 0; j < edges.length; j++) {
        graph.addEdge(j[0], j[1], j[2])
    }
    return graph
}




let vertices = ["A", "B", "C", "D"]
let edges = [["A", "B", 2], ["A", "C", 1], ["B", "E", 1], ["C", "D", 3]]
let graph1 = createGraph(vertices, edges)

console.log(graph1)
