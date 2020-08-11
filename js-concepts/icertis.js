// This string encodes a list of cricket scores of a particular cricket batsman various matches. Each element of the list is a itself a list of two elements - the first is the name of the country against which the match was held, and the second is the score of the batsman.

// Write a function/method in JavaScript to take such a string and return the number of countries against which this batsman has not scored any centuries. A batsman is said to have scored a century in a match if the score is greater than or equal to 100.

// For example, if the above string is passed to your code, it should return 2 (since this batsman has not scored a century against India and Australia.) Remember, the input will be passed to you as a string.
function checkMatchScore(arrInput) {
    let array = JSON.parse(arrInput);
    let objCountry = {};
    array.forEach(element => {
        if(!objCountry[element[0]]) {
            objCountry[element[0]] = 'No century';
        }
        if(element[1] > 100) {
            objCountry[element[0]] = 'Century';
        }
    });
    let count = 0;
    for (const [k,value] of Object.entries(objCountry)) {
        if(value === 'No century') {
            count++;
        }
    }
    return count;
}

function checkMatchCentury(arrInput) {
    let array = JSON.parse(arrInput);
    const reduced = array.reduce((accum, [k, v]) => {
        if (!accum[k]) {
          accum[k] = 'N';
        }
        if (v > 100) {
          accum[k] = 'C';
        }
        return accum;
      }, {});
      const b = Object.entries(reduced).filter(([k, v]) => v === 'N').length;
      return b;
}


const input = `[
    ["Pakistan", 23],
    ["Pakistan", 127],
    ["India", 3],
    ["India", 71],
    ["Australia", 31],
    ["India", 122],
    ["Pakistan", 81]
]`;
console.log("checkMatchScore -> checkMatchScore", checkMatchCentury(input));