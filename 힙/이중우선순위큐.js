// 문제 설명
// 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.
// ------------------------------------------
// 명령어	   수신 탑(높이)
// I 숫자	 큐에 주어진 숫자를 삽입합니다.
// D 1	    큐에서 최댓값을 삭제합니다.
// D -1	    큐에서 최솟값을 삭제합니다.
// ------------------------------------------
// 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 
// 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

// 제한사항
// operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
// operations의 원소는 큐가 수행할 연산을 나타냅니다.
// 원소는 “명령어 데이터” 형식으로 주어집니다.- 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
// 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.

function solution(operations) {
    var answer = [];
    //이중 우선 순위??
    //한쪽은 최대힙, 한쪽은 최소힙으로 구성?
    //만약 한쪽이 다 삭제 되면 우선순위큐에 남는것이 없는 것.
    const maxHeap = new Array(1);
    const minHeap = new Array(1);
    
    for(let i = 0;i<operations.length;i++){
        const cmt = operations[i].split(" ");
        
        if(cmt[0] === 'D'){//삭제연산
            if(cmt[1] === '1'){
                if(maxHeap.length<=1)break;
                //최대값 삭제
                let i = 1;
                maxHeap[1] = maxHeap.pop();
                while(true){
                    if(maxHeap[i]<maxHeap[i*2] || maxHeap[i]<maxHeap[i*2+1]){
                        if(maxHeap[i*2]>maxHeap[i*2+1]){
                            const temp = maxHeap[i];
                            maxHeap[i] = maxHeap[i*2];
                            maxHeap[i*2] = temp;
                            i = i*2;
                        }else{
                            const temp = maxHeap[i];
                            maxHeap[i] = maxHeap[i*2+1];
                            maxHeap[i*2+1] = temp;
                            i = i*2+1;
                        }
                    }else{
                        break;
                    }
                }
            }else{
                if(minHeap.length<=1)break;
                minHeap.pop();//최소값 삭제.
                let i = 1;
                minHeap[1] = minHeap.pop();
                while(true){
                    if(minHeap[i]>minHeap[i*2] || minHeap[i]>minHeap[i*2+1]){
                        if(minHeap[i*2]<minHeap[i*2+1]){
                            const temp = minHeap[i];
                            minHeap[i] = minHeap[i*2];
                            minHeap[i*2] = temp;
                            i = i*2;
                        }else{
                            const temp = minHeap[i];
                            minHeap[i] = minHeap[i*2+1];
                            minHeap[i*2+1] = temp;
                            i = i*2+1;
                        }
                    }else{
                        break;
                    }
            }
        }
        }else{//삽입연산
            let n = maxHeap.length;
            let m = minHeap.length;
            maxHeap[n] = cmt[1]*1;//최대힙
            minHeap[m] = cmt[1]*1;//최소힙
            
            while(n>1){
                if(maxHeap[n]>maxHeap[Math.floor(n/2)]){
                    const temp = maxHeap[n];
                    maxHeap[n] = maxHeap[Math.floor(n/2)];
                    maxHeap[Math.floor(n/2)] = temp;
                    n = Math.floor(n/2);
                }else{
                    break;
                }
            }
            
            while(m>1){
                if(minHeap[m]>minHeap[Math.floor(m/2)]){
                    const temp = minHeap[m];
                    minHeap[m] = minHeap[Math.floor(m/2)];
                    minHeap[Math.floor(m/2)] = temp;
                    m = Math.floor(m/2);
                }else{
                    break;
                }
            }
            
        }
    }
    
    
    if(maxHeap.length>1 && minHeap.length>1){
        answer.push(maxHeap[1], minHeap[1]);
    }else{
        answer.push(0, 0);
    }
    return answer;
}