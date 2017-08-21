require('./test_library.js');
var increment = require('./some_functions.js').increment;
var Person = require('./some_functions.js').Person;

describe('increment()', function() {
  it('increments by 1', function() {
    expect(increment(1)).to_equal(2);
  });

  it('does not increment by 2', function() {
    expect(increment(1)).not_to_equal(3);
  });

  it('does not touch strings', function() {
    expect(increment("string")).to_equal("string");
  });
});

describe('Person', function() {
  describe('.fullName()', function() {
    it('returns the first name plus the last name', function() {
      Person.firstName = "Joe";
      Person.lastName = "Bloggs";
      expect(Person.fullName()).to_equal("Joe Bloggs");
    });
  });
});