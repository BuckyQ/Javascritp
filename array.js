//[1,2,3,4,5,6,7,8,[9,10,11,[12,13,14]]]

function flatten(array, result = []){
    for (const i of array){
        if(Array.isArray(i)){
            flatten(i,result);
        }else{
            result.push(i);
        }
    }
    return result
}


