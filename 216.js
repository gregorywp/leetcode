/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let solutions = [];
    let queue = [];

    for(let i=1; i<n/k; i++){
    	queue.push({
    		sum : i,
    		nums: [i]
    	})
    }

    while(queue.length>0){
    	currentNode = queue.shift();

    	if(currentNode.nums.length==k){
    		if(currentNode.sum==n){
    			solutions.push(currentNode.nums);
    		}
    	} else {
    		for(let i=currentNode.nums[currentNode.nums.length-1]+1; i<n && i<10; i++){
    			let newNode = {
    				sum : currentNode.sum + i,
    				nums : currentNode.nums.slice().concat(i)
    			}

    			if(newNode.sum <= n){
    				queue.push(newNode);
    			}
    		}
    	}
    }

    return solutions;
};

let k = 3;
let n = 9;
console.log(combinationSum3(k,n));