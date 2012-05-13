# diffsplit [![Build Status](https://secure.travis-ci.org/mmalecki/diffsplit.png)](http://travis-ci.org/mmalecki/diffsplit)
`diffsplit` is a module for splitting diffs into chunks.

## Installation

    npm install diffsplit

## Usage
```js
var diffsplit = require('diffsplit');
var diff = [
  '@@ -1,6 +1,6 @@ Some heading.',
  ' This is a simple test file.',
  ' ',
  '-It has 10 paragraphs.',
  '+It has many paragraphs.',
  ' ',
  ' However, only few will be modified.',
  ' ',
  '@@ -14,7 +14,7 @@',
  ' ',
  ' It\'s just a simple demonstration of `diffsplit`, a simple and tiny library.',
  ' ',
  '-So, how about modifying this file yet? I really should be working on something',
  '-else instead.',
  '+So, how about modifying this file yet? I really should be working on `diffsplit`',
  '+itself.',
  ' ',
  ' It\'s getting too long.',
].join('\n');
console.dir(diffsplit(diff));
```

Output:

```
[ { original: { start: 1, length: 6 },
    new: { start: 1, length: 6 },
    heading: 'Some heading.',
    lines: 
     [ ' This is a simple test file.',
       ' ',
       '-It has 10 paragraphs.',
       '+It has many paragraphs.',
       ' ',
       ' However, only few will be modified.',
       ' ' ] },
  { original: { start: 14, length: 7 },
    new: { start: 14, length: 7 },
    heading: '',
    lines: 
     [ ' ',
       ' It\'s just a simple demonstration of `diffsplit`, a simple and tiny library.',
       ' ',
       '-So, how about modifying this file yet? I really should be working on something',
       '-else instead.',
       '+So, how about modifying this file yet? I really should be working on `diffsplit`',
       '+itself.',
       ' ',
       ' It\'s getting too long.' ] } ]
```
