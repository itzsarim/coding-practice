var assert = require('assert');
var {isInteger} = require('../interview-questions');

describe('interview questions', () => {
  describe('isInteger()', () => {
    it('should return false if the value is not integer', () => {
      assert.equal(isInteger(1.1), false, "1.1");
      assert.equal(isInteger(0.13324), false, "0.13324");
      assert.equal(isInteger('sarim'), false, "string");
      assert.equal(isInteger(true), false, "boolean");
      assert.equal(isInteger(null), false, "null");
      assert.equal(isInteger(undefined), false, "undefined");
      assert.equal(isInteger({}), false, "object");
    });

    it('should return true if value is an integer', () => {
      assert.equal(isInteger(1234), true);
      assert.equal(isInteger(-12213), true);
      assert.equal(isInteger(0), true);
    })
  })
} )