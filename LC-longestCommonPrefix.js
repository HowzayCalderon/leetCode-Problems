// Date Started: 03/09/2023

function findPrefix(strs){
    let comp = strs[0]
    for(let i = 0; i < strs.length; i++){
        if(!strs[i].startsWith(comp)){
            comp = comp.slice(0, -1)
        }
    }
    return comp
    }
let test = ['know', 'knife', 'knot']
console.log(findPrefix(test))


// Although not finished, this solution has taught me to use variables to store the first element of an array and then iterate through the rest of the array instead of using two 'for' loops (in certain situations this works, not all)