function solution(n) {
    let answer = 0;
    array =  n.toString(10).split('')
    for (a of array) {
        answer += Number(a)
    }
    return answer
}