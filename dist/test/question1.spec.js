"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question1_1 = require("../question1");
(() => {
    const { assert } = require('chai');
    describe('add Comma test case', () => {
        it('addComma(1234567) should be 1,234,567', () => {
            assert.equal(question1_1.addComma('1234567'), '1,234,567');
        });
        it('addComma(-1234567) should be -1,234,567', () => {
            assert.equal(question1_1.addComma('-1234567'), '-1,234,567');
        });
        it('addComma(1234567.12345) should be 1,234,567.12345', () => {
            assert.equal(question1_1.addComma('1234567.12345'), '1,234,567.12345');
        });
    });
})();
//# sourceMappingURL=question1.spec.js.map