// 문제 설명
// 주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.
// 항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 
// solution 함수를 작성해주세요.

// 제한사항
// 모든 공항은 알파벳 대문자 3글자로 이루어집니다.
// 주어진 공항 수는 3개 이상 10,000개 이하입니다.
// tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
// 주어진 항공권은 모두 사용해야 합니다.
// 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
// 모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.
function solution(tickets) {
    var answer = [];
    
    function dfs(start){
        const temp = tickets.filter((ticket) => ticket[0]===start);
        temp.sort((a,b) => a[1]<b[1] ? -1 : a[1] > b[1] ? 1:0);
        for(let i=0;i<temp.length;i++){
            const t = temp[i][1]
            if(t!==false){
                temp[i][1]=false;
                answer.push(t);
                dfs(t);
            }
        }
    }
    answer.push("ICN");
    dfs("ICN");
    //DFS를 이용
    //출발점과 [0]번원소가 같은 원소를 [1]번 원소 기준으로 오름차순 정렬
    //원소를 돌면서 쓰지 않은 티켓이라면 dfs 수행
    //쓴티켓은 [1]번 원소를 true로 바꿈
    return answer;
}