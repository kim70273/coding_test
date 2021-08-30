function getResult(arr, char){
    if(char==="*") {
        for(let i=0;i<arr.length;i++){
            if(arr[i]==="*"){
                
                let pre;
                for(let j=i-1;j>=0;j--){
                    if(j===0) {
                        pre=0;
                        break;
                    }
                    
                    if(isNaN(arr[j-1])){
                        if(arr[j-1]==="!"){
                            pre=j-1;
                            arr[j-1]="-";
                        }
                        else {
                            pre=j;
                        }
                        break;
                    }
                }
                let next;
                for(let j=i+1;j<arr.length;j++){
                    if(j===arr.length-1) {
                        next=arr.length-1;
                        break;
                    }
                    
                    if(isNaN(arr[j+1])){
                        next=j;
                        break;
                    }
                }
                if(arr[i+1]==="!")arr[i+1]="-";
                const result = (parseInt(arr.slice(pre,i).join("")))*(parseInt(arr.slice(i+1,next+1).join("")));
                let str = result+"";
                if(result<0) str = "!"+Math.abs(result)+""
                
                arr.splice(pre,next+1-pre,...str);
                i=pre;
            }
        }
    } else if(char === '+') {
        for(let i=0;i<arr.length;i++){
            if(arr[i]==="+"){
                
                let pre;
                for(let j=i-1;j>=0;j--){
                    if(j===0) {
                        pre=0;
                        break;
                    }
                    
                    if(isNaN(arr[j-1])){
                        if(arr[j-1]==="!"){
                            pre=j-1;
                            arr[j-1]="-";
                        }
                        else {
                            pre=j;
                        }
                        break;
                    }
                }
                let next;
                for(let j=i+1;j<arr.length;j++){
                    if(j===arr.length-1) {
                        next=arr.length-1;
                        break;
                    }
                    
                    if(isNaN(arr[j+1])){
                        next=j;
                        break;
                    }
                }
                if(arr[i+1]==="!")arr[i+1]="-";
                const result = (parseInt(arr.slice(pre,i).join("")))+(parseInt(arr.slice(i+1,next+1).join("")));
                let str = result+"";
                if(result<0) str = "!"+Math.abs(result)+""
                arr.splice(pre,next+1-pre,...str);
                i=pre;
            }
        }
        
    } else if(char === '-') {
        for(let i=0;i<arr.length;i++){
            if(arr[i]==="-"){
                
                let pre;
                for(let j=i-1;j>=0;j--){
                    if(j===0) {
                        pre=0;
                        break;
                    }
                    
                    if(isNaN(arr[j-1])){
                        if(arr[j-1]==="!"){
                            pre=j-1;
                            arr[j-1]="-";
                        }
                        else {
                            pre=j;
                        }
                        break;
                    }
                }
                let next;
                for(let j=i+1;j<arr.length;j++){
                    if(j===arr.length-1) {
                        next=arr.length-1;
                        break;
                    }
                    
                    if(isNaN(arr[j+1])){
                        next=j;
                        break;
                    }
                }
                if(arr[i+1]==="!")arr[i+1]="-";
                const result = (parseInt(arr.slice(pre,i).join("")))-(parseInt(arr.slice(i+1,next+1).join("")));
                let str = result+"";
                if(result<0) str = "!"+Math.abs(result)+""
                arr.splice(pre,next+1-pre,...str);
                i=pre;
            }
        }
    }
}

function solution(expression) {
    let max = 0;
    //총 6가지경우 이므로 모든경우를 다 수행해 본다.
    let arr = [...expression];
    getResult(arr,"*");
    getResult(arr,"+");
    getResult(arr,"-");
    if(arr[0]==="!")arr[0]="-";
    let sum = Math.abs(arr.join(""));
    if(sum>max) max=sum;
    
    arr = [...expression];
    getResult(arr,"*");
    getResult(arr,"-");
    getResult(arr,"+");
    if(arr[0]==="!")arr[0]="-";
    sum = Math.abs(arr.join(""));
    if(sum>max) max=sum;
    
    arr = [...expression];
    getResult(arr,"+");
    getResult(arr,"*");
    getResult(arr,"-");
    if(arr[0]==="!")arr[0]="-";
    sum = Math.abs(arr.join(""));
    if(sum>max) max=sum;
    
    arr = [...expression];
    getResult(arr,"+");
    getResult(arr,"-");
    getResult(arr,"*");
    if(arr[0]==="!")arr[0]="-";
    sum = Math.abs(arr.join(""));
    if(sum>max) max=sum;
    
    arr = [...expression];
    getResult(arr,"-");
    getResult(arr,"+");
    getResult(arr,"*");
    if(arr[0]==="!")arr[0]="-";
    sum = Math.abs(arr.join(""));
    if(sum>max) max=sum;
    
    arr = [...expression];
    getResult(arr,"-");
    getResult(arr,"*");
    getResult(arr,"+");
    if(arr[0]==="!")arr[0]="-";
    sum = Math.abs(arr.join(""));
    if(sum>max) max=sum;
    
    return max;
}