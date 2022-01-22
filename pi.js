let exponent = 10
let points = Math.pow(exponent, 20)



function random() {
    var randoms = [Math.random(), Math.random()]
    return randoms
}

let inside = 0
for (let i = 0; i < points; i++) {
    let l = Math.sqrt(Math.pow(random()[0], 2)+ Math.pow(random()[1], 2))
    if (l < 1) {
        inside++    
    }
    
}
let pi = (4 * inside) /points


console.log(pi)