function solution(n) {
    let answer = 0;
    let arr = [1,1]
    
    for (i=0 ; i<n-1 ; i++){
        arr[1] = arr[0]+arr[1]
        arr[0] = arr[1] - arr[0]
        if (arr[1] > 1234567) {
            arr[1] -= 1234567
        }
    }
    
    return arr[1]%1234567;
}



// function solution(n) {
// var answer = 0;
// let twoCount = Math.floor(n / 2)
// let oneCount = n % 2
// let length = n % 2 === 0 ? n / 2 : Math.floor(n / 2) + 1
// let num = 0;
// // 12 => twoCount = 6
// // (2, 2, 2, 2, 2, 2), 6C0
// // (2, 2, 2, 2, 2, 1, 1), 7C2
// // (2, 2, 2, 2, 1, 1, 1, 1), 8C4
// // (2, 2, 2, 1, 1, 1, 1, 1, 1), 9C6
// // (2, 2, 1, 1, 1, 1, 1, 1, 1, 1), 10C8
// // (2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1) 11C10
// // (1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1) 12C12

// // 13 => twoCount = 7
// // (2, 2, 2, 2, 2, 2, 1), 7C1 7
// // (2, 2, 2, 2, 2, 1, 1, 1), 8C3 6
// // (2, 2, 2, 2, 1, 1, 1, 1, 1, 1), 9C5 5
// // (2, 2, 2, 1, 1, 1, 1, 1, 1) 10C7 4
// // (2, 2, 1, 1, 1, 1, 1, 1, 1, 1), 11C9 3
// // (2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1) 12C11 2

// function factorial(num) {
// let answer = 1
// while(num !== 0) {
// answer *= num
// num--
//     if(answer >1234567) {
//         answer -= 1234567
//     }
// }
// return answer
// }

// function combination (length, oneCount){
// // n C m = n! / m! / (n-m)!
    
// return factorial(length) / factorial(oneCount) / factorial(length - oneCount)
// }

// while(length >= oneCount) {
// answer += combination(length, oneCount)
// length ++
// oneCount += 2
// twoCount -= 1
// }

// return (answer+num) % 1234567
// }