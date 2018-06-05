/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	if(matrix.length==0){
		return matrix;
	}

    let firstRow = matrix.shift();
   	let solution = [].concat(firstRow);

	if(matrix.length>0){
   		matrix = rotateMatrix(matrix);
   		solution = solution.concat(spiralOrder(matrix));
   	}

   	return solution;

};

rotateMatrix = function(matrix){
	let newMatrix = [];
	for(let i = 0; i<matrix[0].length;i++){
		newMatrix.push([]);
	}
	for(let i = 0; i<matrix[0].length;i++){
		for(let j = 0; j<matrix.length;j++){
			newMatrix[(matrix[0].length-1)-i][j] = matrix[j][i];
		}
	}
	return newMatrix;
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];

console.log(spiralOrder(matrix));