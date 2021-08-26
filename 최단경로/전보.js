//도시 C에서 보낸 메시지를 받는 도시의 수 와 총 걸리는 시간은??
// 다익스트라 알고리즘 최소힙을 통해 구현 해보기 

const arr = [[Infinity, Infinity, Infinity, Infinity],
            [Infinity, 0, 4, 2],
            [Infinity, Infinity, 0, Infinity],
            [Infinity, Infinity, Infinity, 0]];
            //0행과 0열은 안쓰고 1번 도시부터 3번 도시까지를 표현

const min_heap = [[0,0]];

const distance = Array.from({length:arr.length},() => Infinity);

const push_min_heap = (element) => {
    min_heap.push(element);

    let target = min_heap.length-1;
            while(true){
                if(target === 1) break;
                if(min_heap[target][1]>min_heap[parseInt(target/2)][1]) break;
                let temp = min_heap[target];
                min_heap[target] = min_heap[parseInt(target/2)];
                min_heap[parseInt(target/2)]=temp;
                target=parseInt(target/2);
                //부모 노드보다 값이 클때 또는 루트노드까지 가면 멈춘다.
            }
}

const pop_min_heap = () => {//마지막 노드를 맨위로 올리고, 밑에 노드들과 비교하면서 아래로.
    let pop = min_heap.pop();
    
        if(min_heap.length>=2){
            let target = 1;
            min_heap[target] = pop;

            while(min_heap.length>=3){
                let min = target;
                if(min_heap.length===3){
                    min=2;
                }else{
                min_heap[target*2][1]>min_heap[target*2+1][1] ? min=target*2+1 : min=target*2
                    }

                if(min_heap[target][1]>min_heap[min][1]){
                    let temp2 = min_heap[target];
                    min_heap[target] = min_heap[min];
                    min_heap[min] = temp2;  
                    target = min;
                } else {
                    break;
                }
            }

        }
}


const dijkstra = (start) => {
    distance[start] = 0;

    for(let i=1; i<arr.length;i ++){
        if(arr[start][i] !==Infinity && i!==start){//min heap에 넣고 삽입 과정
            //i로 가는 비용이 얼마인지 배열로 넣음
            push_min_heap([i,arr[start][i]]);
        }
    }
    
    while(min_heap.length>=2){
        //꺼내고 나면 맨 마지막 원소를 루트로 올린다(최소힙의 삭제과정)
        
        let temp  = min_heap[1];
        pop_min_heap();

        //min_heap에서 뺀 첫번째 원소가 temp [몇번 원소까지, 거리]가 담겨있음
        if(distance[temp[0]]<temp[1]) {
            continue;
        }
        //이미 방문했던 원소는 스킵할 수 있게함

        for(let i=1;i<arr.length;i++){
            const cost = temp[1] + arr[temp[0]][i]
            if(cost<distance[i]){
               distance[i]=cost;
               //i까지 가는 비용 갱신 [i, cost]

               push_min_heap([i,cost]);

            }
        }

    }

     

     

   
    
}

dijkstra(1);
console.log(distance);
