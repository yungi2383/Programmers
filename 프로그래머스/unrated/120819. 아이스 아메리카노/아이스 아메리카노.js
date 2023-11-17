function solution(money) {
    let array = []
    let result = Math.floor(money/5500)
    array.push(result)
    array.push(money-(result*5500))
    
    return array;
}