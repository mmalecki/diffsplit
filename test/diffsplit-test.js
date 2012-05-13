var fs = require('fs'),
    path = require('path'),
    assert = require('assert'),
    vows = require('vows'),
    diffsplit = require('../'),
    fixtures = path.join(__dirname, 'fixtures');

function getTests() {
  var i = 0,
      entry;
      tests = {};

  while ((fs.existsSync || path.existsSync)(entry = path.join(fixtures, i + '.in.diff'))) {
    (function (i) {
      tests['with ' + i + ' fixture'] = {
        topic: diffsplit(fs.readFileSync(entry, 'utf8')),
        'should return correct value': function (data) {
          assert.deepEqual(data, require(path.join(fixtures, i + '.out.json')));
        }
      };
    })(i++);
  }

  return tests;
}

vows.describe('diffsplit').addBatch({
  'When usign `diffsplit`': getTests()
}).export(module);
