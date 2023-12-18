document.write("11.Sum of squares of a numeric vector"+"<br>");
document.write(".............................................."+"<br>");
function test11(arr){
    var sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+Math.pow(arr[i],2);
    }
    return sum;
}
document.write("[0,1,2,3,4] : "+test11([0,1,2,3,4])+"<br><br>");