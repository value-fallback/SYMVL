const assert = require('assert');
const symvl = require('../');

describe('SYMVL', () => {
	let fallbackValue = Symbol('fallback');

	it('should return `value` when `value` is Symbol.', () => {
		let symbolA = Symbol('A');
		let symbolB = Symbol('B');

		assert.strictEqual(symvl(symbolA, fallbackValue), symbolA);
		assert.strictEqual(symvl(symbolB, fallbackValue), symbolB);
	});
	it('should return `fallbackValue` when `value` is not Symbol.', () => {
		assert.strictEqual(symvl(null, fallbackValue), fallbackValue);
		assert.strictEqual(symvl({ a: 1, b: 2, c: 3 }, fallbackValue), fallbackValue);
		assert.strictEqual(symvl(0, fallbackValue), fallbackValue);
		assert.strictEqual(symvl('string', fallbackValue), fallbackValue);
	});
});
