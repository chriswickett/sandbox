var colors = {
  red:   '\x1b[31m%s\x1b[31m',
  white: '\x1b[37m%s\x1b[37m',
  green: '\x1b[32m%s\x1b[32m',
};

var printOut = function(string, color) {
  if (!colors.hasOwnProperty(color)) throw `Color not found: ${color}`;
  console.log(colors[color], string);
};

exports.printOut = printOut;