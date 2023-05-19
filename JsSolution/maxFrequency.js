function maxFreq(str) {
    var obj={};
    for(let i=0;i<str.length;i++){
        var temp = str.charAt(i);
        if (obj[temp]==undefined){
            obj[temp]=1;
        }else{
            obj[temp]+=1;
        }

    }
    loc=-Infinity;
    let key;
    for(let i=0;i<str.length;i++){
        var temp = str.charAt(i);
        if (obj[temp]>loc){
            loc=obj[temp];
            key=temp;
        }

    }
    
    return [key,loc];
}
