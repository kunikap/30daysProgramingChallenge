Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
              callback(this[i],i,this)
    }
  };
  
  const arr = [1,2,3,4];
  arr.myForEach((item, i, arr)=> console.log(item, i, arr))
  
  
  Array.prototype.myMap = function(callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i],i,this))
    }
    return result;
  };
  
  console.log(arr.myMap(item => item*3));
  
  Array.prototype.myFilter = function(callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
    if(callback(this[i],i,this)) {
       result.push(this[i])
     }
    }
    return result;
  };
  
  console.log(arr.myFilter(item => item%2 === 0));
  
  
  
  
  
  Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
    if(callback(this[i],i,this)) {
       return this[i];
     }
    }
  };
  
  console.log(arr.myFind(item => item%2 === 0));
  
  
  Array.prototype.myReduce = function(callback, initial) {
    let accumulator = initial;
    let start = 0;
    if(!initial){
      accumulator = this[0];
      start = 1;
    }
    for (let i = start; i < this.length; i++) {
      accumulator = callback(accumulator,this[i], i, this)
    }
    return accumulator;
  };
  
  console.log(arr.myReduce((acc, item)=> acc + item, 10));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  