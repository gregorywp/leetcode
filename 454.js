/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    const left = {};
    for (let a of A) {
        for (let b of B) {
            left[a + b] = (left[a + b] || 0) + 1;
        }
    }
    let count = 0;
    for (let c of C) {
        for (let d of D) {
            count += left[-c - d] || 0;
        }
    }
    return count;
};


let A = [ 1, 2];
let B = [-2,-1];
let C = [-1, 2];
let D = [ 0, 2];

console.log(fourSumCount(A,B,C,D));