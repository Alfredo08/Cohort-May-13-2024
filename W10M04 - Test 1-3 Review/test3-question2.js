/*
Question 2
Write a function which will split an array into two arrays (i.e. partition it).

It will take two parameters, the first is an array of Integer values, and the second will 
be a callback which will return a boolean. If the callback returns true for an element, 
it should be placed into the left array, otherwise it should be placed into the right array.

Examples:

partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0) => [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0) => [[-5, -4, -3, -2, -1], [0, 1, 2, 3, 4, 5]]
const partition = function (arr, callback) {
  // IMPLEMENT ME
};

*/

const partition = (arrayOfNums, callback) => {
    const leftArray = [];
    const rightArray = [];

    for(let i = 0; i < arrayOfNums.length; i ++){
      /*if(callback(arrayOfNums[i])){
        leftArray.push(arrayOfNums[i]);
      }
      else{
        rightArray.push(arrayOfNums[i]);
      } */
      callback(arrayOfNums[i]) ? leftArray.push(arrayOfNums[i]) : rightArray.push(arrayOfNums[i]);
    }

    return [leftArray, rightArray];
} 

const partitionReduce = (arrayOfNums, callback) => {
  const result = arrayOfNums.reduce((accumulator, currentValue) => {
    callback(currentValue) ? accumulator[0].push(currentValue) : accumulator[1].push(currentValue);
    return accumulator;
  }, [[],[]]);

  return result;
}


console.log(partitionReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0));
console.log(partitionReduce([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0));