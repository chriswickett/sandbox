var printOut = require('./utils.js').printOut;

describe = function(subject, assertions) {
  printOut('\n--------------', 'white');
  printOut(subject, 'white');
  assertions();
};

expect = function(subject) {
  return {
    subject: subject,
    to_equal: function(value) { 
      if (this.subject !== value) throw `Failed. Expected ${this.subject} to equal ${value}`;
      return true;
    },
    not_to_equal: function(value) { 
      if (this.subject === value) throw `Failed. Expected ${this.subject} not to equal ${value}`;
      return true;
    }
  };
};

it = function(expectation, assertion) {
  printOut(`  It ${expectation}`, 'white');
  try {
    assertion();
    printOut("    Passed.", 'green');
  } catch(error) {
    printOut("    " + error, 'red');
  }
};