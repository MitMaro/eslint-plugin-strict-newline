# ESLint Strict Newline Plugin

[![Dependency Status](https://david-dm.org/MitMaro/eslint-plugin-strict-newline.svg)](https://david-dm.org/MitMaro/eslint-plugin-strict-newline)
[![Build Status](https://travis-ci.org/MitMaro/eslint-plugin-strict-newline.svg?branch=master)](https://travis-ci.org/MitMaro/eslint-plugin-strict-newline)
[![Coverage Status](https://coveralls.io/repos/MitMaro/eslint-plugin-strict-newline/badge.svg?branch=master)](https://coveralls.io/r/MitMaro/eslint-plugin-strict-newline?branch=master)
[![NPM version](https://img.shields.io/npm/v/eslint-plugin-strict-newline.svg)](https://www.npmjs.com/package/eslint-plugin-strict-newline)

This is an ESLint rule that warns against a missing newline after 'use strict'.

## Install

    npm install eslint-plugin-strict-newline

## Documentation

### Rule Docs
[strict-newline](docs/rules/strict-newline.md)

### Basic Usage

```yaml
---
    
    plugins:
        - strict-newline
    rules:
        strict-newline/strict-newline: error

```

## License

Combokeys Context is released under the ISC license. See [LICENSE](LICENSE.md).
