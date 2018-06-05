/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    T = Array.from(T).sort((a,b)=>{
    	return S.indexOf(a) - S.indexOf(b);
    }).join('');

    return T;
};

let S = 'cba';
let T = 'abcd';

console.log(customSortString(S,T));