// 문제 설명
// 짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 
// 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 
// 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 
// 아닐 경우 0을 리턴해주면 됩니다.

// 예를 들어, 문자열 S = baabaa 라면
// b aa baa → bb aa → aa →
// 의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

// 제한사항
// 문자열의 길이 : 1,000,000이하의 자연수
// 문자열은 모두 소문자로 이루어져 있습니다.

// function solution(s)
// {
//     var answer = 0;
//     const array = s.split("");

//     for(let i=0;i<array.length-1;i++){
//         if(array[i]===array[i+1]){
//             array.splice(i,2);
//             i-=2;
//         }
//     }
//     if(array.length===0)answer=1;

//     return answer;
// }

// function solution(s)
// {
//     var answer = 0;

//     for(let i=0;i<s.length-1;i++){
//         if(s[i]===s[i+1]){
//             s=s.replace(s[i]+s[i],'');
//             i-=2;
//         }
//     }
//     if(s.length===0)answer=1;

//     return answer;
// }

function solution(s)
{
    if(s.length%2!==0) return 0;//모두 삭제하는것이 불가능.
    var answer = [];//입력을 받을 곳
    const array = [...s];

    for(let i=0;i<array.length;i++){
        if(answer[answer.length-1]===array[i]){
            answer.pop();
            continue;
        }
        
        answer.push(array[i]);
        
        if(answer.length > array.length-i-1) return 0;
        //지워야할 입력이 더 많다면 다 지우지 못한다.
    }
    if(answer.length===0) return 1;//지워야할 입력이 다 지워 짐
    else return 0;
}