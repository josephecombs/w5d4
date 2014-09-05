"user strict";

var uniq = function (arr) {
  var uniqArr = [];
  for (i = 0; i < arr.length; i++) {
    if (!contains(uniqArr, arr[i])) {
      console.log(uniqArr);
      uniqArr.push(arr[i]);
    } 
  }
  return uniqArr;
};

// [].indexOf(2)

function contains(arr, num) {
  for (j = 0; j < arr.length; j++) {
    if (arr[j] === num) {
      return true;
    } 
  }
}

// console.log(uniq([1, 2, 3, 3, 3, 4, 4]))
function twoSum(array){
  var results = [];
  for(var i = 0; i < array.length; i++){
    j = i + 1;
    while( j < array.length ){
      if (array[i] + array[j] === 0){
        results.push([i, j]);
      }
      j++;
    }
  }
  return results;
}
// console.log(twoSum([-1, 0, 2, -2, 1]));

function transpose(array){
  // results = []
  var results = new Array(array[0].length);
  for(var z = 0; z < results.length; z++){
    results[z] = new Array(array.length);
  }
  
  // console.log(results);
  
  for(var i = 0; i < array.length; i++){
    var subarray = array[i];
    for(var j = 0; j < subarray.length; j++) {
      results[j][i] = subarray[j];
    }
  }
  
  return results;
}
//
// console.log( transpose([[0, 1, 2],[3, 4, 5],[6, 7, 8]] ));

function myEach(arr, operation) {
  for(var i = 0; i < arr.length; i++){
    operation(arr[i]);
  }
}

function myMap (arr, operation) {
  var results = [];
  myEach(arr, function(num){
    results.push(operation(num));
  });
  return results;
}
// console.log(myMap([1,2,3,4], function(num,value){ return num * value;}));

function myInject(arr, operation) {
  var startValue = arr[0];
  myEach(arr.slice(1, arr.length), function(num) {
   startValue = operation(num,startValue)
  });
  return startValue;
}

// console.log(myInject([1,4,5,6], function (num, val) { return num + val; }));

function bubbleSort(arr) {  
  var unsorted = true;
  do {
    unsorted = false;
    var i = 0;
    while(i < arr.length){
      if (arr[i] > arr[i+1]){
        swap(arr, i);
        unsorted = true;
        i = 0;
      } 
      i++;
    }
  } while (unsorted === true);
  return arr;
}

function swap(arr, i) {
  var t1 = arr[i];
  var t2 = arr[i + 1];
  
  arr[i] = t2;
  arr[i+1] = t1;
  return arr;
}

// console.log(swap([4,3,9], 0))
// console.log(bubbleSort([5,4,3,2,1]));
function subStrings (string) {
  substrings = [];
  for(var i = 0; i < string.length; i++){
    for(var j = i + 1; j < string.length + 1; j++){
      substrings.push(string.slice(i, j));
    }
  }
  return substrings;
}

// console.log(subStrings("Cats"));

function fibonacci(n){
  result = [];
  if (n === 0) { 
    return [];
  } 
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0,1];
  } 
  prev = fibonacci(n-1);
  
  // return concat(n+prev, prev);
  var new_element = prev[(prev.length - 1)] + prev[(prev.length - 2)];
  
  // return prev.concat([prev.push(new_element)]);
  console.log(prev)
  return prev.concat(new_element)
}

// console.log(fibonacci(10));
 
function binarySearch(arr, item) {
  var i = Math.floor((arr.length) / 2);
  
  if (arr.length === 0) { 
    // console.log(arr[i] + '; i = ' + i)
    return "Item not found"; 
  }
  if (arr[i] === item){
    return i;
  } else if (arr[i] > item) {
    var subArray = arr.slice(0,i);
    return binarySearch(subArray, item);
  } else {
    var subArray = arr.slice(i,arr.length);
    console.log(i)
    return binarySearch(subArray, item) + i;
  }
}

// console.log(binarySearch([0,0,0,0,0,0,1,2,6,9,15,16,27,30,31,32], 32));

function makeChange (amt, coins){
  // var coins = coins.sort();

  if (amt === 0){
    return bank;
  }
  if (coins.length === 1){    
    var results = [];
    for (var i = 1; i <= amt; i++ ) {
      results = results.concat([1]);
      console.log(results)
    }
    return results;
  }
  if (coins[0] < amt) {
    amt = amt - coins[0];
    results = results.concat(makeChange(amt, coins)); 
    return results;
    // makeChange(amt, coins);
  } else {
    coins.shift;
    makeChange(amt,coins);
  }
}

console.log(makeChange(7,[1,2]))
// console.log(makeChange(20,[1,4,5,10]));

// function makeChange(amt, coins) {
//   var coins = coins.sort!;
//   // assume there is a penny
//   // guard statement
//   if (coins.length === 1) {
//     var results = []
//     for (var i = 1; i <= amt; i++ ) {
//       results = concat(results, [1])
//     }
//     return results;
//   }
//
//   //if your biggest coin is smaller than the amount due, concat a coin of that type with results
//   if (coins[0] < amt) {
//     results = concat(results, coins[0]);
//     return results = makeChange((amt-coins[0], coins))
//     //amount to make change of has been reduced by coins[0]
//
//   }
//   else
//   //if that coin is too big, shift that coin off the front of the coins array
//   {
//     coins.shift;
//     makeChange(amt, coins);
//   }
//
// }