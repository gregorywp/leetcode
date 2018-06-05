/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let solutionSet = new Set();
    for(let num of nums) if(!solutionSet.delete(num)) solutionSet.add(num);
    return [...solutionSet];
};


let nums = [1,2,1,3,2,5];
console.log(singleNumber(nums));