// 문제 설명
// n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때, 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return 하도록 solution을 
// 완성하세요.
// 다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 봅니다. 예를 들어 A 섬과 B 섬 사이에 다리가 있고, B 섬과 C 섬 사이에 다리가 있으면 A 섬과 C 섬은 
// 서로 통행 가능합니다.

// 제한사항
// 섬의 개수 n은 1 이상 100 이하입니다.
// costs의 길이는 ((n-1) * n) / 2이하입니다.
// 임의의 i에 대해, costs[i][0] 와 costs[i] [1]에는 다리가 연결되는 두 섬의 번호가 들어있고, costs[i] [2]에는 이 두 섬을 연결하는 다리를 건설할 때 
// 드는 비용입니다.
// 같은 연결은 두 번 주어지지 않습니다. 또한 순서가 바뀌더라도 같은 연결로 봅니다. 즉 0과 1 사이를 연결하는 비용이 주어졌을 때, 1과 0의 비용이 주어지지 않습니다.
// 모든 섬 사이의 다리 건설 비용이 주어지지 않습니다. 이 경우, 두 섬 사이의 건설이 불가능한 것으로 봅니다.
// 연결할 수 없는 섬은 주어지지 않습니다.

//미완성
//노드로 연결해서 가장 적은 값을 택해나가면서 싸이클이 생기는지 확인?, 그리고 전체 섬이 연결 되면 종료
//다익스트라 알고리즘?

//아직 미완성
//한 정점에서 모든 정점 지나는 비용을 더하는게 아니라 
//그냥 쭉 통과할때의 최소비용.
const n = 4;
const costs = [[0,1,1],
               [0,2,2],
               [1,2,5],
               [1,3,1],
               [2,3,8]];
const distance_array = new Array(n);
const distance_min = new Array(n);
const check_array = new Array(n);
const INF = Infinity;

    for(let i = 0;i<n;i++){
        distance_array[i] = new Array(n);
        for(let j = 0;j<n;j++){
            if(i!==j)distance_array[i][j] = INF;
            else distance_array[i][j] = 0;
        }
    }
    for(let i = 0;i<costs.length;i++){
        const m = costs[i][0];
        const n = costs[i][1];
        const val = costs[i][2];
        distance_array[m][n] = val;
        distance_array[n][m] = val;
    }
    for(let i = 0;i<n;i++){
        distance_min[i] = distance_array[0][i];
        check_array[i] = false;
    }
    check_array[0] = true; //0번 정점에서 부터 시작.
    //다익스트라 알고리즘을 위한 초기화.
    for(let i = 1;i<n;i++){
        if(check_array[i]===true)continue;
        let min = distance_min[i];
        let j;
        let check_point=i;
        for(j = 1;j<n;j++){
            if(min>distance_min[j] && check_array[j]===false){
                min=distance_min[j];
                check_point=j;
            }
        }
        console.log(check_point);
        check_array[check_point]=true;
        for(let k = 0;k<n;k++){
            if(k!==check_point)
            distance_min[k] = Math.min(distance_min[k],distance_array[check_point][k]);
            //+distance_min[check_point] 여기서는 이것을뺌
        }
        i=1;
        if(check_array.every((check) => check===true))break;
    }

    console.log(distance_array);
    console.log(distance_min);
    console.log(check_array);



