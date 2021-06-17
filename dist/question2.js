"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pip = exports.increment = void 0;
function increment(num) {
    return num + 1;
}
exports.increment = increment;
function pip(num, ...callbacks) {
    let ans = num;
    callbacks.forEach(callback => {
        ans = callback(ans);
    });
    return ans;
}
exports.pip = pip;
//# sourceMappingURL=question2.js.map