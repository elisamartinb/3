// const sum = require('./index');


// describe('Sum App', () => {
//     test('add -1 + -3 to equal -4', () => {
//         expect(sum(-1, 3)).toBe(2);
//     });

//     test('adds 1 + 2 to equal 3', () => {
//         expect(sum(1, 2)).toBe(3);
//     });

//     test('adds 1.5 + 2.5 to equal 4', () => {
//         expect(sum(1.5, 2.5)).toBe(4);
//     });
// });

const paddingLeft = require('./index');

describe('PaddingLeft',() => {
    test('hola + 6 + x returns xxhola',() =>{
        expect(paddingLeft('hola',6,'x')).toBe('xxhola')
    });
    test('hola mi amigo, 6, x returns hola mi amigo',() =>{
        expect(paddingLeft('hola mi amigo',6,'x')).toBe('hola mi amigo')
    });
    test('ee, 4, aa return aaee',() =>{
        expect(paddingLeft('ee',4,'aa')).toBe('aaee')
    })
})