
const num = 4;

const iterativeSum = (num) => {
    let sum = 0;
    for(let i = 1; i <= num; i ++){
        sum += i;
    }
    return sum;
}

console.log(iterativeSum(num));

const recursiveSum = (num) => {
    if(num === 1){
        return num;
    }
    return num + recursiveSum(num - 1);
}

console.log(recursiveSum(num));