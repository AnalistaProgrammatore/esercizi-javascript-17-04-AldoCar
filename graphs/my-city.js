const Graph = require('./Graphs')
let graph = new Graph

graph.addVertex('Laboratorio')
graph.addVertex('Comune')
graph.addVertex('Chiesa')
graph.addVertex('Pub')
graph.addVertex('PT')
graph.addVertex('Ristorante')

graph.addEdge('Laboratorio', 'Comune', 3)
graph.addEdge('Laboratorio', 'Ristorante', 20)
graph.addEdge('Laboratorio', 'Chiesa', 1)

graph.addEdge('Comune', 'Pub', 4)
graph.addEdge('Comune', 'Chiesa', 5)

graph.addEdge('Chiesa', 'Ristorante', 18)

graph.addEdge('Ristorante', 'PT', 14)
graph.addEdge('PT', 'Pub', 1)

console.log(graph.bfs('Laboratorio', (current) => console.log(current)))


console.log(graph.dfs('Laboratorio', (current) => console.log(current)))

/* ho dovuto fare così il grafo perchè la funzione createGraph mi restituisce errore,
la funzione dfs mi restituisce comunqeu errore
*/
