function removeDublicate(str){
    arry=str.split(' ');
    newarr=[];
    ans=""
    for(i=0;i<arry.length;i++){
        if(newarr.includes(arry[i])==false){
            newarr.push(arry[i])
            ans+=arry[i]+' ';
        }
    }
    return ans;
}