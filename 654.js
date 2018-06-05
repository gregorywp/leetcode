/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
	if(nums.length>0){
	    //find max in nums
	    let maxIndex = -1;
	    for(let i=0;i<nums.length;i++){
	    	if(maxIndex==-1||nums[i]>nums[maxIndex]){
	    		maxIndex = i;
	    	}
	    }

	    let rootNode = {
	    	val: nums[maxIndex],
	    	left: constructMaximumBinaryTree(nums.slice(0,maxIndex)),
	    	right: constructMaximumBinaryTree(nums.slice(maxIndex+1,nums.length))
	    }
	    
	    return rootNode;
	} else {
		return null;
	}
};



console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));