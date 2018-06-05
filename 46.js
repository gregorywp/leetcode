/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let allPossibilities = [];
    
    const findPermutations = function (curr, remaining) {
        curr = curr || [];
        
        if (!remaining.length) {
            allPossibilities.push(curr);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            const currNum = remaining[i];
            findPermutations(curr.concat(currNum), remaining.slice(0, i).concat(remaining.slice(i+1)));
        }
    }
    
    findPermutations([], nums);
    
    return allPossibilities;
}

let nums = [1,2,3,4,5];

console.log(permute(nums));