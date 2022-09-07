function myEach(collection, callback){
    for (let item in collection){
        callback(collection[item])
    }
    return collection
}
function myMap(collection, callback){
    let newCollection = Object.values(collection).map(item=>callback(item))
    return newCollection
}
function myReduce(collection,callback,acc){
    let arr = [...collection]
    if (Array.isArray(collection) === false) {
      arr = Object.values(collection)
    }
    let sum = acc
    if(typeof acc !== "number"){
      sum = arr[0]
      for(let i = 1; i < arr.length; i++) {
        sum = callback(sum, arr[i], arr)
      }
    } else { 
      for(let i = 0; i < arr.length; i++) {
        sum = callback(sum, arr[i], arr)
      }
    }
    return sum
}

function myFind(collection,predicate){
    let arr  = [...collection]
    console.log(arr)
    if (Array.isArray(collection)===false){
        arr = Object.values(collection)
    }
    console.log(arr)
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
        if (predicate(arr[i])){
            return arr[i]
        }
    }
    return undefined

}

function myFilter(collection,predicate){
    //if collection is an array, make a copy of it
    let arr = [...collection]
    //if collection is not an array, create an array from it's values
    if(Array.isArray(collection)===false){
        arr = Object.values(collection)
    }
    let total = []
    for(let i=0;i<arr.length;i++){
        if(predicate(arr[i])){
            total.push(arr[i])
        }
    }
    return total;
}
function mySize(collection){
    let arr = [...collection]
    if(Array.isArray(collection)===false){
        arr = Object.values(collection)
    }
    return arr.length
}
function myFirst(array, n){
    if(typeof(n) !== "number"){
        return array[0]
    }
    else{
        return array.slice(0,n)
    }
}
function myLast(array,n){
   if(n){
    return(array.slice(array.length-n))
   }
   else{
    return(array[array.length-1])
   }
}
function myKeys(object){
    return(Object.keys(object))
}
function myValues(object){
    return(Object.values(object))
}