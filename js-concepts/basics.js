// Object cloning
let obj1 = {
  name: 'Sejal',
  salary: 3456,
  getDOB: function () {
    return this.name + ' ' + this.salary;
  },
};

let obj2 = {};
Object.assign(obj2, obj1);

//console.log(obj2.getDOB());

// write a program in generator function
function* generatorFunction() {
  yield(1);
  yield(2);
  yield('Hi');
}
let generator = generatorFunction();
// console.log("generator", generator.next());
// console.log("generator", generator.next());
// console.log("generator", generator.next());
// console.log("generator", generator.next());


// Currying function
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

function sum(a,b,c) {
  return a + b + c;
}
let curriedSum = curry(sum);
console.log("curriedSum", curriedSum(1)(2)(3));


// event loop
// sudoku
// console.log (prototypal inheritance)
// object clone - done
// deep clone and shallow clone - done
// object comparision in JS - done
// reactJS capitalize while typing
 