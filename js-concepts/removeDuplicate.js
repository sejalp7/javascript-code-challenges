// Remove duplicate from the array
// function removeDuplicates(arrInput) {
//     let array = [];
//     arrInput.forEach(element => {
//         if(!array.includes(element)) {
//             array.push(element);
//             console.log('Update d array', array.sort(function(a, b){return(a - b)}));
//         }
//     });
// }

function removeDuplicates(arrInput) {
    // return [... new Set(arrInput)];
    //let arr = arrInput.filter((el, index) => arrInput.indexOf(el) === index);
    let arr = arrInput.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
    return arr;
}

console.log(removeDuplicates([1,2,3,46,7,2,1, 46, 50]));