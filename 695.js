/**
 * @param {number[][]} grid
 * @return {number}
 */
let seen = new Map();

var maxAreaOfIsland = function(grid) {
	let solution = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			solution = Math.max(solution, area(i,j));
		}
	}
	return solution;
};

area = function(x,y){
	if(x>=grid.length || y>=grid[0].length || x<0 || y<0 || seen.has(x+' '+y) || grid[x][y]==0) return 0;
	seen.set(x+' '+y,true);
	return (1 + area(x+1,y) + area(x-1,y) + area(x,y+1) + area(x,y-1));
}


const grid = [
 [0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]];

console.log(maxAreaOfIsland(grid));