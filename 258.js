/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num.toString().length>1){
        let newNum = 0;
        let numString = num.toString();
        
        for(let i=0; i<numString.length;i++){
            newNum += parseInt(numString.charAt(i));
        }
        num = newNum;
    }
    
    return num;
};

console.log(addDigits(38));