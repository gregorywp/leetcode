/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let firstPartition = getFirstPartition(S);
    let solution = [firstPartition[0]];
    let nextPart = firstPartition[1];

    while(nextPart&&nextPart.length>0){

    	firstPartition =  getFirstPartition(nextPart);
    
    	solution.push(firstPartition[0]);
    	nextPart = firstPartition[1];
    }

    //return solution;
    return solution.map(x=>x.length);
};

var getFirstPartition = function(S){
	partitionLength = 1;

	while(partitionIncorrect(S,partitionLength)){
		partitionLength++;
	}

	if(partitionLength==S.length){
		return [S];
	} else {
		return [S.substring(0,partitionLength),S.substring(partitionLength,S.length)];
	}
}

var partitionIncorrect = function(S,partitionLength){
	let firstPart = S.substring(0,partitionLength);
	let secondPart = S.substring(partitionLength,S.length);

	let firstHash = {};
	for(let i=0;i<firstPart.length;i++){
		firstHash[firstPart[i]] = true;
	}

	for(let i=0;i<secondPart.length;i++){
		if(firstHash[secondPart[i]]){
			return true;
		}
	}

	return false;
}

console.log(partitionLabels('ababcbacadefegdehijhklij'));