/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*var findDuplicates = function(nums) {
	let duplicates = [];
	let newNums = new Array(nums.length);
    for(let i=0; i<nums.length; i++){
    	if(newNums[nums[i]-1]!=null){
    		duplicates.push(nums[i]);
    	}
    	newNums.splice(nums[i]-1,1,nums[i]);
    }

    return duplicates;
};*/

var findDuplicates = function(nums) {
	var res = [];
	for(var i=0; i<nums.length; i++){
		let num = nums[i];
		if(nums[Math.abs(num) - 1] > 0 ){
			nums[Math.abs(num) - 1] = -nums[Math.abs(num) - 1];
		} else {
			res.push(Math.abs(num));
		}
		console.log(nums);
	}

	return res;
}

let nums = [4,3,2,7,8,2,3,1];

console.log(findDuplicates(nums));