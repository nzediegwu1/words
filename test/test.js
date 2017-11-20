const mocha = require('mocha');
const chai = require('chai');
const program = require('../words');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
describe('Test words function', () => {
    it('should handle specified input', () => {
        let testcase = program.words('olly olly in come free');
        assert.deepEqual(testcase, { olly: 2, in: 1, come: 1, free: 1 });
    });
    it('should handle more complex input', () => {
        let testcase = program.words('olly olly has come in the free has the free olly');
        assert.deepEqual(testcase, { 'olly': 3, 'has': 2, 'come': 1, 'in': 1, 'the': 2, 'free': 2 });
    });
    it('should return an object', () => {
        let testCase = typeof program.words('olly olly has come in the free has the free olly');
        assert.deepEqual(testCase, 'object');
    });
    it('should handle multiple spaces', () => {
        let testcase = program.words('olly  olly car    car');
        assert.deepEqual(testcase, { 'olly': 2, 'car': 2 });
    });
    it('test that empty/space string return empty object', () => {
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
        let testcase = program.words({a:'apple', b:'boy'});
        assert.deepEqual(testcase, { error: 'parameter must not be an object' });
    });
    it('should handle uppercase and lower case as same word', () => {
        let testcase = program.words('wisdom  WisDom WISDOM');
        assert.deepEqual(testcase, { 'wisdom': 3 });
    });
});
