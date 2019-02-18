// function sum(a, b) {
//     return a + b;
//   }
//   module.exports = sum;


function paddingLeft(string, finalValue, padding) {
    if (finalValue <= string.length) {
        return string
    } else {
        const addpadding = finalValue - string.length;
        for(let i=0; (i<addpadding && string.length<finalValue ); i++){
            string = padding + string;
        }
        return string
    }
}

module.exports = paddingLeft;



