/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let solutions = [];
    let minimumLength = 0;
    
    if(wordList.indexOf(endWord)==-1){
        return solutions;
    }
    

    let queue = [];
    queue.push({
        currentWord: beginWord,
        list: [beginWord],
        visitedWords: {}
    });
    
    queue[0].visitedWords[beginWord] = true;
    
    while(queue.length>0){
        let currentNode = queue.shift();

        
        if(currentNode.currentWord==endWord && (minimumLength==0 || currentNode.list.length <= minimumLength)){
            solutions.push(currentNode.list);
            minimumLength = currentNode.list.length;
        } else {
            //only proceed if we have a chance of getting the shortest one
            if(minimumLength==0 || currentNode.list.length < minimumLength){
                //fill up queue with possible moves forward
                for(let i=0;i<wordList.length;i++){
                    if(!currentNode.visitedWords[wordList[i]] && validStepExists(currentNode.currentWord,wordList[i])){
                        queue.push({
                            currentWord: wordList[i],
                            list: currentNode.list.concat(wordList[i]),
                            visitedWords: JSON.parse(JSON.stringify(currentNode.visitedWords))
                        });
                        queue[queue.length-1].visitedWords[wordList[i]] = true;
                    }
                }
            }
        }
    }
    
    return solutions;
    
    
};

function validStepExists(wordOne,wordTwo){
    if(wordOne.length!=wordTwo.length){
        return false;
    } else {
        let differentLetters = 0;
        for(let i=0;i<wordOne.length;i++){
            if(wordOne.charAt(i)!=wordTwo.charAt(i)){
                differentLetters++;
            }
        }
        return differentLetters==1;
    }
}

const beginWord = 'hit';
const endWord = 'cog';
const wordList = ["hot","dot","dog","lot","log","cog"];

console.log(findLadders(beginWord,endWord,wordList));