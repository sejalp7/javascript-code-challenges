const words = ['map', 'pam', 'art', 'how', 'rat', 'tar', 'who', 'shoop'];
// function findAnagram(arrInput) {
//     let anagrams = {};
//     arrInput.forEach(element => {
//        let letters = element.split(' ').sort().join(' ');
//        anagrams[letters] ? anagrams[letters].push(element) : anagrams[letters] = element;
//    });
//    const keys = Object.keys(anagrams);
//    const values = keys.map(el => {
//        return anagrams[el];
//    });
//    return values
// }

// const arrInput = ['aet', 'tea', 'tan','ate','nat', 'bat'];

// console.log(findAnagram(words));

// // our array of words
// const words = ['map', 'pam', 'art', 'how', 'rat', 'tar', 'who', 'shoop'];

// helper function
function alphabetize(word) {
    if (!word) {
        return;
    }
    word = word.split('');
    word = word.sort();
    word = word.join('');
    return word;
}


// main function
function anagramGrouper(words){
    const anagrams = {};
    words.forEach((word)=>{
        const sortedWord = alphabetize(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
     });
    return anagrams;
}

console.log(anagramGrouper(words));
