//find the last occurances of elements in an array mainitaining the same order in which they occur
const lastOccurance = (arr) => {
  return arr.filter((item, currentIndex) => arr.lastIndexOf(item) === currentIndex)
}

console.log(lastOccurance([7, 2, 4, 8, 2, 7, 4])); //[8,2,7,4]
