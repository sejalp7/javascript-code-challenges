function fizzBuzz() {
    for(i=0; i<101; i++) {
        let out = '';
         if (i % 3 === 0) out += i + ' Fizz ';
        if (i % 5 === 0) out += i + ' Buzz ';
        if (i % 7 === 0) out += i + ' Fizzy ';
        if (i % 5 === 0 && i%3 === 0) out += i + ' FizzBuzz';
        if (i % 5 === 0 && i%3 === 0 && i%7 === 0) out += i + ' FizzyBizzy';
        console.log(out || i);
    }
}

fizzBuzz();

// (i%3===0 && i%5 === 0) ? i + ' FizzBuzz': (i%3 && i%5 && i%7 ===0) ? 'FizzyBizzy': i);