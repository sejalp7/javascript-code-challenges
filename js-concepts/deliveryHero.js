/**
Given a text and a set of keywords to search for, find all the occurences of the keyword in the text, and print in the following format. 

total: 8
(line:1, occurences:2)
(line:2, occurences:5)
(line:9, occurences:1)

Eg. 

Input:
example file contents:
This is a simple example simple to show a demostrate the
problem and the expected output. What follows might
not make much sense but, it is all about having some
text as demo input simple

keywords to search:
a) simple
b) the
c) mostr
d) t foll
e) it is all ab

Output:
a) keyword: simple, total: 3
(line:1, occurences:2)
(line:4, occurences:1)

b) keyword: the, total: 2
(line:1, occurences:1)
(line:2, occurences:1)
*/

function findKeyword(keyword, paragraph) {
    let str = paragraph;
    let lineNumber = str.split('\n');
    let count = 0;
    let total = 0;
    for(let j=0; j <= keyword.length - 1; j++) {
        console.log('Keyword: ', keyword[j], 'Total: ', total);
    for(let i=0; i <= lineNumber.length - 1; i++) {
        let re = new RegExp(keyword[j], 'g');
        if(lineNumber[i].match(re)) {
         count = (lineNumber[i].match(re)).length;
         total = total + count;
        } else {
            count = 0;
        }
        console.log('(line', i+1, 'count: ', count + ')');
    }
}
}

let paragraph = `"This is a simple example simple to show a demostrate the
problem and the expected output. What follows might
not make much sense but, it is all about having some
text as demo input simple"`
findKeyword(["simple", "the", "mostr"], paragraph);