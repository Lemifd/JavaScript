
function uncommon(str1,str2) {
    arr1=str1.split(' ');
    arr2=str2.split(' ');
    let ans=[],obj1={};
    arr1.map((x,index)=>obj1[x]=index);
    console.log("obj1 "+obj1);
    for(let i=0;i<arr2.length;i++){
        console.log("checking with " + arr2[i]);
        if (obj1[arr2[i]]==undefined){
            ans.push(arr2[i]);

        }
    }
    return ans;
}