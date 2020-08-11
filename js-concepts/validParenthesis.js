function validParenthesis(str) {
    if(str === '') {
        return true;
    }
    let arr = str.split('');
    let inputParenthesis = [];
    let top = '';
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
            inputParenthesis.push(arr[i]);
        } else {
            if(inputParenthesis.length === 0) {
                return false;
            } else {
                top = inputParenthesis.slice(0,1).shift();
                if((top === '(') || top === '{'||  top === '[') {
                    inputParenthesis.pop();
                } else {
                   return false;
                }
            }
        }
    }

    if(inputParenthesis.length <= 0) {
        return true;
    } else {
        return false;
    }
}

function validParenthesis1(str) {
    let paranethisCount = -1;
    let starCount = -1; 
    let i = 0;
    if(str.charAt(i) === '(') {
        paranethisCount++;
        i++;
    } else if(str.charAt(i) === '*'){
        starCount++;
        i++;
    } else {
        paranethisCount--;
        i++;
    }
    if(paranethisCount === 0) {
        return true;
    } else {
        return false;
    }
}
const inp = "(*)"
console.log("validParenthesis -> validParenthesis", validParenthesis(inp));