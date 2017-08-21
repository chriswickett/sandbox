var increment = function(value) {
  if (typeof value != "number") return value;
  return value + 1;
};

exports.increment = increment;