// 문제 설명
// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers는 길이 1 이상 7 이하인 문자열입니다.
// numbers는 0~9까지 숫자만으로 이루어져 있습니다.
// "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

//순열을 구하는게 핵심!

function solution(numbers) {
    var answer = 0;
    const num = [...numbers];
    const arrSet = new Set();

    const getPermutation = (numArr, selectNum) => {
        if(selectNum === 1) return numArr.map((num) => num);
        const result = [];
        numArr.forEach((num,index, arr)=>{
            const fixNum = num;
            const restArr = arr.filter((val,i)=>i!==index);
            const restArrPermu = getPermutation(restArr, selectNum-1);
            const combine = restArrPermu.map((v)=>fixNum+v);
            result.push(...combine);
        });
        return result;
    }
    
    const checkPrime = (...numArr) => {
        numArr.forEach((num) => {
            num=num*1;
            if(num === 1 || num===0) return;
            if(num === 2) {
                arrSet.add(num);
                return;
            }
            for(let i=2; i<num; i++){
                if(num%i === 0) return;
            }
            arrSet.add(num);
            //2부터 자기자신 전까지 나누어 떨어지는게 없다면 소수
        });
    }
    
    for(let i=1;i<=num.length; i++){
        const permuArr = getPermutation(num,i);
        console.log(permuArr);
        //순열로된 배열을 찾고.

        
        permuArr.forEach((arr) => {
            checkPrime(arr);
        })
        //순열로된 각 배열을 체크.
    }
    answer = arrSet.size;//중복되지 않는 소수의 수를 체크.
    console.log(answer);
    return answer;
}

solution("17");