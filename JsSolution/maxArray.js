function maxArr(arr){
    let x=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>x){
            x=arr[i];
        }
    }
    return x;
}
