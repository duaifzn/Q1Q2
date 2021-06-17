"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question2_1 = require("../question2");
const chai_1 = require("chai");
describe('pip() test case', () => {
    it('pip(4, increment) shoould be 5', () => {
        chai_1.assert.equal(question2_1.pip(4, question2_1.increment), 5);
    });
    it('pip(4, increment, increment) should be 6', () => {
        chai_1.assert.equal(question2_1.pip(4, question2_1.increment, question2_1.increment), 6);
    });
    it('pip(4, increment, increment, increment) should be 7', () => {
        chai_1.assert.equal(question2_1.pip(4, question2_1.increment, question2_1.increment, question2_1.increment), 7);
    });
});
//# sourceMappingURL=question2.spec.js.map