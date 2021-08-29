function solution(places) {
    var answer = [];
    for(let i=0;i<places.length;i++){
        const arr = [];
        for(let j=0;j<places[i].length;j++){
            arr.push([...places[i][j]]);
        }
    
        //같은 행, 같은 열의 경우 2칸 차이까지 위반// 중간에 X있으면 가능
        //대각선의 경우 가로한칸, 세로한간 대각선까지 위반 //대각선으로 X있으면 가능
        
        let d=0;
        for(let j=0;j<arr.length;j++){
            for(let k=0;k<arr[j].length;k++){
                if(arr[j][k]=='P'){
                    //같은 행에서 길이가 2이하인경우
                    let nj = j-1;
                    if(nj>=0&&arr[nj][k]==='P'){
                        d=1; 
                        break;
                    }
                    nj = j-2;
                    if(nj>=0&&arr[nj][k]==='P' && arr[nj+1][k] !== 'X'){
                        d=1; 
                        break;
                    }
                    nj = j+1;
                    if(nj<5&&arr[nj][k]==='P'){
                        d=1; 
                        break;
                    }
                    nj = j+2;
                    if(nj<5&&arr[nj][k]==='P' && arr[nj-1][k] !== 'X'){
                        d=1; 
                        break;
                    }
                    
                    //같은열에서 길이가 2이하인 경우
                    let nk = k-1;
                    if(nk>=0&&arr[j][nk]==='P'){
                        d=1; 
                        break;
                    }
                    nk=k-2;
                    if(nk>=0&&arr[j][nk]==='P' && arr[j][nk+1] !=='X'){
                        d=1; 
                        break;
                    }
                    nk=k+1;
                    if(nk<5&&arr[j][nk]==='P'){
                        d=1; 
                        break;
                    }
                    nk=k+2;
                    if(nk<5&&arr[j][nk]==='P' && arr[j][nk-1] !=='X'){
                        d=1; 
                        break;
                    }
                    
                    //대각선에서 길이가 2이하인경우
                    nj=j+1;
                    nk=k+1;
                    if(nj<5&&nk<5&&arr[nj][nk]==='P' && (arr[j][nk] !=='X' || arr[nj][k] !=='X')){
                        d=1; 
                        break;
                    }
                    
                    nj=j+1;
                    nk=k-1;
                    if(nj<5&&nk>=0&&arr[nj][nk]==='P' && (arr[j][nk] !=='X' || arr[nj][k] !=='X')){
                        d=1; 
                        break;
                    }
                    
                    nj=j-1;
                    nk=k+1;
                    if(nj>=0&&nk<5&&arr[nj][nk]==='P' && (arr[j][nk] !=='X' || arr[nj][k] !=='X')){
                        d=1; 
                        break;
                    }
                    
                    nj=j-1;
                    nk=k-1;
                    if(nj>=0&&nk>=0&&arr[nj][nk]==='P' && (arr[j][nk] !=='X' || arr[nj][k] !=='X')){
                        d=1; 
                        break;
                    }
                    
                }
            }
            if(d!==0) break;
        }
        if(d!==0)answer.push(0);
        else answer.push(1);
        
    }
    return answer;
}