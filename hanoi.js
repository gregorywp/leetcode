//solve the towers of hanoi
//given three arrays, guaranteed one sorted and two empty. Move all elements to the third. Elements must be stacked one at a time and you can never have a bigger one on top of a smaller one.

function hanoiSolve(set){

	const moveFrom = function(n,from,to){
		let buffer = 3-from-to;
		if(n==1){
			set[to].push(set[from].pop());
		} else {
			moveFrom(n-1,from,buffer);
			moveFrom(1,from,to);
			moveFrom(n-1,buffer,to);
		}
		//console.log(n,from,to);
		console.log(set);
	}

	moveFrom(set[0].length,0,2);

	return set;
}

const set = [
	[8,7,6,5,4,3,2,1],
	[],
	[]
];

console.log(hanoiSolve(set));