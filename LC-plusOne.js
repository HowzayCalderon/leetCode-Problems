

function plusOne(digits){
    let answer = 0
    answer = Number(digits.join(''))
    answer ++
    console.log(answer.toString().split(''))
}

let test = [1,2,3,4]
plusOne(test)