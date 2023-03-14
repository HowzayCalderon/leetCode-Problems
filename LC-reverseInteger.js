// Date Started: 03/13/23


var reverse = function(x) {
    let output = 0;
    let num = x.toString().split('').reverse();
    if(x < 0){
        num.pop()
        output = num.join('') * -1
    }

    else{
        output = num.join('')
    }
    return output
};