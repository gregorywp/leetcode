/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityMap = {};
    let solution = null;
    
    for(let i=0;i<nums.length;i++){
        if(majorityMap[nums[i]]===undefined){
            majorityMap[nums[i]] = 1;
        } else {
            majorityMap[nums[i]]++;
        }
        if(solution===null || majorityMap[nums[i]] > majorityMap[solution]){
            solution = nums[i];
        }
        if(majorityMap[solution] > nums.length/2){
            break;
        }
    }
    
    return solution;
};

//let nums = [3,2,3];
let nums = [6,5,5];

console.log(majorityElement(nums));