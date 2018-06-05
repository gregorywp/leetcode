/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    let sumsByStart = new Array(nums.length);
    let solutionCount = 0;

    for(let i=0;i<nums.length;i++){
    	for(let j=0;j<nums.length;j++){
    		if(j<=i){
    			if(isNaN(sumsByStart[j])){
    				sumsByStart[j] = nums[i];
    			} else {
    				sumsByStart[j] += nums[i];
    			}
    			
    			if(sumsByStart[j]>=lower && sumsByStart[j]<=upper){
    				solutionCount++
    			}
    		}
    	}
    }

    return solutionCount;
};

console.log(countRangeSum([-2,5,-1],-2,2));