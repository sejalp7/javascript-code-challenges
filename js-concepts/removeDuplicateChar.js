function removeDuplicateChar(str) {
   let arrInput = str.split('');
   let result = arrInput.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
   console.log(result.join(''))
}

removeDuplicateChar('aaabcccdeeef');