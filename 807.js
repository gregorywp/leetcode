/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let highestInRow = {};
    let highestInColumn = {};
    
    for(let i = 0;i<grid.length;i++){
        for(let j=0;j<grid.length;j++){
            if(!highestInRow[i] || grid[i][j] > highestInRow[i]) {
                highestInRow[i] = grid[i][j];
            }
            
            if(!highestInColumn[j] || grid[i][j] > highestInColumn[j]) {
                highestInColumn[j] = grid[i][j];
            }
        }
    }
    
    let increase = 0;
    for(let i = 0;i<grid.length;i++){
        for(let j=0;j<grid.length;j++){
            let lowestConstraint = Math.min(highestInRow[i],highestInColumn[j]);
            increase += lowestConstraint - grid[i][j];
        }
    }

    return increase;
};


const grid = [ 
    [3, 0, 8, 4], 
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0]
];

console.log(maxIncreaseKeepingSkyline(grid));