# SYMVL
[![license](https://img.shields.io/github/license/value-fallback/SYMVL.svg?style=flat-square)](https://github.com/value-fallback/SYMVL/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/symvl.svg?style=flat-square)](https://www.npmjs.com/package/symvl)
[![npm](https://img.shields.io/npm/dt/symvl.svg?style=flat-square)](https://www.npmjs.com/package/symvl)
[![Travis](https://img.shields.io/travis/value-fallback/SYMVL.svg?style=flat-square)](https://travis-ci.org/value-fallback/SYMVL)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

Fallback when a value is not [Symbol](https://developer.mozilla.org/th/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

## Installation

**Via [NPM](https://www.npmjs.com):**

[![NPM](https://nodei.co/npm/symvl.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/symvl)

```
npm install symvl
```

**Via [Yarn](https://yarnpkg.com):**

```
yarn add symvl
```

## Usage

```javascript
const symvl = require('symvl');

// When a value is not Symbol, it will return fallback value.
let a = symvl(null, 0); // a = 0
let b = symvl({}, 'x'); // b = 'x'

// When a value is Symbol, it will return that value.
let c = symvl(Symbol(), 1); // c = Symbol()
let d = symvl(Symbol('SYMBOL'), 'abc'); // d = Symbol(SYMBOL)
```

## API

### symvl(value, fallbackValue)

#### value
A main value.

#### fallbackValue
A fallback value.
