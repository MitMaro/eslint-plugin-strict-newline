'use strict';

module.exports = {
	rules: {
		'strict-newline': require('./lib/rules/strict-newline')
	},
	configs: {
		recommended: {
			rules: {
				'strict-newline': 2
			}
		}
	}
};
