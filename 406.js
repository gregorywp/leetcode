/**
 * @param {number[][]} people
 * @return {number[][]}
 */
/*var reconstructQueue = function(people) {
    people.sort(function(a,b){
    	return a[0]-b[0];
    });

    let newPeople = new Array(people.length);
    for(let i=0;i<people.length;i++){
    	newPeople[indexAfterEmptyOrSame(people[i],newPeople)] = people[i];
    }

    return newPeople;
};

let indexAfterEmptyOrSame = function(person,newPeople){
	emptyOrSameFound = 0;
	for(let i=0;i<newPeople.length;i++){
		if(emptyOrSameFound==person[1]){
			return nextEmpty(newPeople,i);
		}

		if(!newPeople[i]||newPeople[i][0]==person[0]){
			emptyOrSameFound++;
		}
	}
}

let nextEmpty = function(newPeople,index){
	for(let i=index;i<newPeople.length;i++){
		if(!newPeople[i]){
			return i;
		}
	}
}*/

var reconstructQueue = function(people) {
    people.sort(function(a,b){
    	if(a[0]===b[0]){
    		return a[1]-b[1];
    	} else {
    		return b[0]-a[0]
    	}
    });

    let newPeople = [];
    for(let i=0;i<people.length;i++){
    	newPeople.splice(people[i][1],0,people[i]);
    }

    return newPeople;
};

const people = ([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]);

console.log(reconstructQueue(people));