/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    let newArr = [];
    let names = arr.reduce(function(sum, individualValue){
        if (newArr.length === 0){
            return newArr.push(sum[key], individualValue[key]);
        } else {
            return newArr.push(individualValue[key]);
        }
    })
    return newArr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    let arr = Array.from(str.toLowerCase());
    let vowels = 'aeiou';
    let obj = {};
    let count = arr.reduce(function(sum, nextValue){
        if(Object.keys(obj).length===0 && vowels.indexOf(sum)>=0){
            return obj[sum]=1 
        } else if (Object.keys(obj).indexOf(nextValue)>=0){
            return obj[nextValue]+=1;
        } else if(vowels.indexOf(nextValue)>=0){
            return obj[nextValue]=1;
        }
    });
    return obj;
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    let keyValue = arr.reduce(function(sum, individualValue){
        if (individualValue){
            return individualValue[key]=value
        } else if (sum===undefined){
            return individualValue[key]=value;
        }
    },arr[0]);
    return keyValue;
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    arr.reduce(function(sum, nextValue){
        if(arr1.length===0 && arr2.length===1 && callback(nextValue)){
            return arr1.push(nextValue);
        } else if (arr1.length===0 && arr2.length===0 && callback(sum)===false){
            return arr2.push(sum);
        } else if (callback(nextValue)) {
            return arr1.push(nextValue);
        } else if (callback(sum)===false){
            return arr2.push(nextValue);
        } else {
            return arr2.push(nextValue);
        }
    }, arr[1]);
    arr3.push(arr1, arr2);
    return arr3;
}
