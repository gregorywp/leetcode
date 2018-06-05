/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
	//if one element return
	if(nums.length==1){
		return nums[0];
	}
	let centerIndex = Math.floor(nums.length/2);
	let centerEqualToPrevious = nums[centerIndex]==nums[centerIndex-1];
	let likeThreeLength = (nums.length+1) % 4 == 0;

    if((centerEqualToPrevious && likeThreeLength) || (!centerEqualToPrevious && !likeThreeLength)){
    	if(likeThreeLength){
			return singleNonDuplicate(nums.splice(centerIndex+1,nums.length));
    	} else {
    		return singleNonDuplicate(nums.splice(centerIndex,nums.length));
    	}
	} else if((!centerEqualToPrevious && likeThreeLength) || (centerEqualToPrevious && !likeThreeLength)) {
		if(likeThreeLength){
			return singleNonDuplicate(nums.splice(0,centerIndex));
		} else {
			return singleNonDuplicate(nums.splice(0,centerIndex+1));
		}
	//center element is the singleton
	} else {
		return nums[centerIndex];
	}
};


let nums = [1,1,2,3,3,4,4,8,8];
//let nums = [0,1,1,2,2,5,5];
console.log(singleNonDuplicate(nums));