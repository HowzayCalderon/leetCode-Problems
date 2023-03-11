// Date Started: 03/09/2023

function findPrefix(strs){
    let holder = []
    for(let i = 0; i< strs.length; i++){
        let array = strs[i].split('')
        for(let j = 0; j < strs.length; j++){
            if(strs[i] == strs[j]){
                j++
            }
            else{
                let other = strs[j].split('')
                for(let k = 0; k < other.length; k++){
                    if(array[k] == other[k]){
                        // holder.push(array[k])
                    }
                }
            }
        }
    }
    

    return holder
}
const test = ['knot','knife','know']

console.log(findPrefix(test))