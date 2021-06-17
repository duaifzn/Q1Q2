import {pip, increment} from '../question2';
import { assert } from 'chai';

describe('pip() test case', () => {
  it('pip(4, increment) shoould be 5', () => {
    assert.equal(pip(4, increment), 5);
  });
  it('pip(4, increment, increment) should be 6', () => {
    assert.equal(pip(4, increment, increment), 6);
  });
  it('pip(4, increment, increment, increment) should be 7', () => {
    assert.equal(pip(4, increment, increment, increment), 7);
  });
});
