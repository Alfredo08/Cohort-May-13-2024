const text = "i love programminggggg at lighthouse labs"
const letters = text.split("");

console.log(letters);

const counteLettersIterative = (arrayLetters) => {
    const dictionary = {};

    for(let i = 0; i < arrayLetters.length; i ++){
        const key = arrayLetters[i];
        if(key in dictionary){
            dictionary[key] ++;
        }   
        else{
            dictionary[key] = 1;
        }
    }

    return dictionary;
}

const countLettersReduce = (arrayLetters) => {
    const dictionary = arrayLetters.reduce((accumulator, currentValue) => {
        if(currentValue in accumulator){
            accumulator[currentValue] ++;
        }
        else{
            accumulator[currentValue] = 1;
        }
        return accumulator
    }, {});

    return dictionary;
}

console.log(countLettersReduce(letters));