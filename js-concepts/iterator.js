// let str = "Hello";

// // does the same as
// // for (let char of str) alert(char);

// let iterator = str[Symbol.iterator]();
// console.log(iterator);
// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   console.log(result.value); // outputs characters one by one
// }

// function* generatorSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let generator = generatorSequence();
// let one = generator.next();
// console.log(JSON.stringify(one));


let promise = new Promise(function (resolve, reject)  {
    resolve('Resolve');
    reject => console.log('Reject');
});

return promise.then(res => console.log(res)).catch(err => console.log(err));