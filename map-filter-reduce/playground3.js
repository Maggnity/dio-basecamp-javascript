function filtraPares(arr){
    return arr.filter(callback)
}

function callback (item){
    return item %2===0;
}

const meuArray = [1,23,26,38,45,50];

console.log(filtraPares(meuArray));