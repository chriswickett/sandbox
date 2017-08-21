var printOut = require('./utils.js').printOut;

var indentation = "";

var indent = function(block) {
  indentation += "  ";
  block();
  indentation = indentation.slice(0, -2);
};

describe = function(subject, assertions) {
  indent(function() {
    printOut(indentation + subject, 'white');
    assertions();
  });
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
  indent(function() {
    printOut(indentation + `It ${expectation}`, 'white');
    try {
      assertion();
      printOut(indentation + "  Passed.", 'green');
    } catch(error) {
      printOut(indentation + "  " + error, 'red');
    }
  });
};