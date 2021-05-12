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
    const len = tickets.length;
    let find = false;
    const queue = [];
    const ticketsUse = tickets.map((ticket) =>{
        ticket.push(false);
        return ticket;
    })
    
    function dfs(start,queue,count){
        const startList = ticketsUse.filter((ticket) => ticket[0]===start);
        
        if(count===len){
            answer=queue.slice();
            find=true;
            startList.forEach((ticket) => {
                if(ticket[2]===false)answer.push(ticket[1]);
            })
            return;
        }//조건에 맞게 항공권을 모두 소비했을때.
        
        startList.sort((a,b) => a[1]<b[1] ? -1 : a[1] > b[1] ? 1:0);
        
        for(let i=0;i<startList.length;i++){
            const index = ticketsUse.indexOf(startList[i]);
            if(startList[i][2]===false){
                ticketsUse[index][2]=true;
                queue.push(startList[i][1]);
                dfs(startList[i][1],queue, count+1);
                queue.pop();
                ticketsUse[index][2]=false;
                if(find)break;
            }
        }
    }
    
    queue.push("ICN")
    dfs("ICN", queue,1);
    
    return answer;
}