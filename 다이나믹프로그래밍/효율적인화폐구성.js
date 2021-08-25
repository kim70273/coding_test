//총 n개 만큼 화폐의 종류가 있는데
//이 화폐들을 사용해서 m원을 만들어야한다.
//화폐를 가장 적게 쓰면 몇개를 써야하는가

// const money = [3, 5, 7];
// let m = 4;

// let count =0

// for(let i=money.length-1;i>=0;i--){
//     count=count+parseInt(m/money[i]);
//     m=m-(parseInt(m/money[i])*money[i]);
//     if(m===0) break;
// }
// console.log(m===0 ? count:-1);

//0부터 시작해서 구하려는 화폐까지 
//하나의 화폐씩 돌아가면서 테이블을 구성하는 다이나믹 프로그래밍 방법도있음
//효율적인지 모르겠음....