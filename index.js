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

