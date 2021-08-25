let num = 26;
let count = 0 ;

//1. 5로 나누기
//2. 3으로 나누기
//3. 2로 나누기
//4. 1빼기

//네가지중에 하나씩 수행하여 수행 횟수를 최소로 하면서
//주어진 수를 1로 만들어야한다.
//27
// 26 25 5 1
//9 3 1
const array = [];

array.push([num,0]);
while(true){
    let pop = array.shift();
    let popNum = pop[0];
    let popCount = pop[1];

    if(popNum===1){
        console.log(popCount);
        break;
    }

    if(popNum % 5 === 0) array.push([popNum/5,popCount+1]);
    if(popNum % 3 === 0) array.push([popNum/3,popCount+1]);
    if(popNum % 2 === 0) array.push([popNum/2,popCount+1]);
    array.push([popNum-1,count+1])
}
