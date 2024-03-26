// Write your solution here!
const cats =[ "Milo" ,"Otis" , "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
}
destructivelyAppendCat("tulley")
console.log(cats);

function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    const newCats =[...cats,name]
    return newCats
}
function prependCat(name){
    const prepCat =[name,...cats]
    return prepCat
}
function removeLastCat(name){
    const rmvCat =cats.slice(0,-1)
    return rmvCat
}
function removeFirstCat(name){
    const rmvFirstCat=cats.slice(1)
    return rmvFirstCat
}
