import {addComma} from '../question1';
import { assert } from 'chai';

describe('addComma() test case', () => {
  it('addComma(1234567) should be 1,234,567', () => {
    assert.equal(addComma('1234567'), '1,234,567');
  });
  it('addComma(-1234567) should be -1,234,567', () => {
    assert.equal(addComma('-1234567'), '-1,234,567');
  });
  it('addComma(1234567.12345) should be 1,234,567.12345', () => {
    assert.equal(addComma('1234567.12345'), '1,234,567.12345');
  });
});

