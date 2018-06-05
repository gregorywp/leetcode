/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    let solution = -1;
    let movesMap = new Map();
    let queue = [];

    queue.push({
    	board : board,
    	moves : 0
    });
    movesMap.set(board[0].join('')+board[1].join(''),true);

    while(queue.length>0){
    	let currentMove = queue.shift();
    	console.log(currentMove);

    	//only move on if going towards a solution
    	if(solution==-1 || currentMove.moves < solution){
    		//if this is at the end record possible solution
    		if(currentMove.board[0].join('') == '123' && currentMove.board[1].join('') == '450'){
    			solution = currentMove.moves;
    		//if not at the end then queue up more moves
    		} else {
    			let zeroPosition = currentMove.board[0].indexOf(0)!=-1 ? [0,currentMove.board[0].indexOf(0)] : [1,currentMove.board[1].indexOf(0)];
    			let boardCopy = [];
    			let newMoves = [];
    			//left
    			if(zeroPosition[1]!=0){
    				boardCopy = [currentMove.board[0].slice(),currentMove.board[1].slice()];
    				boardCopy[zeroPosition[0]][zeroPosition[1]] = boardCopy[zeroPosition[0]][zeroPosition[1]-1];
    				boardCopy[zeroPosition[0]][zeroPosition[1]-1] = 0;
    				newMoves.push(boardCopy);
    			}
    			//right
    			if(zeroPosition[1]!=2){
    				boardCopy = [currentMove.board[0].slice(),currentMove.board[1].slice()];
    				boardCopy[zeroPosition[0]][zeroPosition[1]] = boardCopy[zeroPosition[0]][zeroPosition[1]+1];
    				boardCopy[zeroPosition[0]][zeroPosition[1]+1] = 0;
    				newMoves.push(boardCopy);
    			}
    			//up
    			if(zeroPosition[0]!=0){
    				boardCopy = [currentMove.board[0].slice(),currentMove.board[1].slice()];
    				boardCopy[zeroPosition[0]][zeroPosition[1]] = boardCopy[zeroPosition[0]-1][zeroPosition[1]];
    				boardCopy[zeroPosition[0]-1][zeroPosition[1]] = 0;
    				newMoves.push(boardCopy);
    			}
    			//down
    			if(zeroPosition[0]!=1){
    				boardCopy = [currentMove.board[0].slice(),currentMove.board[1].slice()];
    				boardCopy[zeroPosition[0]][zeroPosition[1]] = boardCopy[zeroPosition[0]+1][zeroPosition[1]];
    				boardCopy[zeroPosition[0]+1][zeroPosition[1]] = 0;
    				newMoves.push(boardCopy);
    			}

    			//for our possible new moves if they are not in the movesMap then put them in and put them in the queue
    			for(let i=0;i<newMoves.length;i++){
    				if(movesMap.get(newMoves[i][0].join('')+newMoves[i][1].join(''))==undefined){
    					movesMap.set(newMoves[i][0].join('')+newMoves[i][1].join(''),true);
    					queue.push({
    						board: newMoves[i],
    						moves: currentMove.moves + 1
    					});
    				}
    			}
    		}
    	}
    }

    return solution;
};

//const board = [[4,1,2],[5,0,3]];
const board = [[3,2,4],[1,5,0]];
console.log(slidingPuzzle(board));