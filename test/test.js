const mocha = require('mocha');
const chai = require('chai');
const program = require('../words');
const assert = chai.assert;
describe('It should take string argument and count the occurrences of each word in the string', () => {

    it('should return accurate json object when a sentence is supplied as argument', () => {
        let testcase = program.words('olly olly in come free');
        assert.deepEqual(testcase, { olly: 2, in: 1, come: 1, free: 1 });

        testcase = program.words('olly olly has come in the free has the free olly');
        assert.deepEqual(testcase, { 'olly': 3, 'has': 2, 'come': 1, 'in': 1, 'the': 2, 'free': 2 });

    });
    it('should return an object', () => {
        let testCase = typeof program.words('olly olly has come in the free has the free olly');
        assert.deepEqual(testCase, 'object');
    });
    it('should strip off extra unwanted spaces in any input sentence/parameter', () => {
        let testcase = program.words('olly  olly car    car');
        assert.deepEqual(testcase, { 'olly': 2, 'car': 2 });
    });
    it('should return an empty object when an empty string is supplied as the input parameter/sentence', () => {
        let testcase = program.words('');
        assert.deepEqual(testcase, {});
        testcase = program.words(' ');
        assert.deepEqual(testcase, {});
    });
    it('test that parameter must not be number', () => {
        let testcase = program.words(6);
        assert.deepEqual(testcase, { error: 'parameter must not be number' });
    });
    it('test that parameter must not be an array', () => {
        let testcase = program.words([1, 2, 'wisdom']);
        assert.deepEqual(testcase, { error: 'parameter must not be an array' });
    });
    it('test that parameter is not undefined', () => {
        let testcase = program.words();
        assert.deepEqual(testcase, { error: 'parameter is undefined' });
    });
    it('test that parameter must not be an object', () => {
        let testcase = program.words({ a: 'apple', b: 'boy' });
        assert.deepEqual(testcase, { error: 'parameter must not be an object' });
    });
    it('should handle uppercase and lower case as same word', () => {
        let testcase = program.words('wisdom  WisDom WISDOM');
        assert.deepEqual(testcase, { 'wisdom': 3 });
    });
});
