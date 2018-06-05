/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if(num==0){
        return 0;
    }
    
    solution = [0,1];
    let i = 1;    

    while(true){
        let iTimes2 = i*2;
        let iTimes2Plus1 = (i*2)+1;
        
        if(iTimes2>num){
            break;
        } else {
            solution[iTimes2] = solution[i];
        }
         
        if(iTimes2Plus1>num){
            break;
        } else {
            solution[iTimes2Plus1] = solution[i] + 1;
        }
        
        i++;
    }
    
    return solution
};

console.log(countBits(20));