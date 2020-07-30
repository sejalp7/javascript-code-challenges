function capitalizeText(input) {
    let textInput = input.split(' ');
    textInput.forEach(element => {
    console.log("capitalizeText -> element", textInput)
    
       if(element.endsWith('.')) {
            let elIndex =  textInput.findIndex(el => el === element);
            textInput[elIndex + 1].toUpperCase();
           console.log("capitalizeText -> elIndex", textInput);
       }
    });
}

function capitalizeText1(input) {
    let textInput = input.split(' ');
    let index = textInput.findIndex(el => el.endsWith('.'));
    textInput.map(el => {
       if(el.endsWith('.')) {
           el[index + 1] = el.toUpperCase();
       }
    })
    return textInput;
}

const text = 'My name is Sejal. i am learning Javascript.'
console.log(capitalizeText1(text));