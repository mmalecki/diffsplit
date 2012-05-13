//
// ### function diffsplit (diff)
// #### @diff {array|string} Diff to split.
// Splits an unified diff into chunks.
//
module.exports = function diffsplit(diff) {
  var chunks = [],
      chunk;

  if (typeof diff === 'string') {
    diff = diff.split('\n');
  }

  diff.forEach(function (line) {
    var match = line.match(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@(.*)/);
    if (match) {
      if (chunk) {
        chunks.push(chunk);
      }

      chunk = {
        original: {
          start: +match[1],
          length: +match[2]
        },
        new: {
          start: +match[3],
          length: +match[4]
        },
        heading: match[5].substr(1),
        lines: []
      };
    }
    else {
      chunk.lines.push(line);
    }
  });
  
  if (chunk) {
    chunks.push(chunk);
  }

  return chunks;
};
