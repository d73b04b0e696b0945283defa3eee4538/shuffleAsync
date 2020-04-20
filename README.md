# shuffleAsync

Shuffles an array of elements asynchronously using The modern version of the Fisher–Yates shuffle. which means no thread blocking until entire array is shuffled. Helps you with bigarrays.

## Installation

### Node.js

shuffleAsync is available on npm. To install it, type:

``` $ npm install shuffleasync ```

## Usage

``` 
'use strict';

const shuffleAsync = require('shuffleasync');

const input = [1, 2, 3, 4, 5];
console.log('Input:');
console.log(JSON.stringify(input, null, 4));

console.log('Shuffling...');

shuffleAsync(input)
.then(output => {
   console.log('Output:');
   console.log(JSON.stringify(output, null, 4)); 
})
```

## Run Example

``` 
git clone https://github.com/ganeshnaidu/shuffleAsync.git
cd shuffleAsync
node example 
```

## Test

``` 
git clone https://github.com/ganeshnaidu/shuffleAsync.git
cd shuffleAsync
npm install
npm test 
```
