function solution(a, b, n) {
    
    let answer = 0;
    
    while (n>=a) {
        let cola = Math.floor(n/a)
        n = n - cola*a + cola*b
        answer += cola*b
        console.log(n*b)
    }
    return answer;
}
