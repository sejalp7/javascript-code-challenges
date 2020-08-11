const inStr = 'abcabcbb';

function firstNonRepeatingCharacter(inputString) {
    let counter ={};
    let nonRepeatingChar = '';
    for (let i = 0; i < inputString.length; i++) {
        const element = inputString[i];
        if(!counter[element]) {
            counter[element] = 1;
        } else {
            counter[element] = 2;
        }
    }
    for(el in counter) {
        // console.log(counter[el]);
        if(counter[el] === 1) {
            nonRepeatingChar = el;
            break;
        }
    }
    console.log('count', counter[el], nonRepeatingChar);
    return nonRepeatingChar;
}

console.log(firstNonRepeatingCharacter(inStr));
