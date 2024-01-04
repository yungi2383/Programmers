function solution(my_string, letter) {
    for (i=0 ; i<my_string.length ; i++) {
    if (my_string.indexOf(letter) >= 0) {
        my_string = my_string.replace(letter,'')
        } else break
        
    }
    return my_string
}