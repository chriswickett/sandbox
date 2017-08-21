var increment = function(value) {
  return value + 1;
};

var Person = {
  firstName: null,
  lastName: null,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

exports.increment = increment;
exports.Person = Person;