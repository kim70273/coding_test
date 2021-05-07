// 문제 설명
// 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 
// begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
// 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
// 2. words에 있는 단어로만 변환할 수 있습니다.
// 예를 들어 begin이 "hit", target가 "cog", words가 
// ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 
// 같이 4단계를 거쳐 변환할 수 있습니다.
// 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 
// begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 각 단어는 알파벳 소문자로만 이루어져 있습니다.
// 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
// words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
// begin과 target은 같지 않습니다.
// 변환할 수 없는 경우에는 0를 return 합니다.

function solution(begin, target, words) {
    var answer = 0;
    //begin부터 시작해서 단어 하나 차이나는것에 대해서 
    //큐에넣음. 또 단어 하나씩 빼서 단어 하나 차이나는것 큐에 넣음
    // 큐에서 뺀 단어가 target 단어 일때 까지 반복.(BFS를 활용한 문제)
    if(!words.includes(target)){
        answer = 0;
    }
    else{
        let count = 0
        const queue = [];
        queue.push([begin,count]);//[처음단어, 0]
        while(queue.length>0){
            const word = queue.shift();//큐 맨앞을 꺼냄.
            if(word[0]===target){
                answer=word[1];
                break;
            }
            count=word[1]+1;
            for(let i=0;i<words.length;i++){
                let gap = 0;
                for(let j=0;j<words[i].length;j++){
                    if(word[0][j]!==words[i][j])gap++;
                }
                if(gap===1) queue.push([words[i],count])
            }
        }
    }
    return answer;
}