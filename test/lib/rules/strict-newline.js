'use strict';

var rule = require('../../../lib/rules/strict-newline');
var RuleTester = require('eslint').RuleTester;

var parserOptions = {};

var ruleTester = new RuleTester();
ruleTester.run('strict-newline', rule, {
	valid: [
		{
			code: [
				'"use strict"',
				'',
				'var a;'
			].join('\n'),
			parserOptions: parserOptions
		},
		{
			code: [
				'"use strict"',
				'',
				'var a;'
			].join('\n'),
			parserOptions: parserOptions
		},
		{
			code: [
				'"use strict"',
				''
			].join('\n'),
			parserOptions: parserOptions
		},
		{
			code: [
				'// comment',
				'"use strict"',
				''
			].join('\n'),
			parserOptions: parserOptions
		},
		{
			code: [
				'/* comment */',
				'"use strict"',
				''
			].join('\n'),
			parserOptions: parserOptions
		},
		{
			code: [
				'/*',
				'comment',
				'*/',
				'"use strict"',
				''
			].join('\n'),
			parserOptions: parserOptions
		},
		{
			code: '',
			parserOptions: parserOptions
		},
		{
			code: [
				'(function(){',
				'"use strict"',
				'',
				'var a;})()'
			].join('\n'),
			parserOptions: parserOptions
		}
	],

	invalid: [
		{
			code: [
				'"use strict"',
				'var a;'
			].join('\n'),
			parserOptions: parserOptions,
			errors: [{message: 'Expected newline after \'use strict\''}]
		},
		{
			code: [
				'"use strict";var a;'
			].join('\n'),
			parserOptions: parserOptions,
			errors: [{message: 'Expected newline after \'use strict\''}]
		},
		{
			code: [
				'"use strict"',
				'// comment'
			].join('\n'),
			parserOptions: parserOptions,
			errors: [{message: 'Expected newline after \'use strict\''}]
		},
		{
			code: [
				'"use strict"',
				'/* comment */'
			].join('\n'),
			parserOptions: parserOptions,
			errors: [{message: 'Expected newline after \'use strict\''}]
		},
		{
			code: [
				'"use strict"',
				'/*',
				'comment',
				'*/'
			].join('\n'),
			parserOptions: parserOptions,
			errors: [{message: 'Expected newline after \'use strict\''}]
		},
		{
			code: [
				'(function(){',
				'"use strict"',
				'var a;})();'
			].join('\n'),
			parserOptions: parserOptions,
			errors: [{message: 'Expected newline after \'use strict\''}]
		},
		{
			code: [
				'(function(){',
				'"use strict";var a;',
				'})();'
			].join('\n'),
			parserOptions: parserOptions,
			errors: [{message: 'Expected newline after \'use strict\''}]
		}
	]
});
