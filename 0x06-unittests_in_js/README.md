# Unit Tests in JavaScript :smile:

This repository contains a series of tasks related to unit testing in JavaScript. The tasks cover various aspects, including basic tests with Mocha and Node assertion library, Chai assertion library, spies, stubs, hooks, and integration testing.

## Task 0: Basic test with Mocha and Node assertion library

### 0-calcul.js

```javascript
// 0-calcul.js
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
```

### 0-calcul.test.js

```javascript
// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
```

## Task 1: Combining descriptions

### 1-calcul.js

```javascript
// 1-calcul.js
function calculateNumber(type, a, b) {
  // ... (implementation)
}

module.exports = calculateNumber;
```

### 1-calcul.test.js

```javascript
// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of rounded numbers', function () {
      // ... (test cases)
    });
  });

  describe('SUBTRACT', function () {
    it('should return the difference of rounded numbers', function () {
      // ... (test cases)
    });
  });

  describe('DIVIDE', function () {
    it('should return the result of dividing rounded numbers', function () {
      // ... (test cases)
    });

    it('should return "Error" if roundedB is 0', function () {
      // ... (test case)
    });
  });
});
```

## Task 2: Basic test using Chai assertion library

### 2-calcul_chai.js

```javascript
// 2-calcul_chai.js
function calculateNumber(type, a, b) {
  // ... (implementation)
}

module.exports = calculateNumber;
```

### 2-calcul_chai.test.js

```javascript
// 2-calcul_chai.test.js
const chai = require('chai');
const { expect } = chai;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
  // ... (test cases using Chai expect)
});
```

The README can be extended further as you add more tasks.
