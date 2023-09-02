function sum(...numbers) {
    let s = 1;
    for (let n of numbers) {
        s *= n;
    }
    return s;
}
sum(1,2,3,4,5) // 120
///////////////////////////////////

function sum(...numbers) {
    let s = 1;
    for (let n of numbers) {
        if (n <= 0) {
            continue
        }
        s *= n;
    }
    return s;
}

sum(1,2,3,4,0) //24