var printOut = function(string, color) {
  var colors = {
    //marc: Why reclare this array on every call? 
    red:   '\x1b[31m%s\x1b[31m',
    white: '\x1b[37m%s\x1b[37m',
    green: '\x1b[32m%s\x1b[32m',
  };
  if (!colors.hasOwnProperty(color)) throw `Color not found: ${color}`;
  console.log(colors[color], string);
};

exports.printOut = printOut;