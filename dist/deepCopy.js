"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCopy = void 0;
const cloneArrayBuffer_1 = require("./cloneArrayBuffer");
const cloneDataView_1 = require("./cloneDataView");
const cloneDate_1 = require("./cloneDate");
const cloneRegexp_1 = require("./cloneRegexp");
const cloneTypedArray_1 = require("./cloneTypedArray");
const TypedArrayMap = {
    "[object Date]": cloneDate_1.cloneDate,
    "[object ArrayBuffer]": cloneArrayBuffer_1.cloneArrayBuffer,
    "[object DataView]": cloneDataView_1.cloneDataView,
    "[object Float32Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Float64Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Int8Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Int16Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Int32Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Uint8Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Uint8ClampedArray]": cloneTypedArray_1.cloneTypedArray,
    "[object Uint16Array]": cloneTypedArray_1.cloneTypedArray,
    "[object Uint32Array]": cloneTypedArray_1.cloneTypedArray,
    "[object RegExp]": cloneRegexp_1.cloneRegExp,
};
/**
 * Deep copy function for TypeScript.
 * @param T Generic type of target/copied value.
 * @param target Target value to be copied.
 * @see Original source: ts-deepcopy https://github.com/ykdr2017/ts-deepcopy
 * @see Code pen https://codepen.io/erikvullings/pen/ejyBYg
 */
function deepCopy(target) {
    const tag = Object.prototype.toString.call(target);
    if (TypedArrayMap[tag]) {
        return TypedArrayMap[tag](target);
    }
    if (target === null) {
        return target;
    }
    if (target instanceof Array) {
        const cp = [];
        target.forEach((v) => {
            cp.push(v);
        });
        return cp.map((n) => deepCopy(n));
    }
    if (typeof target === "object" && target !== {}) {
        const cp = Object.assign({}, target);
        Object.keys(cp).forEach((k) => {
            cp[k] = deepCopy(cp[k]);
        });
        return cp;
    }
    return target;
}
exports.deepCopy = deepCopy;
