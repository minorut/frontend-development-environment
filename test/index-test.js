const assert = require('assert');
const lib = require('../src/assets/js/lib/lib');

it('hello default', () => {
	assert(lib.hello() === 'Hello World');
});

it('hello with string', () => {
	assert(lib.hello('Mocha') === 'Hello Mocha');
});
