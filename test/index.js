'use strict'

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const assert = chai.assert;

const shuffleAsync = require('../index.js');

describe('shuffleAsync', () => {

    it('Should resolve', () => {
        const input = [1, 2, 3, 4];
        const actual = shuffleAsync(input);
        return assert.isFulfilled(actual);
    });

    it('Should reject, when input argument is\'nt array', () => {
        const input = '1';
        const actual = shuffleAsync(input);
        return assert.isRejected(actual);
    });

    it('Should return an empty array', () => {
        const input = [];
        const actual = shuffleAsync(input);
        const expected = [];
        return assert.becomes(actual, expected);
    });

    it('Should not equal to the input', () => {
        const input = [1, 2, 3, 4];
        const actual = shuffleAsync(input);
        return assert.doesNotBecome(actual, input);
    });

    it('Should not block the thread', () => {
        const input = [1, 2, 3];
        const actual = Promise.race([
            shuffleAsync(input),
            Promise.resolve('first')
        ]);
        const expected = 'first'
        return assert.becomes(actual, expected);     
    })
});