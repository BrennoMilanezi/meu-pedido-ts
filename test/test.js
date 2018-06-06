const lib = require('../build');
var expect = chai.expect;
describe('SUM Tests', () => {
    test('should rteturn 10', (done) => {
        expect(lib.sum(5, 5)).toBe(10);
        done();
    });
});