/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let solution = [];
    let levelLength = 1;
    let levelIndex = 0;
    
    for(let i=0;i<root.length;i++){
        if(levelIndex>solution.length-1){
            solution.push([]);
        }
            
        if(root[i]){
            solution[levelIndex].push(root[i]);
        }
        
        if(i+1==levelLength){
            levelLength += levelLength*2;
            levelIndex ++;
        }
    }
    
    return solution;
};

console.log(levelOrder([3,9,20,null,null,15,7]));