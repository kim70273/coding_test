function solution(brown, yellow) {
    var answer = [];
    
    //brown 갯수에 맞춰서 yellow가 맞는지 확인.
    let brownHalf_h = 1;
    let brownHalf_w = (brown/2)-3;
    
    while(true){
        if(brownHalf_w*brownHalf_h===yellow){
            answer.push(brownHalf_w+2);
            answer.push(brownHalf_h+2);
            break;
        }
        brownHalf_h++;
        brownHalf_w--;
    }
    return answer;
}