/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let sumHash = {}
    let solutionFound = false;
        
    const checkNodes = function(node){
        if(node==null){
            return;
        }
        
        if(sumHash[k-node.val]){
            solutionFound = true;
            return;
        } else {
            sumHash[node.val] = true;
            checkNodes(node.left);
            checkNodes(node.right);
        }
    }
    
    checkNodes(root);
    
    return solutionFound;
};