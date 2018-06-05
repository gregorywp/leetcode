/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let solution = 0;
    let queue = [];

    queue = queue.concat(getOptions(nums,solution));

    while(queue.length>0){
    	let currentOption = queue.shift();
    	if(currentOption.nums.length==0){
    		if(solution==0 || currentOption.score > solution){
    			solution = currentOption.score;
    		}
    	} else {
    		queue = queue.concat(getOptions(currentOption.nums,currentOption.score));
    	}

    }

    return solution;
};

var getOptions = function(nums,solution){
	let options = [];
	for(let i=0;i<nums.length;i++){
		let leftValue = i>0 ? nums[i-1] : 1;
		let rightValue = i<nums.length-1 ? nums[i+1] : 1;
		let valueToAdd = leftValue * nums[i] * rightValue;
		options.push({
			nums: nums.slice(0,i).concat(nums.slice(i+1)),
			score: ( solution!=null ? solution : 0 ) + valueToAdd
		});
	}
	return options;
}

const nums = [3,1,5,8];
console.log(maxCoins(nums));