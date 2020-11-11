
const lastOccurance = (arr) => {
  return arr.filter((item, currentIndex) => {
    return arr.lastIndexOf(item) === currentIndex;
  })

}

console.log(lastOccurance([7, 2, 4, 8, 2, 7, 4])); //[8,2,7,4]
