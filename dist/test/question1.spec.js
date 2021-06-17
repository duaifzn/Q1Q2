"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question1_1 = require("../question1");
const chai_1 = require("chai");
describe('addComma() test case', () => {
    it('addComma(1234567) should be 1,234,567', () => {
        chai_1.assert.equal(question1_1.addComma('1234567'), '1,234,567');
    });
    it('addComma(-1234567) should be -1,234,567', () => {
        chai_1.assert.equal(question1_1.addComma('-1234567'), '-1,234,567');
    });
    it('addComma(1234567.12345) should be 1,234,567.12345', () => {
        chai_1.assert.equal(question1_1.addComma('1234567.12345'), '1,234,567.12345');
    });
});
//# sourceMappingURL=question1.spec.js.map