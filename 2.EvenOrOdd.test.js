let isOddOrEven = require('./2.EvenOrOdd')
let { assert, expect } = require('chai');

describe('Test about IsOddOrEven', () => {

    it('Invalid type', () => {
        let result = isOddOrEven(6);

        expect(result).be.equal(undefined);

    })

    it('Even string', () => {
        
        let result = isOddOrEven('Marina');
        expect(result).be.equal('even');
    })

    it('odd string', () => {
        
        let result = isOddOrEven('Marin');
        expect(result).be.equal('odd');
    })

})
