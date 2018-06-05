/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let solutions = [];
    
    let queue = [];
    queue.push({
        currentNode : 0,
        path : [0]
    });
    
    while(queue.length>0){
        let currentItem = queue.shift();

        //console.log(currentItem);
        
        if(currentItem.currentNode==graph.length-1){
            solutions.push(currentItem.path);
        } else {
            for(let i=0; i<graph[currentItem.currentNode].length;i++){
                queue.push({
                    currentNode : graph[currentItem.currentNode][i],
                    path : currentItem.path.slice().concat(graph[currentItem.currentNode][i])
                });
            }
        }
    }
    
    return solutions;
};

console.log(allPathsSourceTarget([[1,2], [3], [3], []]));