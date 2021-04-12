//공부한 코드를 사용해보는 공간.

const numbers = "123";
const num = [...numbers];
//이런식으로 쓰면 문자열이 하나씩 각각 배열로 들어감.

console.log(num);

const combine = ['32', '42', '21'];
let result = [];
result.push(combine);
console.log(...result);//각 요소를 각각 push하려면 result가 아닌 ...result를 써야 한다.