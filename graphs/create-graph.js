onst Graph = require('./Graphs')

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


let vertices1 = ["A", "B", "C", "D", "E"]
let edges1 = [["A", "B", 2], ["A", "C", 1], ["B", "E", 1], ["B", "C", 3], ["C", "D", 3], ["D", "E", 4]]
let graph1 = createGraph(vertices1, edges1)

console.log(graph1)

module.exports = createGraph
