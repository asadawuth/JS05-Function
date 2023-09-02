

/*function num(a=0,b="0",c="0",d="0") {
    if ( num() === false ){
        return undefined
    }
    return Math.max(a,b,c,d)
}*/

let a = 0;
let b = 0;
let c = 0;
let d = 0;
function num(a,b,c,d) {
    return Math.max(a,b,c,d)
}

/////////////////////////////////////////

const num = (a=0,b=0,c=0,d=0) => {
    if (num === 0) {
    return undefined    
    }
    return    Math.max(a,b,c,d)
}