const mocha = require('mocha');
const chai = require('chai');
const program = require('../words');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
describe('Test words function', () => {
    it('should handle specified input', () => {
        let testcase = JSON.stringify(program.words('olly olly in come free'));
        assert.equal(testcase, JSON.stringify({ olly: 2, in: 1, come: 1, free: 1 }));
    });

    it('should handle more complex input', () => {
        let testcase = JSON.stringify(program.words('olly olly has come in the free has the free olly'));
        assert.equal(testcase, JSON.stringify({ 'olly': 3, 'has': 2, 'come': 1, 'in': 1, 'the': 2, 'free': 2 }));
    });
    it('should return an object', () => {
        let testCase = typeof program.words('olly olly has come in the free has the free olly');
        assert.equal(testCase, 'object');
    });
    it('should handle multiple spaces', () => {
        let testcase = JSON.stringify(program.words('olly  olly car    car'));
        assert.equal(testcase, JSON.stringify({ 'olly': 2, 'car': 2 }));
    });
    it('test that empty/space string return empty object', () => {
        let testcase = JSON.stringify(program.words(''));
        assert.equal(testcase, JSON.stringify({}));
        testcase = JSON.stringify(program.words(' '));
        assert.equal(testcase, JSON.stringify({}));
    });
    it('test that input is string', () => {
        let testcase = JSON.stringify(program.words(6));
        assert.equal(testcase, JSON.stringify({ 'error': 'parameter must be a string' }));
    });
    it('should handle uppercase and lower case as same word', () => {
        let testcase = JSON.stringify(program.words('wisdom  WisDom WISDOM'));
        assert.equal(testcase, JSON.stringify({ 'wisdom': 3 }));
    });
    it('should handle empty parameter', () => {
        let testcase = JSON.stringify(program.words());
        assert.equal(testcase, JSON.stringify({ 'error': 'parameter must be a string' }));
    });
    it('should handle single word string', () => {
        let testcase = JSON.stringify(program.words('car'));
        assert.equal(testcase, JSON.stringify({ 'car': 1 }));
    });
    it('should handle unrepeated words', () => {
        let testcase = JSON.stringify(program.words('fire on the mountain'));
        assert.equal(testcase, JSON.stringify({ 'fire': 1, 'on': 1, 'the': 1, 'mountain': 1 }));
    });

});
