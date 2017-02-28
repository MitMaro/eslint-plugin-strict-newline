'use strict';

module.exports = function (context) {
	var MESSAGE = 'Expected newline after \'use strict\'';

	var sourceCode = context.getSourceCode();

	// Cache comments by start line
	var comments = context.getAllComments().reduce(function (result, token) {
		result[token.loc.start.line] = token; // eslint-disable-line no-param-reassign
		return result;
	}, {});

	return {
		Program: function (node) {
			var lastToken;
			var nextToken;
			var tokens = [];
			var token;
			var i;
			var nodeBodyLength;
			var bodyToCheck;

			// add IIFE support
			if (node.body.length === 1
				&& node.body[0].type === 'ExpressionStatement'
				&& node.body[0].expression.type === 'CallExpression'
				&& (node.body[0].expression.callee.type === 'FunctionExpression'
				|| node.body[0].expression.callee.type === 'ArrowFunctionExpression')
				&& node.body[0].expression.callee.body.type === 'BlockStatement'
			) {
				bodyToCheck = node.body[0].expression.callee.body.body;
			}
			else {
				bodyToCheck = node.body;
			}

			for (i = 0, nodeBodyLength = bodyToCheck.length; i < nodeBodyLength; i++) {
				token = bodyToCheck[i];

				if (
					token.type === 'ExpressionStatement'
					&& token.expression.type === 'Literal'
					&& token.expression.value === 'use strict'
				) {
					tokens[i] = token;
				}
				else {
					break;
				}
			}

			if (!tokens.length) {
				return;
			}

			for (token of tokens) {
				lastToken = sourceCode.getLastToken(token);
				nextToken = sourceCode.getTokenAfter(token);

				// next line is a comment
				if (typeof comments[lastToken.loc.end.line + 1] !== 'undefined') {
					break;
				}

				if (!nextToken) {
					return;
				}

				// next token is on same line as strict
				if (lastToken.loc.end.line === nextToken.loc.end.line) {
					break;
				}

				// next token is not next line after strict
				if (lastToken.loc.end.line + 1 !== nextToken.loc.end.line) {
					return;
				}
			}
			context.report(node, MESSAGE);
		}
	};
};
