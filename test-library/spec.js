require('./test_library.js');
var increment = require('./some_functions.js').increment;

// Actual tests
describe('increment()', function() {
  it('increments by 1', function() {
    expect(increment(1)).to_equal(2);
  });

  it('does not increment by 2', function() {
    expect(increment(1)).not_to_equal(3);
  });

  it('does not touch strings', function() {
    expect(increment("string")).to_equal("string1");
  });
});