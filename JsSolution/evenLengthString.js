function evenString(str){
    arr=str.split(' ');
    return arr.filter((x)=>x.length%2==0);
}