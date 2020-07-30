// function repeatedString(string, length) {
//     let str = string.repeat(length, string);
//     // console.log('Repeated string', str);
//     const searchText = 'a';
//     let counter = 0;
//     console.log(str);
//     for(let i=0; i <= str.length - 1; i++) {
//         if(str[i] === searchText) {
//             counter++;
//         }
//     }
//     console.log('Count', counter);
//     return counter;
// }
function repeatedString(string, num) {
    let final = '';
    let counter = 0;
    for(i=0; i<num; i++) {
        final += string;
        // console.log('string', final);
    }
    for(let i=0; i <= final.length - 1; i++) {
                if(str[i] === searchText) {
                    counter++;
        }
    }
    console.log('Count', counter);
}
repeatedString('ab', 1000000);