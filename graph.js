class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
 
    // functions to be implemented
 
    // addVertex(v)
  addVertex(v)
{
    this.AdjList.set(v, []);
}
    // addEdge(v, w)
  addEdge(v, w)
{
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);
 
    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
}
  addDirectedEdge(v, w)
{
    this.AdjList.get(v).push(w);
 
}
    // printGraph()
 
    // bfs(v)
bfs(src){
  var res=[]
 
  //create Q
  //enq src visited[src]=true
  //loop while q not empty
  //deq and check its adjList
  //for every adjList member enq each and make visited[i] true
      var visited = {};
 
    // Create an object for queue
    var q = new Queue();
 
    // add the starting node to the queue
    visited[int(src.label)] = true;
    q.enqueue(src);
 
    // loop until queue is element
    while (!q.isEmpty()) {
        // get the element from the queue
        var getQueueElement = q.dequeue();
 
        // passing the current vertex to callback funtion
        res.push(getQueueElement);
         console.log(getQueueElement)
        // get the adjacent list for current vertex
        var get_List = this.AdjList.get(getQueueElement);
 
        // loop through the list and add the element to the
        // queue if it is not processed yet
        for (var i in get_List) {
            var neigh = get_List[i];
 
            if (!visited[int(neigh.label)]) {
                visited[int(neigh.label)] = true;
                q.enqueue(neigh);
            }
        }
    }
  return res
}
dfs(startingNode)
{
    
    var visited = {};
    var res=[]
    this.DFSUtil(startingNode, visited,res);
   console.log(res)
    return res;
}
 
DFSUtil(vert, visited,res)
{
    visited[int(vert.label)] = true;
    res.push(vert);
    var get_neighbours = this.AdjList.get(vert);
    for (var i in get_neighbours) {
        var get_elem = get_neighbours[i];
        if (!visited[int(get_elem.label)])
            this.DFSUtil(get_elem, visited,res);
    }
}
}