const array = [1, 3, 1, 5];
//인접한 식량창고는 공격불가능
//첫번째 식량창고를 공격한다면 3번째, 4번째 중에 골라서 공격가능하다

//bottom-up 방식의 다이나믹 프로그래밍 

let a_2 = array[0]; // 현재 위치에사 2만큼 떨어진 것까지의 최적 값
let a_1 = Math.max(array[0],array[1]); //현재위치에서 1만큼 떨어진 것까지의 최적 값

let current;

for(let i=2;i<array.length;i++){
    if(array[i]+a_2 > a_1){
        current=array[i]+a_2;
        let temp = a_1;
        a_1=array[i]+a_2;
        a_2 = temp
    } else {
        current = a_1;
        a_2=a_1;
    }
}

console.log(current);


