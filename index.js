//  Check to see if a string has the same amount of 'x's and 'o's. 
//  The method must return a boolean and be case insensitive. 
//  The string can contain any char.

function XO(str) {
    x = 0
    o = 0
    string = str.toLowerCase().split('')
    string.forEach(letter => {
        if (letter === 'x') {
            x += 1
        } else if (letter === 'o') {
            o += 1
        } else {
            null
        }
    })
    return x === o ? true : false
}

console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));
console.log(XO("ooomXXX"));
console.log(XO("oXoXoXm"));
console.log(XO("ooxoxm"));
console.log(XO("xxooom"));