const arr = [];
arr.push([1, 3, 3, 2]);
arr.push([2, 1, 4, 1]);
arr.push([0, 6, 4, 7]);


const d = new Array(4);
//d[0] 0열에서 얻을 수 있는 최대 금광 수
//0열 부터 마지막 열까지 늘려간다.

for(let i=1;i<arr[0].length;i++){
    for(let j=0; j<arr.length; j++){
        if(j===0){
            arr[j][i] = arr[j][i]+Math.max(arr[0][i-1],arr[1][i-1]);
        } else if(j===arr.length-1){
            arr[j][i] = arr[j][i]+ Math.max(arr[arr.length-1][i-1],arr[arr.length-2][i-1]);
        }
        else arr[j][i]=arr[j][i]+ Math.max(arr[j][i-1],arr[j-1][i-1],arr[j+1][i-1]);
    }
}

let max=0;

for(let i=0;i<arr.length;i++){
    if(arr[i][arr[0].length-1]>max)max=arr[i][arr[0].length-1];
}
console.log(max);
