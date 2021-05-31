"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneTypedArray = void 0;
const cloneArrayBuffer_1 = require("./cloneArrayBuffer");
const TypedArrayMap = {
    "[object Float32Array]": Float32Array,
    "[object Float64Array]": Float64Array,
    "[object Int8Array]": Int8Array,
    "[object Int16Array]": Int16Array,
    "[object Int32Array]": Int32Array,
    "[object Uint8Array]": Uint8Array,
    "[object Uint16Array]": Uint16Array,
    "[object Uint32Array]": Uint32Array,
    "[object Uint8ClampedArray]": Uint8ClampedArray
};
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray) {
    const buffer = cloneArrayBuffer_1.cloneArrayBuffer(typedArray.buffer);
    return new TypedArrayMap[Object.prototype.toString.call(typedArray)](buffer, typedArray.byteOffset, typedArray.length);
}
exports.cloneTypedArray = cloneTypedArray;
