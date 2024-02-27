function solution(n) {
    let cnt = n
    let a = 1
    while ( cnt >= 3 ) {
        cnt = (cnt-cnt%3)/3
        a *= 3
    }
    let answer = 0
    while( n >= 3) {
        answer += (n%3)*a
        n = (n-n%3)/3
        a /= 3
    }
    return answer + n;
}