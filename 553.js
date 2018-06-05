/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if(nums.length == 1){
    	return nums[0].toString();
    } else {
    	let answer = nums[0] + '/';
    	if(nums.length>2) answer+='(';
    	for(let i=1; i<nums.length; i++){
    		answer += nums[i] + '/'
    	}
    	answer = answer.substring(0,answer.length-1);
    	if(nums.length>2) answer += ')'
    	return answer;
    }
};

let nums = [1000,100,10,2];
console.log(optimalDivision(nums));