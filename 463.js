/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==1){
                //left
                if(j==0||grid[i][j-1]==0){
                    perimeter ++;
                }
                //right
                if(j==(grid[0].length-1)||grid[i][j+1]==0){
                    perimeter ++;
                }
                //down
                if(i==(grid.length-1)||grid[i+1][j]==0){
                    perimeter ++;
                }
                //up
                if(i==0||grid[i-1][j]==0){
                    perimeter ++;
                }
            }
        }
    }
    
    return perimeter;
};

/*const island = [
    [0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]
];*/

const island = [[0,1]];

console.log(islandPerimeter(island));