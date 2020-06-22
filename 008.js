function foreverAdd(arr){
    let result = 0;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== '='){
            result += arr[i];
        }else{
            return result;
        }
    }
}

console.log(foreverAdd([2,3,4,5,6,7,8,9,10,'=']));