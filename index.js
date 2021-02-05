//find the last occurances of elements in an array mainitaining the same order in which they occur
const lastOccurance = (arr) => {
  return arr.filter((item, currentIndex) => arr.lastIndexOf(item) === currentIndex)
}

console.log(lastOccurance([7, 2, 4, 8, 2, 7, 4])); //[8,2,7,4]


// find sum of two elements which is equal to the given target
const findSumOfElement = (arr, target) => {
  let myMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (myMap.has(complement)) {
      return [myMap.get(complement), i];
    }
    myMap.set(arr[i], i)
  }

}

console.log(findSumOfElement([2, 5, 7, 9], 9)); // [0,2]


//find subArrays which satiesfies given conditions of maxSum and max number of elements
// arr = [10, 100, 20, 50, 20, 50, 70, 120, 90] , maxSum = 150, maxlen = 3
// output = [[10, 100, 20], [50, 20, 50], [70], [120]]

function formattedArray(arr, maxSum, maxNumberOfElements) {
  let currentSum = 0;
  let result = [];
  let currentArray = [];
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    if (currentSum + currentElement > maxSum || currentArray.length === maxNumberOfElements) {
      result.push(currentArray);
      currentArray = [];
      currentSum = 0
    }
    currentArray.push(currentElement);
    currentSum = +currentElement
  }
  result.push(currentArray);
  return result;

}
//insertion sort
function insertionSort(arr){
    for(let i = 1; i< arr.length; i++){
        let current = arr[i]
        let j = i-1;
while((j>-1) && (arr[j]>current)){
        arr[j+1] = arr[j]
            j-- ;
        }
            arr[j+1] = current;
    }
        return arr;    
}
console.log(insertionSort([23,67,96,34,55])); //(5) [23, 34, 55, 67, 96

//Implement compose function
const compose = (...functions) => (input) => functions.reduceRight((prev, current) => current(prev), input)

const addTen = input => input + 10;
const multiplyNum = input => input * 30;

console.log(compose(addTen, multiplyNum)(20))// 610
